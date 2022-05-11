import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Markup } from "interweave";
import "./home.css"


const Links = ({ styles, location, name, icon,CurrentUsers }) => {
  const [CurrentUser, SetCurrentUser] = useCookies("");

  return (
    <>
      <li className="" >
        <Link
          exact="true"
          className="flex items-center p-2  font-bold font-mono  text-gray-800 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 m-9 "
          to={location==="/profile"?`${location}/${CurrentUser['username']}`:location}
          // to={location}
        >
          <svg
            xmlns={icon.xmlns}
            viewBox={icon.viewBox}
            className={icon.className}
s          >
            <path
             
              d={icon.d}
            />
          </svg>

          <span class="ml-3">{name}</span>
        </Link>
      </li>
    </>
  );
};

const SideNav = ({ LinkInfo,CurrentUser }) => {
  const [token, settoken] = useCookies();

  const LinkStyles =
    "shadow-lg flex_1 text-center bg-pyBlue-400 my-5 w-40 m-auto     hover:bg-pyBlue-500 rounded p-5";

  return (
    
    <>
      <aside class="w-64 " aria-label="Sidebar">
        <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
          <ul class="space-y-2">
            {LinkInfo.map((current) => {
              if (token["token"]) {
                if (current.name === "SignUp" || current.name === "Login") {
                  return "";
                }
              } else {
                if (current.name === "Logout") {
                  return "";
                }
              }

              return (
                <Links
                  styles={LinkStyles}
                  location={current.location}
                  name={current.name}
                  icon={current.icon}
                  CurrentUser={CurrentUser}
                />
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export { Links, SideNav };
