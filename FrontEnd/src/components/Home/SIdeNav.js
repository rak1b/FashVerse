import React from "react";
import { NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";

const Links = ({ styles, location, name }) => {
  return (
    <NavLink exact="true"  activeclassname="border-t-2 border-pyYellow-400" className={styles} to={location}>
      {name}
    </NavLink>
  );
};


const SideNav = ({LinkInfo}) => {
  const [token, settoken] = useCookies();

  const LinkStyles = "shadow-lg flex_1 text-center bg-pyBlue-400 my-5 w-40 m-auto     hover:bg-pyBlue-500 rounded p-5";
 


  return (
    <div className="  transition-all  flexfont-mono rounded shadow-lg h-screen bg-gray-50 w-full mx-auto text-white mb-5">
      <div className="flex flex-col flex-wrap mx-auto   w-full ">
        {LinkInfo.map((current) => {
          // if (token["token"]) {
          //   if (current.name === "SignUp" || current.name === "Login") {
          //     return "";
          //   }
          // } else {
          //   // if (current.name === "Logout") {
          //     return "";
          //   // }
          // }

          return <Links styles={LinkStyles} location={current.location} name={current.name} />;
        })}
      </div>
    </div>
  );
};

export {Links,SideNav};

 