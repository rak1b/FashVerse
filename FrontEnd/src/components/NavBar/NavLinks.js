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


const NavLinks = ({LinkInfo}) => {
  const [token, settoken] = useCookies();
  const [CurrentUser, SetCurrentUser] = useCookies("");

  const LinkStyles = "shadow-lg flex_1 text-center  hover:bg-pyBlue-500 rounded p-5";
 


  return (
    <div className="  transition-all  flexfont-mono rounded shadow-lg lg:hidden bg-pyBlue-400 w-3/4 mx-auto text-white mb-5">
      <div className="flex flex-wrap mx-auto w-full">
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

          
          return <Links styles={LinkStyles} location={current.location==="/profile"?`${current.location}/${CurrentUser['username']}`:current.location} name={current.name} />;
          // return <Links styles={LinkStyles} location={current.location}  name={current.name} />;
        })}
      </div>
    </div>
  );
};

export {Links,NavLinks};

 