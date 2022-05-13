import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { LinkInfo_Logged_in,LinkInfo_HomePage } from '../NavBar/LInkInfo'
import { NavLinks } from '../NavBar/NavLinks'
import TextEditor from '../TextEditor'
import CreatePost from './CreatePost'
import { SideNav } from './SIdeNav'
import ShowFeed from './ShowFeed';
import { useCookies } from 'react-cookie';
import { useState } from 'react';
import ApiClient from './../../API/ApiClient';

export const HomePage = () => {
  const [token, settoken] = useCookies();
  const [CurrentUser, SetCurrentUser] = useCookies("");
  

  useEffect(() => {

    if (token["token"]) {
      ApiClient()
        .get(`/api/Profile/${token["token"]}/`)
        .then((response) => {
          SetCurrentUser("username",response.data.details.username);

        })
        .catch(function (error) {
          console.log(error);
        });
    }
    
  



    }, [])
   
      





  return (
    <>



<div className="w-full h-screen flex flex-row flex-wrap justify-center  ">
  
  
  <div className="bg-white shadow-lg border-t-4 border-indigo-500 absolute bottom-0 w-full  flex flex-row flex-wrap">
    <div className="w-full text-right"><button className="p-2 fa fa-bars text-4xl text-gray-600"></button></div>
  </div>
  
   <div className="w-0 md:w-1/4 lg:w-1/6 h-0 md:h-screen overflow-y-hidden bg-gray-50  shadow-lg">

    <SideNav LinkInfo={LinkInfo_HomePage} CurrentUser={CurrentUser["username"]}/>

  </div> 

  {/* <NavLinks LinkInfo={LinkInfo_Logged_in}/> */}
  
  <div className="lg:w-3/5 sm:w-4/5 mx-10 p-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased shadow-sm">
    
    <TextEditor />
     <ShowFeed CurrentUser={CurrentUser}/>
  

  </div>
  </div>


    
    </>
  )
}
