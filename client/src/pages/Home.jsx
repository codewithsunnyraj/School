import React from "react";
import Carousel from "../components/Carousel";
import { slider } from "../constant/constant";

const Home = () => {
  return (
    <div>
      <Carousel images={slider} />
    </div>
  );
};

export default Home;
