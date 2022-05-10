import React, { useEffect } from "react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
// import {Editor as ClassicEditor} from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState } from "react";
import "../App.css";
import ApiClient from "./../API/ApiClient";
import { useCookies } from "react-cookie";
import { toast, ToastContainer } from "react-toastify";
import { axios } from "axios";
import RandomString from './RandomString/RandomString';
// https://dev.to/thomz/uploading-images-to-django-rest-framework-from-forms-in-react-3jhj
// https://noteyard.piyushdev.xyz/blogpost/62347038802b0390bc078843
// https://www.youtube.com/watch?v=cevL8_Rsmuc&ab_channel=DEV_PIE
// https://ckeditor.com/docs/ckeditor5/latest/installation/getting-started/frameworks/react.html

const TextEditor = () => {
  const [Content, setContent] = useState("Share Your Thought...");
  const [token, settoken] = useCookies();
  const [CurrentUser, SetCurrentUser] = useState("");
  const { REACT_APP_API_URL } = process.env;

  const API_URl = REACT_APP_API_URL;
  const UPLOAD_ENDPOINT = "api/postImage/";

  // const API_URl = "https://noteyard-backend.herokuapp.com";
  // const UPLOAD_ENDPOINT = "api/blogs/uploadImg";
useEffect(() => {
  

  if (token["token"]) {
    ApiClient()
      .get(`/api/Profile/${token["token"]}/`)
      .then((response) => {
        // console.log('Log from useefffect........................')
        // console.log(response.data.data.user);
        SetCurrentUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // console.log("Current user/////////////////////")
  // console.log(CurrentUser)
 
}, [])

const CreatePost = () => {
  // const url = `${URL}/api/posts/`;
  const url = `/api/posts/`;
  const data = {
    user: CurrentUser.data.user,
    username: CurrentUser.details.username,
    fullname: CurrentUser.details.full_name,
    content: Content,
  };
  // console.log('Ready for posting log...........')
  // console.log(data);

  ApiClient()
    .post(url, data)
    .then((response) => {
      // console.log(response.data);
      toast.success(`Post Created Successfully`);
      setContent("");
    })
    .catch(function (error) {
      // console.log(error);
      toast.error(`Error occured,please try again!`);
    });
};
  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
            const newFileName = RandomString(10) + file.name.split(' ').join('_');
            body.append("image",  file, newFileName);
          
            ApiClient()
            .post(`${API_URl}/${UPLOAD_ENDPOINT}`, body)
            .then((response) => {
              console.log(response.data);
              // toast.success(`Post Created Successfully`);
                resolve({ default: `${API_URl}/${response.data.url}` });

            })
            .catch(function (error) {
              console.log(error);
              // toast.error(`Error occured,please try again!`);
            });


            // fetch(`${API_URl}/${UPLOAD_ENDPOINT}`, {
            //   method: "post",
            //   body: body,
            // })
              // .then((res) => {
              //   console.log("printing res")
              //   console.log(res.url);
              //   console.log(res);
              //   resolve({ default: `${API_URl}/${res.url}` });

              //   console.log(res.json());
              // })
              // .then((res) => {
              //   resolve({ default: `${API_URl}/${res.url}` });
              // })
              // .catch((err) => {
              //   reject(err);
              // });
          });
        });
      },
    };
  }

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }
  return (
    <div>
      <div className="App shadow-lg border-1 rounded bg-white minH">
        <CKEditor
          config={{
            extraPlugins: [uploadPlugin],
          }}
          editor={Editor}
          data={Content}
          onReady={(editor) => {
            // console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setContent(data);
            // console.log(Content);

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
