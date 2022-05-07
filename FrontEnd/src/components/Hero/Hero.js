import React, { useEffect } from "react";
import URL from "../../BaseUrl/Url";
import { useCookies } from "react-cookie";
import { useState } from "react";
import ApiClient from "./../../API/ApiClient";
import { useSelector, useDispatch } from "react-redux";
import { heroActions } from './../../ReduxFiles/Actions/HeroActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HeroImage from '../../images/Hero/hero1.svg';
import { ShowDp } from "../../ReduxFiles/Actions/ProfileActions";
import { Links } from "../NavBar/NavLinks";
const Hero = () => {
  const { REACT_APP_API_URL } = process.env;
  const [token, settoken] = useCookies();
  const [Loaded, setLoaded] = useState(0)
  const dispatch = useDispatch()
  const newstate = useSelector(state => state.ONE)
  const HeroState = useSelector(state => state.HERO);
  const ProfileState = useSelector(state => state.PROFILE);
  // const notify = () => toast(`Welcome ${HeroState} !! Have a nice day..`);

  useEffect(() => {
    if (token["token"]) {
      ApiClient()
        .get(`/api/Profile/${token["token"]}/`)
        .then((response) => {
          // dispatch(heroActions(response.data.username));
          // console.log(response.data);
          dispatch(ShowDp(response.data));
          setLoaded(1);
          
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, []);



  return (
    <>





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
      <div className="bg-pyBlue-500">

      <div className="HeroContainer  flex flex-wrap  mx-auto w-3/4 h-screen">
        <div className="lg:mt-32   w-full lg:w-1/2 mt-10">
          {/* <h2 className="font-bold text-white text-5xl lg:text-6xl  capitalize  ">Where the world Show their talents. </h2> */}
          <p className="font-semibold lg:text-3xl mb-4 space-x-5 text-sm mt-5 lg:mt-7 text-gray-300">A free platform for your complete </p>

          <h2 className="font-bold text-white text-5xl lg:text-6xl  capitalize  ">fashion and fitness solution..</h2>

          <div className=" flex   sm:3/4 lg:w-1/2 mt-5 ">
              <Links  styles="shadow-lg bg-green-500 text-center font-bold text-lg   hover:bg-pyBlue-400  rounded-lg p-5 lg:w-1/2  mr-4 " location='/login' name='Login' />
              <Links styles="shadow-lg bg-gray-300 text-black text-center font-bold text-lg  hover:bg-pyBlue-400 hover:text-white rounded-lg p-5 lg:w-1/2 " location='/signup' name='Sign Up' />

            </div>
          {/* <p className="font-semibold lg:text-xl text-sm mt-5 lg:mt-7 text-gray-300">A free platform for your complete </p> */}
          {/* <p className="font-semibold lg:text-xl text-sm mt-5 lg:mt-7 text-gray-300">A free platform for beginners to Showcase their projects and tools and get their dream job.</p> */}
        </div>

        <div className="lg:w-1/2 w-full">
            <img className="sm:w-3/4 mx-auto" src={HeroImage} alt="" />
            {/* {Loaded?<img className="sm:w-3/4 mx-auto" src={`${REACT_APP_API_URL}${ProfileState.data.Dp}`} alt="" />:''} */}
            {/* {Loaded?<img className="sm:w-3/4 mx-auto" src={`${REACT_APP_API_URL}${ProfileState.data.Dp}`} alt="" />:''} */}
            {/* {ProfileState.Data.Dp} */}
            {/* {ProfileState} */}

        </div>
      </div>
      </div>

    </>
  );
};

export default Hero;

 