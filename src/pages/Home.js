import React from "react";
import Cta from "../components/Cta/Cta";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Heroarea from "../components/Heroarea/Heroarea";
import Info from "../components/Info/Info";
import Price from "../components/Price/Price";
import Reason from "../components/Reason/Reason";
import Theme from "../components/Theme/Theme";

const Home = () => {
  return (
    <div>
      <Heroarea />
      <Info />
      <Theme />
      <Reason />
      <Price />
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;
