import React, { useState, useEffect } from "react";
import profile from "../../images/profile.jpg";
import Logo from "../../images/Logo.png";
import NavSearch from "./NavSearch";
import { Link, Menu } from "react-feather";
import {Links,NavLinks} from "./NavLinks";
import { useDispatch, useSelector } from "react-redux";
import ApiClient from "./../../API/ApiClient";
import { useCookies } from "react-cookie";
import { ShowDp } from "../../ReduxFiles/Actions/ProfileActions";
import { useLocation, useNavigate } from "react-router-dom";
import ProfileModal from "../Profile/Profile";
import { LinkInfo_HomePage, LinkInfo_Logged_in, LinkInfo_Logged_out } from "./LInkInfo";

const Navbar = () => {
  const [ShowNav, setShowNav] = useState(1);
  const { REACT_APP_API_URL } = process.env;
  const [Loaded, setLoaded] = useState(0);
  const [ProfileMod, setProfileMod] = useState(0);
  const [token, settoken] = useCookies();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (token["token"]) {
      ApiClient()
        .get(`/api/Profile/${token["token"]}/`)
        .then((response) => {
          // dispatch(heroActions(response.data.username));
          console.log(response.data);
          dispatch(ShowDp(response.data));
          setLoaded(1);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      setLoaded(0);
    }
  }, [token["token"]]);

  const ProfileState = useSelector((state) => state.PROFILE);

  const ShowNavLink = () => {
    setShowNav(!ShowNav);
  };
  const HideNav = () => {
    if (window.innerWidth < 768) {
      setShowNav(0);
      console.log(window.innerWidth);
    }
  };
  // On refresh it will check the window size and will hide if less than 768
  useEffect(() => {
    HideNav();
  }, []);

  const location = useLocation();
  const [Bounce, setBounce] = useState("");
  useEffect(() => {
    console.log("Location changed");
    if ( window.location.pathname === "/"  ) {
      // if (window.location.pathname === "/tools" || window.location.pathname === "/"  ) {
      setShowNav(0);
    }
    setBounce("animate-bounce");
    setTimeout(() => {
      setBounce("");
    }, 5000);
  }, [location]);

  return (
    <>
      <div className="bg-pyBlue-500 lg:pb-2 lg:pt-2 md:pb-10 sm:pb-12">
        <div className="flex transition-all justify-between lg:relative font-mono  items-center bg-pyBlue-500 text-gray-200 h-20 md:w-3/4 lg:w-3/4 w-3/4   mx-auto">
          <button
            onClick={ShowNavLink}
            className={`lg:absolute lg:left-44 lg:hidden cursor-pointer rounded-full p-2 hover:bg-pyBlue-400 ${Bounce} `}
          >
            {/* <button onClick={ShowNavLink} className="lg:hidden md:hidden cursor-pointer rounded-full p-2 hover:bg-pyBlue-400 "> */}
            <Menu color="#FFDD56" size={35} />
          </button>

          {/* Logo */}
          <div className="">
            <a href="/">
              <img
                src={Logo}
                className="  ml-4 lg:w-40 lg:h-18 w-36 h-15"
                alt="FashVerse"
              />
            </a>
          </div>
          {/* Search section */}
          {token["token"] ? (
            <>
              <div className="flex  ">
                <NavSearch hidden="hidden" />
                {/* User Icon */}
                <div
                  className="relative cursor-pointer"
                  onClick={() => {
                    setProfileMod(1);
                  }}
                >
                  <span className="w-3 h-3 block absolute right-0 bg-green-300 shadow-lg rounded-full"></span>
                  <div onClick={() => {
                    navigate('/me')
                  }} >
                  {Loaded ? (
                    <img
                      className="w-12 h-12 rounded-full ml-2 lg:ml-4"
                      src={`${REACT_APP_API_URL}${ProfileState.data.Dp}`}
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-12 h-12 rounded-full ml-2 lg:ml-4"
                      src={profile}
                      alt=""
                    />
                  )}
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        {/* For Small devices */}
        <div className="w-3/4 m-auto md:hidden lg:hidden">
          <NavSearch hidden="block" />
        </div>
        {token["token"] ? (
          ShowNav ? (
            <NavLinks LinkInfo={LinkInfo_HomePage} />
          ) : (
            ""
          )
        ) : (
          ""
        )}

        {/* (ShowNav ? <NavLinks LinkInfo = {LinkInfo_Logged_out} /> : "")} */}
      </div>
      {/* {ProfileMod ? <ProfileModal hideProfileModal={setProfileMod} details={ProfileState}/> : ""} */}
    </>
  );
};

export default Navbar;
