import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { LogoutStatusActions } from "../../ReduxFiles/Actions/LogoutActions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Logout = () => {
  const navigate = useNavigate();

  const [token, setToken, removeToken] = useCookies("token");
  const dispatch = useDispatch()
  useEffect(() => {
    removeToken("token", { path: '/' });
    removeToken("username", { path: '/' });
    dispatch(LogoutStatusActions());
    toast.warn(`Logout Successfull`)

    setTimeout(function () {
      navigate("/login");
    }, 2000);




  }, []);

  return <div>Logging out
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </div>;
};

export default Logout;
