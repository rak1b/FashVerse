import React from 'react'
import ApiClient from './../../API/ApiClient';
import { useCookies } from 'react-cookie';
import { useState } from 'react';
import { Markup } from 'interweave';
import { useEffect } from 'react';
import PostCard from './PostCard';

const ShowFeed = ({}) => {
  const [CurrentUser, SetCurrentUser] = useCookies("");

  const [token, settoken] = useCookies();
  const [content, setcontent] = useState('')
  const [Posts, setPosts] = useState([])
  // const [CurrentUser, SetCurrentUser] = useState("");





  useEffect(() => {

    // if (token["token"]) {
    //   ApiClient()
    //     .get(`/api/Profile/${token["token"]}/`)
    //     .then((response) => {
    //       SetCurrentUser(response.data.data.user);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // }
    
  
    if(token["token"]) {

        ApiClient()
          .get(`/api/posts/`)
          .then((response) => {
            console.log(response.data);
            // setcontent(response.data[14].content)
            setPosts(response.data)
            console.log(Posts)
          })
          .catch(function (error) {
            console.log(error);
          });
      }


    }, [])
   
      
  return (
      <>
    <div>
    {
      Posts.map((post) => {

        
        if(post.username===CurrentUser['username']){
        return '';
      }
      else{
         return <PostCard content={post.content} fullname={post.fullname} username={post.username} id={post.id}/>}
         
          
      })
    }

    </div>
    </>
  )
}

export default ShowFeed