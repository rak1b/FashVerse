import React from 'react'

const Badges = ({id,head,span}) => {
    return (
        <div>
            <div class="flex space-x-2 justify-center">
                <h2 class="text-4xl font-medium leading-tight text-gray-800">
                    {head}
                    <span class="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">{span}</span>
                </h2>
            </div>

        </div>
    )
}

export default Badges
