import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import IosService from "./pages/services/IosService/IosService";
import WebService from "./pages/services/WebService/WebService";
import PwaService from "./pages/services/PwaService/PwaService";
import CloudService from "./pages/services/CloudService/CloudService";
import ReactService from "./pages/services/ReactService/ReactService";
import AlMlService from "./pages/services/AlMlService/AlMlService";
import AndroidService from "./pages/services/AndroidService/AndroidService";
import Footer from "./components/Footer/Footer";
import Drawer from "./components/elements/Drawer/Drawer";

const App = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  const handleDrawer = (shouldShow) => {
    if (shouldShow) {
      setShowDrawer(true)
     } else {
      setShowDrawer(false)
     } ;
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <div>
      <HashRouter>
        <Navbar
          handleDrawer={handleDrawer}
          showDrawer={showDrawer}
          isMobile={isMobile}
        />
        {showDrawer && isMobile && <Drawer />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ios" element={<IosService />} />
          <Route path="/web" element={<WebService />} />
          <Route path="/pwa" element={<PwaService />} />
          <Route path="/cloud" element={<CloudService />} />
          <Route path="/react" element={<ReactService />} />
          <Route path="/alml" element={<AlMlService />} />
          <Route path="/android" element={<AndroidService />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
