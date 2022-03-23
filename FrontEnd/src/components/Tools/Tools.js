import React, { useEffect, useState } from 'react'
import ToolNav from './ToolComponents/ToolNav';
import axios from "axios";
import ToolCard from './ToolComponents/ToolCard';
import URL from './../../BaseUrl/Url';
const Tools = () => {

  const [AllTools, setAllTools] = useState([])
  const [Categories, setCategories] = useState([])
  const [FilteredTools, setFilteredTools] = useState([])


  const filterItem = (category) => {

    const updatedList = AllTools.filter((curElem) => {
      return curElem.category === category;
    });


   if (category === "All") {
      setFilteredTools(AllTools)
    }
    
   
    else {
      setFilteredTools(updatedList);
    }

  };

  useEffect(() => {
    const url = `${URL}/api/Tools/`;

    axios.get(url).then((response) => {
      console.log(response.data);
      setAllTools(response.data.data)
      setCategories(response.data.categories)
      setFilteredTools(response.data.data)


    }).catch(function (error) {
      console.log(error);


    });

  }, [])

  return (
    <>

      <div className='h-auto w-3/4 mx-auto  flex flex-wrap '>
        {/* <h2 className='mx-auto text-4xl bold'>Tools section</h2> */}
        <h2 className=' mx-auto text-2xl text-center' style={{fontFamily: `"Cormorant Garamond"`}}>Tools section</h2>

        <ToolNav filterItem={filterItem} categories={Categories} />

        <section className="main-card--cointainer">
          {FilteredTools.map((curElem) => <ToolCard props={curElem} />)}
        </section>
      </div>


    </>
  )
}

export default Tools
