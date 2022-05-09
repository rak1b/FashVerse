import React from 'react'
import PostCard from './../Home/PostCard';
import { useEffect } from 'react';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import ApiClient from './../../API/ApiClient';

  
const Content = ({posts}) =>{
    return(
      <div>
      {
        posts.map((post) => {
          
           return <PostCard content={post.content}/>}
           
            
        )
      }
  
      </div>
    )
}

const ShowOwnPosts = ({posts,Loaded}) => {
        
    return (
        Loaded?<Content posts={posts}/>:''
        
    )
  }
export default ShowOwnPosts