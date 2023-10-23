import React from "react";
import Header from "./header";
import Description from "./description";
import Footer from "../footer/index.";
import Banner from "../banner";
import Testimonial from "./testimonial";
import Services from "./services";
import Navbar from "../nav/index"

const Home = () => {
  return (
    <div>
      <Header />
      <Description />
      <Services />
      <Testimonial />
      <Banner />
    </div>
  );
};

export default Home;
