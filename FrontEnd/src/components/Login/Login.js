import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { LoginStatusActions } from "../../ReduxFiles/Actions/LoginActions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import URL from './../../BaseUrl/Url';
const styles = "h-12 border-2 rounded-md border-2 outline-none focus-within:border-pyBlue-300";

const Login = () => {
  let navigate = useNavigate();
  const [token, settoken] = useCookies();
  const dispatch = useDispatch();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

 

  const Dologin = () => {
    console.log(username);
    console.log(password);
    const url = "http://localhost:8000/api/auth";
    // const url = `${URL}/api/auth/`;

    const data = {
      username: username,
      password: password,
    };

    axios
      .post(url, data)
      .then((response) => {
        console.log(response.data);
        settoken("token", response.data.token);
        toast.success(`Login Successfull`)
        setTimeout(function () {
          navigate("/");
        }, 2000);


      })
      .catch(function (error) {
        console.log(error);
        toast.error(`Invalid Username or Password`)

      });
  };
  return (
    <div className="flex items-center  justify-center h-3/4 lg:mt-20 sm:mt-2">
    <div className=" w-3/4 p-14 mx-auto mt-5 flex flex-wrap rounded-lg bg-white shadow-lg h-auto">
      <div className="form_container flex flex-col lg:w-2/3 md:w-2/3 w-full ">
        <h2 className="text-xl text-blue-400  uppercase space-x-2 font-semibold ">Login</h2>
        <div className="flex flex-col mt-7">
          <div className="flex flex-col my-4">
            <label className=" text-gray-400 text-sm  uppercase font-bold " htmlFor="username">
              Enter Username :
            </label>
            <input
              id="username"
              type="text"
              onChange={(e) => {
                setusername(e.target.value);
              }}
              value={username}
              // className={styles}
              className="w-3/4  text-gray-900 border border-blue-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
         
              placeholder="Username"
            />
          </div>

          <div className="flex flex-col my-4 ">
            <label className="text-gray-400 text-sm  uppercase font-bold " htmlFor="Password">
              Enter Password :
            </label>
            <input
              id="Password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              value={password}
              className="w-3/4  text-gray-900 border border-blue-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"

              type="password"
              placeholder="Password"
            />
          </div>

          <button onClick={Dologin} className="uppercase bg-pyBlue-400 w-40 p-3 rounded-lg text-gray-200 font-bold hover:bg-pyBlue-500">
            Submit
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/3 lg:w-1/3  ">
        <div className="w-9/12 lg:mx-auto md:mx-auto sm:mt-8 mt-10 flex flex-col">
          <h2 className="text-blue-300  font-bold uppercase">Register</h2>
          <p className="text-gray-400 my-4 font-sans">Don't have a pyTools account yet?.</p>
          <button
            onClick={() => {
              navigate("/signup");

            }}
            className="bg-gray-400 w-auto py-2 rounded-lg uppercase text-gray-200 font-bold hover:bg-pyBlue-500"
          >
            Create an account
          </button>
        </div>
      </div>
    
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
    </div>
  );
};

export default Login;

