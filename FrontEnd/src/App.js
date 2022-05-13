import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/NavBar/Navbar";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Tools from './components/Tools/Tools';
import Error from "./components/Error/Error";
import Logout from './components/Logout/Logout';
import News from "./components/News/News";
import Community from './components/Community/Community';
import ToolSingle from "./components/Tools/ToolComponents/ToolSingle";
import FaceShapeFind from './components/Tools/FaceShapeFind';
import { useCookies } from 'react-cookie';
import { HomePage } from './components/Home/home';
import ProfileModal from './components/Profile/Profile';
import Notification from './components/Notification/Notification';
import { About } from './components/About/About';
import { ContactUs } from './components/ContactUs/ContactUs';
function App() {
  const [token, settoken] = useCookies();

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/community" element={<Community/>} />
        <Route exact path="/signup" element={<SignUp/>} />
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/logout"element={<Logout/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<ContactUs/>} />
        <Route exact path="/tools/" element={<Tools/>} />
        <Route exact path="/notifications" element={<Notification/>} />
        <Route exact path="/tools/:name" element={<ToolSingle/>} />
        <Route exact path="/news" element={<News/>} />
        <Route exact path="/profile/:username" element={<ProfileModal/>} />
        {/* <Route exact path="/" element={<Hero/>} /> */}
        <Route exact path="/" element={token['token']?<HomePage/>:<Hero/>} />
        <Route element={<Error/>} />
      </Routes>
    </>
  );
}

export default App;
