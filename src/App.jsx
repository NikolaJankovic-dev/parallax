import React from "react";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import OneTeam from "./components/OneTeam/OneTeam";
import ParallaxContainer from "./components/ParallaxContainer";
import Partners from "./components/Partners/Partners";

const App = () => {
  return (
    <div
      style={{
        height: "1000vh",
        // minWidth: "100vw",
        overflow: "hidden",
      }}
    >
      <Navbar />
      <Banner />

      <OneTeam />
      <Partners />
      <ParallaxContainer />
    </div>
  );
};

export default App;
