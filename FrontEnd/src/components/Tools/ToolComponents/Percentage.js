import React from 'react'

const Percentage = ({Shape,Text,Percent}) => {
     const width = { "width": `${Percent}%` }
    
        


    return (
        <div className="flex mt-5 items-center">
            <div className="w-20">
                <h2 className="flex-1 text-gray-500">{Shape}:</h2>

            </div>
            <div className=" ml-2 w-full h-5 bg-yellow-50 rounded-full flex justify-start">
                <div className=" bg-blue-500 text-xs font-medium text-blue-100 text-center  h-5 leading-none rounded-l-full p-1" style={width}>{Percent}%</div>
            </div>

        </div>
    )
}

export default Percentage