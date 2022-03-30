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
        <Route exact path="/tools/" element={<Tools/>} />
        <Route exact path="/tools/:id/:name" element={<ToolSingle/>} />
        <Route exact path="/news" element={<News/>} />
        {/* <Route exact path="/" element={<Hero/>} /> */}
        <Route exact path="/" element={token['token']?<HomePage/>:<Hero/>} />
        <Route element={<Error/>} />
      </Routes>
    </>
  );
}

export default App;
