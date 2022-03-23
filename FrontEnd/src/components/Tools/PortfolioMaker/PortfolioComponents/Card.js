import React from 'react'
import { useDrag } from 'react-dnd';
import { Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';

const Card = ({id,title,text,canDrag}) => {

    
    const [{ isDragging }, drag,dragPreview] = useDrag(() => ({
        type: "text",
        item: { id: id },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      }));
    return (
        <div >
            <div className="flex justify-center my-3"  ref={canDrag===1?drag:dragPreview} style={{ border: isDragging ? "10px solid green" : "0px" }}>
            {/* <div className="flex justify-center my-3"  ref={IsDrag===1?drag:refVar} style={{ border: isDragging ? "10px solid green" : "0px" }}> */}
                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                    <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2" >{title}</h5>
                    <p className="text-gray-700 text-base mb-4" >
                       {text}
                    </p>
                    <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                </div>
            </div>

        </div>
    )
}

export default Card
