import React from "react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
// import {Editor as ClassicEditor} from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState } from "react";
import "../App.css";
import ApiClient from "./../API/ApiClient";
import { useCookies } from "react-cookie";
import { toast, ToastContainer } from "react-toastify";
import { axios } from "axios";
// https://noteyard.piyushdev.xyz/blogpost/62347038802b0390bc078843
// https://www.youtube.com/watch?v=cevL8_Rsmuc&ab_channel=DEV_PIE
// https://ckeditor.com/docs/ckeditor5/latest/installation/getting-started/frameworks/react.html

const TextEditor = () => {
  const [Content, setContent] = useState("Share Your Thought...");
  const [token, settoken] = useCookies();
  const [CurrentUser, SetCurrentUser] = useState("");
  const API_URl = "https://noteyard-backend.herokuapp.com";
  const UPLOAD_ENDPOINT = "api/blogs/uploadImg";

  if (token["token"]) {
    ApiClient()
      .get(`/api/Profile/${token["token"]}/`)
      .then((response) => {
        console.log(response.data.data.user);
        SetCurrentUser(response.data.data.user);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const CreatePost = () => {
    // const url = `${URL}/api/posts/`;
    const url = `/api/posts/`;
    const data = {
      user: CurrentUser,
      content: Content,
    };

    console.log(data);

    ApiClient()
      .post(url, data)
      .then((response) => {
        console.log(response.data);
        toast.success(`Post Created Successfully`);
        setContent("");
      })
      .catch(function (error) {
        console.log(error);
        toast.error(`Error occured,please try again!`);
      });
  };

  
  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
            body.append("uploadImg", file);
            fetch(`${API_URl}/${UPLOAD_ENDPOINT}`, {
              method: "post",
              body: body,
            })
              .then((res) => res.json())
              .then((res) => {
                resolve({ default: `${API_URl}/${res.url}` });
              })
              .catch((err) => {
                reject(err);
              });
          });
        });
      },
    };
  }

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
        return uploadAdapter(loader);
    }
}
  return (
    <div>
      <div className="App shadow-lg border-1 rounded bg-white minH">
        <CKEditor
         config={{
            extraPlugins: [uploadPlugin]
        }}
          editor={Editor}
          data={Content}
          onReady={(editor) => {
            // console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setContent(data);
            console.log(Content);

            // console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            // console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            // console.log('Focus.', editor);
          }}
        />
      </div>

      <button
        onClick={CreatePost}
        className="bg-pyBlue-500 w-auto mt-4 p-5 rounded-lg text-gray-200 font-bold hover:bg-pyBlue-400 "
      >
        Share{" "}
      </button>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default TextEditor;
