import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { SideNav } from '../Home/SIdeNav'
import { LinkInfo_HomePage } from '../NavBar/LInkInfo'
import { Menu } from 'react-feather';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ApiClient from './../../API/ApiClient';
import PostCard from './../Home/PostCard';
import ToolCard from './../Tools/ToolComponents/ToolCard';
import ToolCardSearch from './ToolCardSearch';

const QuerySearch = () => {
  const [CurrentUser, SetCurrentUser] = useCookies("");
  const location = useLocation();

  const [ResPonse, setResPonse] = useState("")
  useEffect(() => {
    ApiClient()
      .get("/api/search/" + location.search)
      .then((response) => {
        console.log("responese.......");
        console.log(response.data);
        setResPonse(response.data)
        // console.log(response.data);
        // setcontent(response.data[14].content)
        // setfoodResult(response.data.foods[0].foodNutrients);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [location.search]);
  return (
    <>



    <div className="w-full h-screen flex flex-row flex-wrap justify-center  ">
      
      
      <div className="bg-white shadow-lg hidden border-indigo-500 absolute bottom-0 w-full  flex flex-row flex-wrap">
        <div className="w-full text-right"><button className="p-2 fa fa-bars text-4xl text-gray-600"></button></div>
      </div>
      
       <div className="w-0 md:w-1/4 lg:w-1/6 h-0 md:h-screen overflow-y-hidden bg-gray-50  shadow-lg">
    
        <SideNav LinkInfo={LinkInfo_HomePage} CurrentUser={CurrentUser["username"]}/>
    
      </div> 
    
      {/* <NavLinks LinkInfo={LinkInfo_Logged_in}/> */}
      
      <div className="lg:w-3/5 sm:w-4/5 mx-10 p-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased shadow-sm">
        
        Search Results:
        <h2 className=' text-blue-500 uppercase my-5'>Posts</h2>
        {
          // ResPonse.posts !== undefined  && ResPonse.posts.length <= 0?
         ResPonse.posts!== undefined && ResPonse.posts.map((post) => {

       
         return <PostCard search={1} content={post.content} fullname={post.fullname} username={post.username} id={post.id}/>
         
          
      })
      // :<h2 className='text-sm text-center uppercase my-5'>No posts found</h2>

      
    }
<h2 className=' text-blue-500 uppercase my-10'>Tools : </h2>

{
  // ResPonse.tools!== undefined && ResPonse.tools.length <= 0?
         ResPonse.tools!== undefined && ResPonse.tools.map((post) => {

       
        //  return <ToolCard id={post.id} category={post.category} name={post.username} images = {post.images}/>
         return (<>
         <div className='w-3/4 m-auto'>
         <ToolCardSearch props={post} />
         </div>
         </>)
         
          
      })
      // :<h2 className='text-sm text-center uppercase my-5'>No posts found</h2>

      
    }


    
      </div>
      </div>
    
    
        
        </>
  )
}

export default QuerySearch

// id:
// 34593793 121212