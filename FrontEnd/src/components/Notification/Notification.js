import React, { useEffect, useState } from "react";
import { SideNav } from "../Home/SIdeNav";
import { LinkInfo_HomePage } from "../NavBar/LInkInfo";
import { useCookies } from "react-cookie";
import ApiClient from "./../../API/ApiClient";
import { Link } from 'react-router-dom';
import Breadcrumb from "../Tools/ToolComponents/Breadcrumb";

const Notification = () => {
  const [token, settoken] = useCookies("");
  const [CurrentUser, SetCurrentUser] = useCookies("");
  const [Notifications, setNotifications] = useState([]);
  const [Loaded, setLoaded] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (token["token"]) {
        ApiClient()
          .get(`/api/Notifications/${CurrentUser["username"]}/`)
          .then((response) => {
            setNotifications(response.data);
            setLoaded(1);

          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }, 2000);
  }, []);

  return (
    <>
    <div className="w-full h-screen flex flex-row flex-wrap justify-center  ">
      <div className="bg-white shadow-lg border-t-4 hidden border-indigo-500 absolute bottom-0 w-full flex flex-row flex-wrap">
        <div className="w-full text-right">
          <button className="p-2 fa fa-bars text-4xl text-gray-600"></button>
        </div>
      </div>

      <div className="w-0 md:w-1/4 lg:w-1/6 h-0 md:h-screen overflow-y-hidden bg-gray-50  shadow-lg">
        <SideNav
          LinkInfo={LinkInfo_HomePage}
          CurrentUser={CurrentUser["username"]}
        />
      </div>
      <div className="lg:w-3/5 sm:w-full p-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased shadow-sm">
        

    <Breadcrumb/>

        {Notifications.map((notification) => {
          return (
            <>
              <div className="mt-10 relative">
                <div className="bg-white p-6 flex  justify-between rounded-lg shadow-lg">
                  <p className="text-gray-700 mr-20">
                    <span className="font-bold"></span><Link className="text-blue-600 font-smaller italic" to={`/profile/${notification.text.split(' ')[0]}`}>{notification.text.split(' ')[0]}</Link>{notification.text.replace(notification.text.split(' ')[0],'')}
                  </p>
                </div>
                <p className="absolute top-2 right-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-10 w-10"
                    fill="green"
                    viewBox="0 0 24 24"
                    stroke="white"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </p>
              </div>
            </>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default Notification;
