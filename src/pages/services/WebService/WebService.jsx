import { useState } from "react";
import Hero from "../../../components/Hero/Hero";
import Modal from "../../../components/elements/Modal/Modal";
import style from "./WebService.module.css";
import webImage from "../../../assets/images/web-app-development-services.svg";
import peopleImage from "../../../assets/images/web-app-cta-img.png";
import {
  textWebDevService,
  textAssuranceService,
  textBigCards,
} from "../../../text/text";
import Button from "../../../components/elements/Button/Button";

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
        <div className={style.mainParagraph}>
          We provide end-to-end web app development services, tailored
          exclusively to solve your unique business challenges.
        </div>
        <div className={style.flexWrapper}>
          <p className={style.flexParagraph}>
            We use the latest technologies such as PHP, Web 2.0, HTML, Joomla,
            WordPress, Drupal, Magento and OSCommerce to create responsive and
            tailor-made web applications for your business. Our experienced team
            leverages the dynamism of PHP and combines it with database
            languages such as MySQL, HTML, CSS, JavaScript, PHP Code. We use
            frameworks such as ZEND, Codeigniter, Laravel, Yii, and CakePHP to
            create products that work fluidly across platforms and devices.
          </p>
          <p className={style.flexParagraph}>
            We have carved out a niche in Web App Development by using the
            latest web technologies for addressing different project
            requirements. As a web applications development company, we also
            indulge ourselves with not just the technical part but also the
            marketing part with utmost dedication. By making the communication
            fluid and sticking to the Agile approach, we tend to deliver the
            best in the estimated time.
          </p>
        </div>
      </div>
      <div className={style.contentContainer}>
        <h2 className={style.mainHeading}>Web development services we offer</h2>
        <div className={style.mainParagraph}>
          We provide a wide range of services. At Appinventiv, we dig deep,
          understand our client’s objectives and unique business challenges to
          provide the best suited web app solution.
        </div>
        <img className={style.webImage} src={webImage} alt="webImage" />
      </div>
      <div className={style.contentContainer}>
        {textWebDevService.map((webDevService) => (
          <div key={webDevService.title} className={style.flexCard}>
            <div className={style.iconHolder}>
              <img src={webDevService.icon} alt={webDevService.title} />
            </div>
            <div className={style.textHolder}>
              <h3 className={style.cardHeadline}>{webDevService.title}</h3>
              <p className={style.cardText}>{webDevService.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={style.blueContainer}>
        <div className={style.contentContainerBig}>
          <div className={style.flexBlue}>
            <div className={style.imagePeople}>
              <img src={peopleImage} alt="peopleImage" />
            </div>
            <div className={style.textBlue}>
              <h3 className={style.textBlueHeadline}>
                Appinventiv’s Assurance as a <br /> Web App Development Company
              </h3>
              {textAssuranceService.map((service) => (
                <div key={service.title} className={style.flexBlueIcons}>
                  <div className={style.holderIcons}>
                    <img src={service.icon} alt={service.title} />
                  </div>
                  <div className={style.holderText}>
                    <h4 className={style.holderTextHeadline}>
                      {service.title}
                    </h4>
                    <p className={style.holderTextParagraph}>{service.text}</p>
                  </div>
                </div>
              ))}
              <Button
                textColor="#fff"
                backGround="#0092ff"
                paddingY="17px"
                paddingX="60px"
                fontSize="18px"
                whitSpace="nowrap"
                handler={() => setShowModal(true)}
                customStyle={{
                  borderRadius: "5px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                  display: "inline-block",
                }}
              >
                Work With Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className={style.contentContainer}>
        <div className={style.bigCards}>
          <h2 className={style.bigCardsMainHeading}>
            Web application development process
          </h2>
          <p className={style.bigCardsMainParag}>
            Our Solution Development Cycle helps turn your great ideas into
            profitable business solutions.
          </p>
        </div>
      </div>

      <div className={style.bigCardsContainer}>
        {textBigCards.map((oneBigCard) => (
          <div key={oneBigCard.title} className={style.bigCard}>
            <img src={oneBigCard.icon} alt={oneBigCard.title} />
            <h2 className={style.bigCardHeading}>{oneBigCard.title}</h2>
            <p className={style.bigCardParag}>{oneBigCard.text}</p>
          </div>
        ))}
      </div>

      <div className={style.contentContainer}>
        <h2 className={style.bulletsHeading}>
          Building Resilience with Optimized Web Security Practices
        </h2>
        <p className={style.bulletsParag}>
          Our custom web application development services are designed in a way
          that considers security one of the fundamental components of multiple
          stages of a software product lifecycle. We strive to offer extensive
          measures for application security and protection across all the layers
          of our web app development solutions.
        </p>
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
