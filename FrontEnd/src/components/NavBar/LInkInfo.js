import { BeakerIcon } from '@heroicons/react/solid'

const homeClassname = "h-6 w-6 text-gray-500"
const LinkInfo_Logged_in = [
    {
      name: "Home",
      location: "/",
    },
 


    {
      name: "Tools",
      location: "/tools",
    },
    {
      name: "Blog",
      location: "/blog",
    },
    {
      name: "Community",
      location: "/community",
    },
    {
      name: "Logout",
      location: "/logout",
    },
  ];


 

  const LinkInfo_HomePage = [
    {
      name: "Home",
      location: "/",
      icon:{
        xmlns:"http://www.w3.org/2000/svg" ,
        className:homeClassname,
        viewBox:"0 0 24 24",
        stroke:"currentColor",
        
        d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
      }
    
    },

    {
      name: "Tools",
      location: "/tools",
      icon:{
        xmlns:"http://www.w3.org/2000/svg" ,
        className:homeClassname,
        viewBox:"0 0 24 24",
        stroke:"currentColor",
        
        style:" fill:#000000;",
        d:"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
      }
    },
 
    {
      name: "News",
      location: "/news",
      icon:{
        xmlns:"http://www.w3.org/2000/svg" ,
        className:homeClassname,
        viewBox:"0 0 24 24",
        stroke:"currentColor",
        
        style:" fill:#000000;",
        d:"M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
      }
    },
 
    {
      name: "Notifications",
      location: "/notifications",
      icon:{
        xmlns:"http://www.w3.org/2000/svg" ,
        className:homeClassname,
        viewBox:"0 0 24 24",
        stroke:"currentColor",
        
        style:" fill:#000000;",
        d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      }
    },


  
 
    {
      name: "Logout",
      location: "/logout",
       icon:{
        xmlns:"http://www.w3.org/2000/svg" ,
        className:homeClassname,
        viewBox:"0 0 24 24",
        stroke:"currentColor",
        
        d:"M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6"
      }

    },

    {
      name: "About us",
      location: "/about",
      icon:{
        xmlns:"http://www.w3.org/2000/svg" ,
        className:homeClassname,
        viewBox:"0 0 24 24",
        stroke:"currentColor",
        
        style:" fill:#000000;",
        d:"M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
      }

    },

    {
      name: "Contact Us",
      location: "/contact",
      icon:{
        xmlns:"http://www.w3.org/2000/svg" ,
        className:homeClassname,
        viewBox:"0 0 24 24",
        stroke:"currentColor",
        
        style:" fill:#000000;",
        d:"M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
      }

    },
  ];
  const LinkInfo_Logged_out = [

    {
      name: "Login",
      location: "/login",
    },

    {
      name: "SignUp",
      location: "/signup",
    },

    // {
    //   name: "Tools",
    //   location: "/tools",
    // },
    // {
    //   name: "News",
    //   location: "/news",
    // },
    
    
  ];

  export {LinkInfo_Logged_in,LinkInfo_Logged_out,LinkInfo_HomePage,}