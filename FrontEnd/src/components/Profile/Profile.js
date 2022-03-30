import React from "react";
import { ReactDOM } from "react-dom";
import Female from "../../images/female.jpg";
import { useSelector } from 'react-redux';


const ProfileModal = ({ hideProfileModal,details }) => {
  const { REACT_APP_API_URL } = process.env;
  // const ProfileState = useSelector(state => state.PROFILE);



  return (
    <div
      className="absolute z-20  w-full h-screen flex justify-center blur-3xl "
      style={{ backgroundColor: "#01080e78" }}
    >
      <div className="w-1/2 h-3/4  rounded-lg z-30 mt-10 relative   bg-white shadow-lg   ">
        <div   onClick={() => hideProfileModal(0)} className="bg-red-500 cursor-pointer rounded-full flex justify-center items-center w-10 h-10  absolute  -right-3 -top-3  shadow-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white "
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="h-48 w-full bg-pyBlue-400 checker-bg flex items-center justify-center p-4 text-blue-500">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-20 w-20"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clip-rule="evenodd"
            />
          </svg> */}
            <img className=" rounded-full ml-2 lg:ml-4 w-32 h-32" src={`${REACT_APP_API_URL}${details.data.Dp}`} alt="" />

        </div>

        <div className="p-4 border-t border-gray-200 w-3/4 m-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-gray-600 font-medium">{details.details.username}</h1>
            
          </div>
          <p className="text-gray-400 text-sm my-1">Active</p>

          <h1 className="text-gray-600 font-medium">{details.details.email}</h1>
          <h1 className="text-gray-600 font-medium">{details.details.full_name}</h1>

        </div>
        
      </div>
    </div>
  );
};

export default ProfileModal;
