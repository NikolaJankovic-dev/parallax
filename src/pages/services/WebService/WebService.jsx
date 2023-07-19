import { useState } from "react";
import Hero from "../../../components/Hero/Hero";
import Modal from "../../../components/elements/Modal/Modal";
import style from "./WebService.module.css";

const WebService = () => {
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
      <div className={style.heroContainer}>
        <Hero
          modalHandler={handleModal}
          imgSrc="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/web-app-development-services.svg"
          breadCrumb="Web Development"
          title1="Web Application"
          title2="Development Services"
          heroText="Helping Businesses build secure and scalable Web Applications, Portals and Solutions"
          buttonText="Connect with an Expert"
        />
      </div>

      <div className={style.contentContainer}>
        <h2 className={style.mainHeading}>Build next-gen web applications</h2>
      </div>

      <div
        style={{
          height: "200vh",
        }}
      />
      {showModal && <div className={style.backDrop} onClick={closeModal}></div>}
      {showModal && <Modal modalHandler={handleModal} />}
    </div>
  );
};

export default WebService;
