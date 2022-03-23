import React from "react";
import { Search } from "react-feather";

const NavSearch = ({ hidden }) => {
  return (
    <div className={`w-auto ${hidden} md:block lg:block relative`}>
      <div className="flex items-center">
        <input type="text" className=" p-2 lg:w-72 md:w-72 w-full h-12 rounded-lg border-2 outline-none focus-within:border-pyYellow-400   text-black" placeholder="search here.." />
        {/* Search Icon */}
        <button className="bg-pyYellow-400 h-12 flex justify-center items-center  w-12 lg:w-10 md:w-10 absolute right-0 top-0 text-black p-2 rounded-lg  ">
          <Search />
        </button>
      </div>
    </div>
  );
};

export default NavSearch;
