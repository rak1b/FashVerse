import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import URL from "../../BaseUrl/Url";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const styles =
  " text-gray-900 border border-blue-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline";
  // "h-12 border-2 rounded-md border-2 outline-none focus-within:border-pyBlue-300";
const SignUp = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const [Confirmpassword, setConfirmpassword] = useState();
  const [email, setemail] = useState();
  const [fname, setfname] = useState();
  const [lname, setlname] = useState();

  const DoSignup = () => {
    const url = `${URL}/api/users/`;
    const data = {
      username: username,
      email: email,
      password: password,
      first_name:fname,
      last_name:lname,
    };

    console.log(data);

    axios
      .post(url, data)
      .then((response) => {
        console.log(response.data);
        toast.success(`Account Created Successfully`);

        setTimeout(function () {
          navigate("/login");
        }, 2000);
      })
      .catch(function (error) {
        console.log(error);
        toast.error(`Error occured,please try again!`);
      });
  };

  return (
    <div className="h-auto w-3/4 mx-auto  flex flex-wrap mt-10 rounded-lg shadow-xl p-14 bg-white">
      <div className="form_container flex flex-col lg:w-2/3 md:w-2/3 w-full ">
        <h2 className="text-xl text-blue-300  font-bold uppercase">Register</h2>
        <div className="flex flex-col mt-7">
          {/* <div className="flex flex-col my-4">
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
          </div> */}

          <div className="flex flex-col my-4">
            <label className="font-bold text-gray-400 uppercase text-sm" htmlFor="Username">
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

          <div className="flex w-full">
            <div className="flex flex-col my-4 w-1/2">
              <label className="font-bold text-gray-400 uppercase text-sm" htmlFor="fname">
                Enter First Name :
              </label>
              <input
                id="fname"
                onChange={(e) => {
                  setfname(e.target.value);
                }}
                value={fname}
                className={styles}
                type="text"
                placeholder="First Name"
              />
            </div>

            <div className="flex flex-col my-4 ml-4 w-1/2">
              <label className="font-bold text-gray-400 uppercase text-sm" htmlFor="lname">
                Enter Last Name :
              </label>
              <input
                id="fname"
                onChange={(e) => {
                  setlname(e.target.value);
                }}
                value={lname}
                className={styles}
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="flex flex-col my-4 ">
            <label className="font-bold text-gray-400 uppercase text-sm" htmlFor="email">
              Enter email :
            </label>
            <input
              id="email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
              value={email}
              className={styles}
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="flex w-full">

          <div className="flex flex-col my-4 w-1/2 ">
            <label className="font-bold text-gray-400 uppercase text-sm" htmlFor="Password">
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

          <div className="flex flex-col my-4 w-1/2 ml-2">
            <label
              className="font-bold text-gray-400 uppercase text-sm"
              htmlFor="Confirm_Password"
            >
              Confirm Password :
            </label>
            <input
              id="Confirm_Password"
              onChange={(e) => {
                setConfirmpassword(e.target.value);
              }}
              value={Confirmpassword}
              className={styles}
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          </div>

          <button
            onClick={DoSignup}
            className="bg-pyBlue-400 w-40 p-3 rounded-lg  uppercase text-gray-200 font-bold hover:bg-pyBlue-500"
          >
            Submit
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/3 lg:w-1/3  ">
        <div className="w-9/12 lg:mx-auto md:mx-auto mt-10 lg:mt-1 flex flex-col">
          <h2 className="text-blue-300  font-bold uppercase">Already have an account?</h2>
          <p className="text-gray-400 font-sans my-5">
            If you already have a Pytools account please sign in.
          </p>
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="bg-gray-400 w-16 py-2 rounded-lg  uppercase text-gray-200 font-bold hover:bg-pyBlue-500"
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
