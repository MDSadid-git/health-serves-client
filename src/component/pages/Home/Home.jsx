import React from "react";
import Banner from "./Banner/Banner";
import Client from "./ClientAll/Client";
import Conduct from "./Conduct/Conduct";

const Home = () => {
  return (
    <div className="max-w-[1500px] mx-auto">
      <Banner />
      <Conduct />
      <Client />
    </div>
  );
};

export default Home;
