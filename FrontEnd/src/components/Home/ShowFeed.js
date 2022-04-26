import React from 'react'
import ApiClient from './../../API/ApiClient';
import { useCookies } from 'react-cookie';
import { useState } from 'react';
import { Markup } from 'interweave';

const ShowFeed = () => {
  const [token, settoken] = useCookies();
  const [content, setcontent] = useState('')


    if(token["token"]) {
        ApiClient()
          .get(`/api/Profile/${token["token"]}/`)
          .then((response) => {
            console.log(response.data.data.user);
          })
          .catch(function (error) {
            console.log(error);
          });
      }

      if(token["token"]) {
        ApiClient()
          .get(`/api/posts/`)
          .then((response) => {
            console.log(response.data[13]);
            setcontent(response.data[14].content)
          })
          .catch(function (error) {
            console.log(error);
          });
      }


      
   
      
  return (
      <>
    <div>ShowFeed</div>
    <div>
{/* {content} */}
<Markup content={content} />

    </div>
    </>
  )
}

export default ShowFeed