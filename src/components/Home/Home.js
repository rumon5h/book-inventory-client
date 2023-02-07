import React from "react";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import Update from "../Update/Update";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Update/>
      <Brands/>
      <Footer />
    </div>
  );
};

export default Home;
