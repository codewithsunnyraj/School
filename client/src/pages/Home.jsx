import React from "react";
import Carousel from "../components/Carousel";
import { slider } from "../constant/constant";
import Why_choose_us from "../components/Why_choose_us";

const Home = () => {
  return (
    <div>
      <Carousel images={slider} />
      <Why_choose_us />
    </div>
  );
};

export default Home;
