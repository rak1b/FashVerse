import React, { useEffect, useState } from "react";
import ToolNav from "./ToolComponents/ToolNav";
import axios from "axios";
import ToolCard from "./ToolComponents/ToolCard";
import URL from "./../../BaseUrl/Url";
import { SideNav } from "../Home/SIdeNav";
import { LinkInfo_HomePage } from "../NavBar/LInkInfo";
const Tools = () => {
  const [AllTools, setAllTools] = useState([]);
  const [Categories, setCategories] = useState([]);
  const [FilteredTools, setFilteredTools] = useState([]);

  const filterItem = (category) => {
    const updatedList = AllTools.filter((curElem) => {
      return curElem.category === category;
    });

    if (category === "All") {
      setFilteredTools(AllTools);
    } else {
      setFilteredTools(updatedList);
    }
  };

  useEffect(() => {
    const url = `${URL}/api/Tools/`;

    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setAllTools(response.data.data);
        setCategories(response.data.categories);
        setFilteredTools(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="w-full h-screen flex flex-row flex-wrap justify-center  ">
        <div className="bg-white shadow-lg border-t-4 border-indigo-500 absolute bottom-0 w-full md:w-0 md:hidden flex flex-row flex-wrap">
          <div className="w-full text-right">
            <button className="p-2 fa fa-bars text-4xl text-gray-600"></button>
          </div>
        </div>

        <div className="w-0 md:w-1/4 lg:w-1/6 h-0 md:h-screen overflow-y-hidden bg-gray-50  shadow-lg">
          <SideNav LinkInfo={LinkInfo_HomePage} />
        </div>

        {/* <NavLinks LinkInfo={LinkInfo_Logged_in}/> */}

        <div className="lg:w-3/5 md:w-3/5  sm:w-3/4 p-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased shadow-sm">
          <div className="h-auto w-50% mx-auto ">
            {/* <h2 className='mx-auto text-4xl bold'>Tools section</h2> */}
            <h2
              className=" mx-auto text-2xl text-center"
              style={{ fontFamily: `"Cormorant Garamond"` }}
            >
              Tools section
            </h2>

            <ToolNav filterItem={filterItem} categories={Categories} />

            <section className="main-card--cointainer">
              {FilteredTools.map((curElem) => (
                <ToolCard props={curElem} />
              ))}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;
