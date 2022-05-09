import React, { useEffect, useState } from "react";
import { ReactDOM } from "react-dom";
import Female from "../../images/female.jpg";
import { useSelector } from "react-redux";
import { SideNav } from "../Home/SIdeNav";
import { LinkInfo_HomePage } from "../NavBar/LInkInfo";
import ProfileCard from "./ProfileCard";
import ShowOwnPosts from "./ShowOwnPosts";
import ApiClient from "./../../API/ApiClient";
import { useCookies } from "react-cookie";
import { DndProvider } from 'react-dnd';

const ProfileModal = ({ hideProfileModal, details }) => {
  const { REACT_APP_API_URL } = process.env;
  const [Posts, setPosts] = useState([]);

  // const ProfileState = useSelector(state => state.PROFILE);
  const [Loaded, setLoaded] = useState(0);
  const [ProfileData, setProfileData] = useState([]);
  const [token, settoken] = useCookies();

  useEffect(() => {
    setTimeout(() => {
      if (token["token"]) {
        ApiClient()
          .get(`/api/Profile/${token["token"]}/`)
          .then((response) => {
            console.log(response.data);
            setProfileData(response.data);
            setLoaded(1);
            console.log("Printintng profile data");
            console.log(ProfileData);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        setLoaded(0);
      }
    }, 2000);
  }, [token["token"]]);

  useEffect(() => {
    if (Loaded) {
      ApiClient()
        .get(`/api/posts/${ProfileData.data.user}/`)
        .then((response) => {
          console.log(response.data);
          // setcontent(response.data[14].content)
          setPosts(response.data);
          console.log(Posts);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [Loaded]);

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

        <div className="w-3/5   h-full overflow-x-scroll antialiased shadow-sm">
          <ProfileCard ProfileData={ProfileData} posts={Posts} Loaded={Loaded} />
          <div className="mx-10">
          <ShowOwnPosts posts={Posts} Loaded={Loaded} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileModal;
