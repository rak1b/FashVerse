import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import ApiClient from './../../API/ApiClient';
import { useCookies } from 'react-cookie';
import Profile from "./profile.jpg"
import Spinner from './../Mini/Spinner';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ProfileLoader from "./ProfileLoader";
import ProfileLoader1 from "./ProfileLoader";





const ProfileCard = () => {
    const { REACT_APP_API_URL } = process.env;

//   const ProfileState = useSelector((state) => state.PROFILE);
//   console.log(ProfileState)

const [token, settoken] = useCookies();
const [Loaded, setLoaded] = useState(0)
const [ProfileData, setProfileData] = useState([])

const CardContent = () => {
  return (
    <div>
      <main class="bg-gray-100 bg-opacity-25">
        <div class="lg:w-8/12 lg:mx-auto mb-8">
          <header class="flex flex-wrap items-center p-4 md:py-8">
            <div class="md:w-3/12 md:ml-16">
              <img
                className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
             border-2 border-yellow-300 p-1"
             src={typeof ProfileData !== 'undefined'?`${REACT_APP_API_URL}${ProfileData.data.Dp}`:Profile}
             
                alt="profile"
              />
           
            </div>

            <div class="w-8/12 md:w-7/12 ml-4">
              <div class="md:flex md:flex-wrap md:items-center mb-4">
                <h2 class="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
                {Loaded?ProfileData.details.username:<Skeleton/>}
                </h2>

                <span
                  class="inline-block fas fa-certificate fa-lg text-blue-500 
                       relative mr-6 text-xl transform -translate-y-2"
                  aria-hidden="true"
                >

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </span>

                <a
                  href="#"
                  class="bg-blue-500 px-2 py-1 
                text-white font-semibold text-sm rounded block text-center 
                sm:inline-block "
                >
                  Follow
                </a>
              </div>

              <ul class="hidden md:flex space-x-8 mb-4">
                <li>
                  <span class="font-semibold">136</span>
                  posts
                </li>

                <li>
                  <span class="font-semibold">40.5k</span>
                  followers
                </li>
                <li>
                  <span class="font-semibold">302</span>
                  following
                </li>
              </ul>

              <div class="hidden md:block">
                <h1 class="font-semibold">Mr Travlerrr...</h1>
                <span>Travel, Nature and Music</span>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>

            <div class="md:hidden text-sm my-2">
              <h1 class="font-semibold">Mr Travlerrr...</h1>
              <span>Travel, Nature and Music</span>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </header>

          <div class="px-px md:px-3">
            <ul
              class="flex md:hidden justify-around space-x-8 border-t 
        text-center p-2 text-gray-600 leading-snug text-sm"
            >
              <li>
                <span class="font-semibold text-gray-800 block">136</span>
                posts
              </li>

              <li>
                <span class="font-semibold text-gray-800 block">40.5k</span>
                followers
              </li>
              <li>
                <span class="font-semibold text-gray-800 block">302</span>
                following
              </li>
            </ul>

            <ul
              class="flex items-center  md:justify-center space-x-12  
            uppercase tracking-widest font-semibold text-xs text-gray-600
            border-t"
            >
              <li class="md:border-t md:border-gray-700 md:-mt-px md:text-gray-700">
                <a class="inline-block p-3" href="#">
                  <i class="fas fa-th-large text-xl md:text-xs"></i>
                  <span class="hidden md:inline">post</span>
                </a>
              </li>
 
            </ul>
            <div class="flex flex-wrap -mx-px md:-mx-3"></div>
          </div>
        </div>
      </main>
    {/* <Skeleton count={10} /> */}

    </div>
  )
}

const CardContentSkeleton = () => {
  return (
    <div>
      <main class="bg-gray-100 bg-opacity-25">
        <div class="lg:w-8/12 lg:mx-auto mb-8">
          <header class="flex flex-wrap items-center p-4 md:py-8">
            <div class="md:w-3/12 md:ml-16">
            <Skeleton circle={1} />
           
            </div>

            <div class="w-8/12 md:w-7/12 ml-4">
              <div class="md:flex md:flex-wrap md:items-center mb-4">
                <h2 class="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
                <Skeleton/>
                </h2>

                

             
                  <Skeleton/>
              </div>

              <ul class="hidden md:flex space-x-8 mb-4">
                <li>
                  <Skeleton/>
                </li>

                <li>
                  <Skeleton/>
                </li>
                <li>
                  <Skeleton/>
                </li>
              </ul>

              <div class="hidden md:block">
                <h1 class="font-semibold"><Skeleton/></h1>
                <p><Skeleton/></p>
              </div>
            </div>

            <div class="md:hidden text-sm my-2">
              <h1 class="font-semibold"><Skeleton/></h1>
              <span><Skeleton/></span>
              <p><Skeleton/></p>
            </div>
          </header>

          <div class="px-px md:px-3">
            <ul
              class="flex md:hidden justify-around space-x-8 border-t 
        text-center p-2 text-gray-600 leading-snug text-sm"
            >
              <li>
                <span class="font-semibold text-gray-800 block"><Skeleton/></span>
                <Skeleton/>
              </li>

              <li>
                <span class="font-semibold text-gray-800 block"><Skeleton/></span>
                <Skeleton/>
              </li>
              <li>
                <span class="font-semibold text-gray-800 block"><Skeleton/></span>
                <Skeleton/>
              </li>
            </ul>

            <ul
              class="flex items-center  md:justify-center space-x-12  
            uppercase tracking-widest font-semibold text-xs text-gray-600
            border-t"
            >
              <li class="md:border-t md:border-gray-700 md:-mt-px md:text-gray-700">
                <a class="inline-block p-3" href="#">
                  <i class="fas fa-th-large text-xl md:text-xs"></i>
                  <span class="hidden md:inline"><Skeleton/></span>
                </a>
              </li>
 
            </ul>
            <div class="flex flex-wrap -mx-px md:-mx-3"></div>
          </div>
        </div>
      </main>
    {/* <Skeleton count={10} /> */}
    </div>
  )
}

useEffect(() => {
  setTimeout(() => {
    
 
  if (token["token"]) {
    ApiClient()
      .get(`/api/Profile/${token["token"]}/`)
      .then((response) => {
        console.log(response.data);
        setProfileData(response.data)
    setLoaded(1);

      })
      .catch(function (error) {
        console.log(error);
      });
  } else {
    setLoaded(0);
  }

},2000)
}, [token["token"]]);




  return (
    
       Loaded?<CardContent/>:<ProfileLoader/>
      //  Loaded?<CardContent/>:<Spinner/>

    

    
    // <CardContent/>
 
  )
};

export default ProfileCard;
