import React from "react";
import Banner from "./Banner/Banner";
import Client from "./ClientAll/Client";
import Conduct from "./Conduct/Conduct";
import ReviewSlider from "./ReviewSlider/ReviewSlider";
import SimpleInfo from "./Simpleinfo/SimpleInfo";
import SeniorDoctor from "./SeniorDoctor/SeniorDoctor";
import { UseTitle } from "../../Hooks/UseTitle";

const Home = () => {
  UseTitle("Home");
  return (
    <div className="max-w-[1500px] mx-auto">
      <SimpleInfo />
      <Banner />
      <Conduct />
      <SeniorDoctor />
      <Client />
      <ReviewSlider />
    </div>
  );
};

export default Home;
