import { useState } from "react";
import Hero from "../../../components/Hero/Hero";
import Modal from "../../../components/elements/Modal/Modal";
import style from "./ReactService.module.css";
import TrustedBy from "../../../components/TrustedBy/TrustedBy";
import Empowering from "../../../components/Empowering/Empowering";
import AppDevService from "../../../components/AppDevService/AppDevService";
import Benefits from "../../../components/Benefits/Benefits";
import ReactProjects from "../../../components/ReactProjects/ReactProjects";

const ReactService = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    if (showModal) {
      setShowModal(false);
    }
  };
  return (
    <div>
      <Hero
        modalHandler={handleModal}
        breadCrumb="React Native App Development"
        title1="React Native"
        title2="App Development"
        heroText="Offer native-like experiences to your users in half the development time and cost with our react native app development services."
        buttonText="Contact Our React Native Experts"
      />
      <TrustedBy />
      <AppDevService modalHandler={handleModal} />
      <Empowering />
      <Benefits modalHandler={handleModal} />
      <ReactProjects />
      {showModal && <div className={style.backDrop} onClick={closeModal}></div>}
      {showModal && <Modal modalHandler={handleModal} />}
    </div>
  );
};

export default ReactService;
