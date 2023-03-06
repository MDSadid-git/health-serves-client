import React from "react";
import Banner from "./Banner/Banner";
import Client from "./ClientAll/Client";
import Conduct from "./Conduct/Conduct";
import ReviewSlider from "./ReviewSlider/ReviewSlider";

const Home = () => {
  return (
    <div className="max-w-[1500px] mx-auto">
      <Banner />
      <Conduct />
      <Client />
      <ReviewSlider />
    </div>
  );
};

export default Home;
