import React from 'react'
import { Markup } from 'interweave';

const PostCard = ({content}) => {
  return (
  <><div className="bg-white mt-3">
        {/* <img className="border rounded-t-lg shadow-lg " src="https://images.unsplash.com/photo-1572817519612-d8fadd929b00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/> */}
        <div className="bg-white border shadow p-5 text-xl text-gray-700 font-semibold">
        <Markup content={content}/>
        </div>
        <div className="bg-white p-1 border shadow flex flex-row flex-wrap">
          <div className="w-1/3 hover:bg-gray-200 text-center text-xl text-gray-700 font-semibold">Like</div>
          <div className="w-1/3 hover:bg-gray-200 border-l-4 border-r- text-center text-xl text-gray-700 font-semibold">Share</div>
          <div className="w-1/3 hover:bg-gray-200 border-l-4 text-center text-xl text-gray-700 font-semibold">Comment</div>
        </div>
        </div>
        
    
   
  
  
  </>

  )
}

export default PostCard