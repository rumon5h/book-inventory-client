import { Route, Routes } from "react-router-dom";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
