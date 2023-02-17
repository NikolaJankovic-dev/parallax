import { useState } from "react";
import Modal from "../../../components/elements/Modal/Modal";
import Empowering from "../../../components/Service/Ios/Empowering/Empowering";
import Hero from "../../../components/Service/Ios/Hero/Hero";
import IosAppDevService from "../../../components/Service/Ios/IosAppDevService/IosAppDevService";
import IosProjects from "../../../components/Service/Ios/IosProjects/IosProjects";
import LeadingDevCompany from "../../../components/Service/Ios/LeadingDevCompany/LeadingDevCompany";
import TrustedBy from "../../../components/Service/Ios/TrustedBy/TrustedBy";
import UseCase from "../../../components/Service/Ios/UseCase/UseCase";
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
      <Hero modalHandler={handleModal} />
      <TrustedBy />
      <IosAppDevService modalHandler={handleModal} />
      <Empowering />
      <UseCase modalHandler={handleModal} />
      <IosProjects />
      <LeadingDevCompany />
      {showModal && <div className={style.backDrop} onClick={closeModal}></div>}
      {showModal && <Modal modalHandler={handleModal} />}
    </div>
  );
};

export default IosService;
