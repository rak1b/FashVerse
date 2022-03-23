import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import URL from "../../BaseUrl/Url";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const styles = "h-12 border-2 rounded-md border-2 outline-none focus-within:border-pyBlue-300";
const SignUp = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const [email, setemail] = useState();

  const DoSignup = () => {
    const url = `${URL}/api/users/`;
    const data = {
      username: username,
      email: email,
      password: password,
    };

    console.log(data);

    axios
      .post(url, data)
      .then((response) => {
        console.log(response.data);
        toast.success(`Account Created Successfully`)

        setTimeout(function () {
          navigate("/login");
        }, 2000);
      })
      .catch(function (error) {
        console.log(error);
        toast.error(`Error occured,please try again!`)

      });
  };

  return (
    <div className="h-auto w-3/4 mx-auto  flex flex-wrap mt-5">
      <div className="form_container flex flex-col lg:w-2/3 md:w-2/3 w-full ">
        <h2 className="text-3xl text-pyBlue-500 font-bold">Signup</h2>
        <div className="flex flex-col mt-7">
          <div className="flex flex-col my-4">
            <label className="font-bold text-gray-500" htmlFor="Email">
              Enter Email :
            </label>
            <input
              id="Email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
              value={email}
              className={styles}
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="flex flex-col my-4">
            <label className="font-bold text-gray-500" htmlFor="Username">
              Enter username :
            </label>
            <input
              id="Username"
              onChange={(e) => {
                setusername(e.target.value);
              }}
              value={username}
              className={styles}
              type="text"
              placeholder="Username"
            />
          </div>

          <div className="flex flex-col my-4 ">
            <label className="font-bold text-gray-500" htmlFor="Password">
              Enter Password :
            </label>
            <input
              id="Password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              value={password}
              className={styles}
              type="password"
              placeholder="Password"
            />
          </div>

          <div className="flex flex-col my-4">
            <label className="font-bold text-gray-500" htmlFor="Confirm_Password">
              Confirm Password :
            </label>
            <input id="Confirm_Password" className={styles} type="password" placeholder="Confirm Password" />
          </div>

          <button onClick={DoSignup} className="bg-pyBlue-400 w-40 p-3 rounded-lg text-gray-200 font-bold hover:bg-pyBlue-500">
            Submit
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/3 lg:w-1/3  ">
        <div className="w-9/12 lg:mx-auto md:mx-auto sm:mt-8 flex flex-col">
          <h2 className="text-gray-700 font-bold">Already have an account?</h2>
          <p className="text-gray-500 my-5">If you already have a Pytools account please sign in.</p>
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="bg-gray-400 w-16 py-2 rounded-lg text-gray-200 font-bold hover:bg-pyBlue-500"
          >
            Login
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


  );
};

export default SignUp;
