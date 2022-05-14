import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Markup } from "interweave";
import "./home.css"
import ApiClient from './../../API/ApiClient';
import { Bell, Home, Info, LogOut, Phone, Tool, User, Users } from "react-feather";


const Links = ({ styles, location, name, icon,CurrentUsers }) => {
  const [CurrentUser, SetCurrentUser] = useCookies("");
  const [token, settoken] = useCookies("");
  const [Notifications, setNotifications] = useState([]);
  const [SvgColor, SetSvgColor] = useState("");
  useEffect(() => {
    setTimeout(() => {
      if (token["token"]) {
        ApiClient()
          .get(`/api/Notifications/${CurrentUser["username"]}/`)
          .then((response) => {
            setNotifications(response.data);

          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }, 2000);
  }, []);

  return (
    <>
      <li className="" >
        <Link
          exact="true" 
          className="flex items-center p-2  font-bold font-mono uppercase  text-gray-600 rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 m-6 "
          to={location==="/profile"?`${location}/${CurrentUser['username']}`:location}
          // to={location}
        >
          {}
          {location==='/logout'?<LogOut/>:location==='/profile'?<User/>:location==='/tools'?<Tool/>:location==='/'?<Home/>:location==='/news'?<Info/>:location==='/notifications'?<Bell/>:location==='/contact'?<Phone/>:location==='/about'?<Users/>:
          <svg
            xmlns={icon.xmlns}
            viewBox={icon.viewBox}
            className={icon.className}
            fill={SvgColor===""?"gray":SvgColor}
            onMouseEnter={() => SetSvgColor("black")}
            onMouseLeave={() => SetSvgColor("gray")}
s          >
            <path
             
              d={icon.d}
            />
          </svg>
          }
          <div className="relative">
          <span className="ml-3">{name} </span>
          {name==="Notifications"?<span className="absolute badge text-sm font-mono -top-3.5 -right-3.5 text-white bg-green-600 rounded-full w-5 h-5 flex justify-center items-center">  {Notifications.length}</span>:''}
          </div>
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
