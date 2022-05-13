import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { SideNav } from "../Home/SIdeNav";
import { LinkInfo_HomePage } from "../NavBar/LInkInfo";
import Breadcrumb from "../Tools/ToolComponents/Breadcrumb";

export const About = () => {
  const [token, settoken] = useCookies();
  const [CurrentUser, SetCurrentUser] = useCookies("");

  return (
    <>
      <div className="w-full h-screen flex flex-row flex-wrap justify-center  ">
        <div className="bg-white shadow-lg border-t-4 border-indigo-500 absolute bottom-0 w-full md:w-0 md:hidden flex flex-row flex-wrap">
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

        {/* <NavLinks LinkInfo={LinkInfo_Logged_in}/> */}

        <div className="lg:w-3/5 sm:w-full  p-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased shadow-sm">
          <Breadcrumb />
            <h1 className="text-blue-600 font-bold space-x-2 text-center uppercase text-3xl">About Us</h1>

<div className="w-3/4 m-auto">
          <h2 className="text-gray-600 text-lg font-mono  mb-2">
            Fashverse is a website,where user can find people who are interested
            in fitness and fashion.Here user can find different tools which will
            help in their daily life..
            </h2>
          <p className="text-gray-500 text-md font-mono ">
            We are living in the age where we want to do task in a simple way or
            we want simplicity,we want to make our life easier than before.So
            many people can not decide hairstyle for them,they can not decide
            which will be the proper eye glass for them.Because everyone’s face
            shape is different,so we first need to know the shape of our
            face,There are different shape type like
            Square,Oval,Rectangle,Heart,Oblong e.t.c. If we want to determine
            the shape of our face shape manually,then we have to follow many
            steps like,measuring the size of forehead,cheekbone,jawline,face
            width.base on the width and length we can find the shape of our
            face. The oval face is mainly characterized by a narrow and high
            forehead, wide cheekbones, and a soft, rounded chin line. The
            elliptical face is usually longer than the width. A rounded face is
            mainly characterized by a rounded forehead, a rounded chin line, and
            a face width equal to the length of the face. The diamond-shaped
            face is mainly characterized by a narrow forehead, wide cheekbones,
            and narrow and pointed chin. The heart-shaped face is mainly
            characterized by a V-shaped hairline, a wide forehead, and a narrow
            chin line. A square face is mainly characterized by a straight
            hairline, a square chin line, and a face width equal to the length
            of the face. The rectangular face shape is very similar to the
            square face shape, except that the face is slightly wider. It is
            mainly characterized by a straight hairline, a tall and wide
            forehead, a square chin, and a face width slightly wider than the
            face length.Our goal is reduce the hassle for finding the shape of a
            person by using machine algorithm techniques,we will build a website
            which will find the shape of a person,will suggest the eyeglasses
            etc.There will be some fitness features also.
          </p>

          <h3 className="uppercase text-sm font-mono mt-5 text-blue-500">
              Created By:
          </h3>
          <p className="font-semibold text-gray-600">Md Rakibul Islam</p>
          <p className="font-semibold text-gray-600">Israt Jahan</p>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default About;
