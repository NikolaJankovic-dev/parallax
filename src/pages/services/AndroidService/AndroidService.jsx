import { useState } from "react";
import Hero from "../../../components/Hero/Hero";
import Modal from "../../../components/elements/Modal/Modal";
import style from "./AndroidService.module.css";
import AppDevServce from "../../../components/AppDevService/AppDevService";
import TrustedBy from "../../../components/TrustedBy/TrustedBy";
import Empowering from "../../../components/Empowering/Empowering";
import UseCase from "../../../components/UseCase/UseCase";
import Projects from "../../../components/Projects/Projects";
import LeadingDevCompany from "../../../components/LeadingDevCompany/LeadingDevCompany";

const AndroidService = () => {
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
        imgSrc="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/android-mobile-banner.png"
        breadCrumb="Android Application Development"
        title1="Android App"
        title2="Development Company"
        heroText="High performance, effective and highly reliable custom Android apps
        to help you get ahead of your competition"
        buttonText="Connect with an Expert"
      />
      <TrustedBy />
      <AppDevServce modalHandler={handleModal} />
      <Empowering />
      <UseCase modalHandler={handleModal} />
      <Projects />
      <LeadingDevCompany />
      {showModal && <div className={style.backDrop} onClick={closeModal}></div>}
      {showModal && <Modal modalHandler={handleModal} />}
    </div>
  );
};

export default AndroidService;
