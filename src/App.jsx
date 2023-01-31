import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import IosService from "./pages/services/IosService/IosService"
import WebService from "./pages/services/WebService/WebService";
import PwaService from "./pages/services/PwaService/PwaService";
import CloudService from "./pages/services/CloudService/CloudService";
import ReactService from "./pages/services/ReactService/ReactService";
import AlMlService from "./pages/services/AlMlService/AlMlService";
import AndroidService from "./pages/services/AndroidService/AndroidService";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Navbar />
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
      </HashRouter>
    </div>
  );
};

export default App;
