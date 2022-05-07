import React from 'react'
import { NavLink } from 'react-router-dom'
import { LinkInfo_Logged_in,LinkInfo_HomePage } from '../NavBar/LInkInfo'
import { NavLinks } from '../NavBar/NavLinks'
import TextEditor from '../TextEditor'
import CreatePost from './CreatePost'
import { SideNav } from './SIdeNav'
import ShowFeed from './ShowFeed';

export const HomePage = () => {
  return (
    <>



<div className="w-full h-screen flex flex-row flex-wrap justify-center  ">
  
  
  <div className="bg-white shadow-lg border-t-4 border-indigo-500 absolute bottom-0 w-full md:w-0 md:hidden flex flex-row flex-wrap">
    <div className="w-full text-right"><button className="p-2 fa fa-bars text-4xl text-gray-600"></button></div>
  </div>
  
   <div className="w-0 md:w-1/4 lg:w-1/6 h-0 md:h-screen overflow-y-hidden bg-gray-50  shadow-lg">

    <SideNav LinkInfo={LinkInfo_HomePage}/>

  </div> 

  {/* <NavLinks LinkInfo={LinkInfo_Logged_in}/> */}
  
  <div className="w-3/5 p-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased shadow-sm">
    
    <TextEditor/>
     <ShowFeed/>
  

  </div>
  </div>


    
    </>
  )
}
