
import { Route, Routes } from "react-router-dom";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/SignUp/SignUp";
import  { Toaster } from 'react-hot-toast';
import Services from "./components/Services/Services";
import Service from "./components/Service/Service";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({duration: 2000});


function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/books" element={<PrivateRoute><Services/></PrivateRoute>}></Route>
        <Route path="/books/:id" element={<Service/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
        <Route path="/log-in" element={<LogIn/>}></Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
