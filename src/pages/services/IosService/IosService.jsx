import { useState } from "react";
import Modal from "../../../components/elements/Modal/Modal";
import Empowering from "../../../components/Empowering/Empowering";
import Hero from "../../../components/Hero/Hero";
import AppDevService from "../../../components/AppDevService/AppDevService";
import Projects from "../../../components/Projects/Projects";
import LeadingDevCompany from "../../../components/LeadingDevCompany/LeadingDevCompany";
import TrustedBy from "../../../components/TrustedBy/TrustedBy";
import UseCase from "../../../components/UseCase/UseCase";
import style from "./IosService.module.css";

const IosService = () => {
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
    <div className={style.container}>
      <Hero
        modalHandler={handleModal}
        imgSrc="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/ios-scrn.webp"
        breadCrumb="iOS App Development Company"
        title1="iOS App"
        title2="Development Company"
        heroText="Develop next-gen iOS apps that are quality tested for perfection
        with future-forward iOS application development services."
        buttonText="Consult our iOS Team"
      />
      <TrustedBy />
      <AppDevService modalHandler={handleModal} />
      <Empowering />
      <UseCase modalHandler={handleModal} />
      <Projects />
      <LeadingDevCompany />
      {showModal && <div className={style.backDrop} onClick={closeModal}></div>}
      {showModal && <Modal modalHandler={handleModal} />}
    </div>
  );
};

export default IosService;
