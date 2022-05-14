import React, { useState } from "react";
import { LogOut, Search } from "react-feather";
import { useNavigate } from 'react-router-dom';

const NavSearch = ({ hidden }) => {
  const navigate = useNavigate()
  const [Query, setQuery] = useState("")
  console.log(Query)
  const onSearch = (event) => {
    event.preventDefault();
    // navigate(`/search/${Query}`)
    // ('/componentB',{state:{id:1,name:'sabaoon'}
    navigate(`/search?q=${Query}`,{state:{q:Query}})
  }
  return (
    <div className={`w-auto ${hidden} md:block lg:block relative`}>
      <form onSubmit={onSearch} className="flex items-center">
        <input type="text" onChange={(e)=> setQuery(e.target.value)} className=" p-2 lg:w-72 md:w-72 w-full h-12 rounded-lg border-2 outline-none focus-within:border-pyYellow-400   text-black" placeholder="search here.." />
        {/* Search Icon */}
        <button  className="bg-pyYellow-400 h-12 flex justify-center items-center  w-12 lg:w-10 md:w-10 absolute right-0 top-0 text-black p-2 rounded-lg  ">
          <Search />
        </button>
      </form>
    </div>
  );
};

export default NavSearch;
