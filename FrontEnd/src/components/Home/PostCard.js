import React, { useState } from "react";
import { Markup } from "interweave";
import { useCookies } from "react-cookie";
import ApiClient from "./../../API/ApiClient";

const PostCard = ({ content, username, fullname, id }) => {
  const [CurrentUser, SetCurrentUser] = useCookies("");

  const [Display, setDisplay] = useState(0);
  const [love,setLove] = useState(0);

  const PostDisplayToggle = () => {
    setDisplay(!Display);
  };

  const doReact = () => {
    console.log(id);
    console.log(CurrentUser["username"]);
    setLove(!love)

    const data = {
      post:id,
      love:love,
      loved_by:CurrentUser["username"]
    }
    ApiClient()
      .post('api/React/',data )
      .then((response) => {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const ClassForContent = "bg-white border shadow p-5 text-xl text-gray-700";

  return (
    <>
      <div className="bg-white mt-10  ">
        {/* <img className="border rounded-t-lg shadow-lg " src="https://images.unsplash.com/photo-1572817519612-d8fadd929b00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/> */}
        <div
          className={
            !Display
              ? ClassForContent + " h-96 overflow-hidden"
              : ClassForContent
          }
        >
          <h2 className="text-gray-500 my-3">
            
            Posted by : {fullname} (
            <span className="font-bold italic text-blue-500">{username}</span>)
          </h2>
          {/* <h2 className="text-gray-500">Posted by : <span className="font-bold italic text-blue-500">{username}</span></h2> */}

          <Markup content={content} />
        </div>
        <div className="bg-white p-3 border shadow-xl flex flex-row flex-wrap h">
          <div
            onClick={doReact}
            className="w-1/3 m-auto  text-center text-xl text-gray-700 font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 hover:text-red-500"
              // fill="red"
              fill={love?"red":"black"}

              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          {/* <div className="w-1/3 hover:bg-gray-200 border-l-4 border-r- text-center text-xl text-gray-700 font-semibold">
            Share
          </div> */}
          <div
            onClick={PostDisplayToggle}
            className="w-1/2 hover:bg-gray-200 border-l-4 text-center text-xl text-gray-700 font-semibold"
          >
            {!Display ? "Read More" : "See Less"}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
