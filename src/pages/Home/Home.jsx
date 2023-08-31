import React, { useState } from "react";
import Banner from "../../components/Home/Banner/Banner";
import OneTeam from "../../components/Home/OneTeam/OneTeam";
import Partners from "../../components/Home/Partners/Partners";
import CarouselComponent from "../../components/Home/Carousel/CarouselComponent";
import Achivments from "../../components/Home/Achivments/Achivments";
import ParallaxContainer from "../../components/Home/Parallax/ParallaxContainer";

const Home = ({ isLandscape }) => {
  const [parallaxFinished, setParallaxFinished] = useState(false);
  return (
    <div
      style={{
        minHeight: isLandscape ? "1200vh" : '',
        // minWidth: "100vw",
        overflow: "hidden",
      }}
    >
      <Banner />
      <OneTeam />
      <Partners />
      <CarouselComponent />
      <Achivments />
      {isLandscape && (
        <ParallaxContainer
          parallaxFinishe={parallaxFinished}
          setParallaxFinished={setParallaxFinished}
        />
      )}
    </div>
  );
};

export default Home;
