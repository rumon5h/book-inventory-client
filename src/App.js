import { Route, Routes } from "react-router-dom";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/SignUp/SignUp";
import  { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
        <Route path="/log-in" element={<LogIn/>}></Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
