import { useState } from "react";
import Hero from "../../../components/Hero/Hero";
import Modal from "../../../components/elements/Modal/Modal";
import style from "./WebService.module.css";
import webImage from "../../../assets/images/web-app-development-services.svg";
import jobgetStory from "../../../assets/images/jobget-story.png";
import hookomiStory from "../../../assets/images/hookomi-story.png";
import peopleImage from "../../../assets/images/web-app-cta-img.png";
import logoAngular from "../../../assets/images/frontend/ang-logo.svg";
import logoCss from "../../../assets/images/frontend/css-logo.svg";
import logoEmber from "../../../assets/images/frontend/ember-logo.svg";
import logoHtml from "../../../assets/images/frontend/html-logo.svg";
import logoJS from "../../../assets/images/frontend/javascript-lg.svg";
import logoMeteor from "../../../assets/images/frontend/meteor.svg";
import logoNext from "../../../assets/images/frontend/nextlogo.svg";
import logoReact from "../../../assets/images/frontend/react-logo-icon.svg";
import logoVue from "../../../assets/images/frontend/vuejs-logo.svg";
import logoPython from "../../../assets/images/backend/python.svg";
import logoPhp from "../../../assets/images/backend/php.svg";
import logoNode from "../../../assets/images/backend/node.svg";
import logoJava from "../../../assets/images/backend/java.svg";
import logoGo from "../../../assets/images/backend/go.svg";
import logoDotNet from "../../../assets/images/backend/dot-net.svg";
import logoMs from "../../../assets/images/platform/ms.svg";
import logoSalesforce from "../../../assets/images/platform/salesforce.svg";
import logoShare from "../../../assets/images/platform/share.svg";
import logoMssql from "../../../assets/images/databases/ms-sql.svg";
import logoCassandra from "../../../assets/images/databases/cassandra.svg";
import logoHbase from "../../../assets/images/databases/hbase.svg";
import logoHive from "../../../assets/images/databases/hive.svg";
import logoMongodb from "../../../assets/images/databases/mongodb.svg";
import logoMysql from "../../../assets/images/databases/mysql.svg";
import logoNifi from "../../../assets/images/databases/nifi.svg";
import logoOracle from "../../../assets/images/databases/oracle.svg";
import logoPostgre from "../../../assets/images/databases/postgre_sql.svg";
import bannerImage from "../../../assets/images/web-app-cta-banner.png";
import iconBinkx from "../../../assets/images/trustedBy/binkx.svg";
import iconDominoz from "../../../assets/images/trustedBy/dominoz.svg";
import iconFuttaim from "../../../assets/images/trustedBy/futtaim.svg";
import iconGoogle from "../../../assets/images/trustedBy/google.svg";
import iconKaravan from "../../../assets/images/trustedBy/karavan.svg";
import iconMelltoo from "../../../assets/images/trustedBy/melltoo.svg";
import iconNcr from "../../../assets/images/trustedBy/ncr.svg";
import iconRoammate from "../../../assets/images/trustedBy/roammate.svg";
import iconIos from "../../../assets/images/iosandroid/ios.svg";
import iconAndroid from "../../../assets/images/iosandroid/android.svg";
import {
  textWebDevService,
  textAssuranceService,
  textBigCards,
  textBullets,
  textQuestions,
  carouselItems,
  relatedText,
} from "../../../text/text";
import Button from "../../../components/elements/Button/Button";
import Carousel from "react-simply-carousel";

const WebService = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const handleSlideIndexChange = (newActivSlideIndex) => {
    setActiveSlideIndex(newActivSlideIndex);
  };
  const [showModal, setShowModal] = useState(false);
  const [tech, setTech] = useState(1);
  const [question, setQuestion] = useState(0);

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
        <div className={style.bulletsContainer}>
          {textBullets.map((textBullet, index) => (
            <div key={index} className={style.oneBulleContainer}>
              <div className={style.leftBullet}>
                {index + 1}. {textBullet.title}
              </div>
              <div className={style.rightBullet}>
                <ul>
                  {textBullet.bullets.map((element) => (
                    <li className={style.listBullet}>
                      <span className={style.blueDot}></span>
                      <span className={style.textDot}>{element}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={style.contentContainer}>
        <h2 className={style.bulletsHeading}>Our Success Stories</h2>
        <p className={style.bulletsParag}>
          Being a pioneer in offering robust web app development solutions, our
          team of experts have helped multiple clients in transforming their
          business visions into reality.
        </p>
      </div>

      <div className={style.hukoomiContainer}>
        <div className={style.hukoomiLeft}>
          <img src={jobgetStory} alt="jobgetStory" />
          <h3 className={style.hukoomiHeadline}>JobGet</h3>
          <p className={style.hukoomiParagraph}>
            The award winning app that is reshaping the employment landscape has
            become the de facto platform for the blue collar job space.
          </p>
        </div>
        <div className={style.hukoomiRight}>
          <img src={hookomiStory} alt="hookomiStory" />
          <h3 className={style.hukoomiHeadline}>Hukoomi</h3>
          <p className={style.hukoomiParagraph}>
            How we redefined web experience for the Qatar government by
            exclusively designing a one-stop e-portal for people traveling,
            living, and working in the country!
          </p>
        </div>
      </div>

      <div className={style.contentContainer22}>
        <h2 className={style.bulletsHeading22}>Tech Stack We Use</h2>
        <p className={style.bulletsParag}>
          Here is the tech stack used by our team while offering web app
          development services:
        </p>
        <div className={style.techStackContainer}>
          <div className={style.techStackChoises}>
            <p
              onClick={() => setTech(1)}
              className={tech === 1 ? style.activeTech : style.techStackOne}
            >
              Frontend <br /> Programming Languages
            </p>
            <p
              onClick={() => setTech(2)}
              className={tech === 2 ? style.activeTech : style.techStackOne}
            >
              Backend <br /> Programming Languages
            </p>
            <p
              onClick={() => setTech(3)}
              className={tech === 3 ? style.activeTech : style.techStackOne}
            >
              Platform
            </p>
            <p
              onClick={() => setTech(4)}
              className={tech === 4 ? style.activeTech : style.techStackOne}
            >
              Databases / data storages
            </p>
          </div>
          {tech === 1 && (
            <div className={style.techStackChanges}>
              <p className={style.frontendParagraph}>
                Frontend development is a crucial aspect of developing
                user-friendly applications. At Appinventiv, we choose curated
                front-end programming languages for ensuring the best
                performance.
              </p>
              <p className={style.languages}>LANGUAGES</p>
              <div className={style.basicFront}>
                <img src={logoCss} alt="logoCss" />
                <img src={logoHtml} alt="logoHtml" />
                <img src={logoJS} alt="logoJS" />
              </div>
              <p className={style.languages}>JAVASCRIPT FRAMEWORKS</p>
              <div className={style.basicFront}>
                <img src={logoAngular} alt="logoAngular" />
                <img src={logoReact} alt="logoReact" />
                <img src={logoVue} alt="logoVue" />
                <img src={logoMeteor} alt="logoMeteor" />
                <img src={logoNext} alt="logoNext" />
                <img src={logoEmber} alt="logoEmber" />
              </div>
            </div>
          )}
          {tech === 2 && (
            <div className={style.techStackChanges}>
              <p className={style.frontendParagraph}>
                By considering the performance and reliability, we choose the
                best backend programming languages that can smoothly support the
                server side and the overall functionality of the app or website.
              </p>
              <div className={style.basicBack}>
                <img src={logoDotNet} alt="logoDotNet" />
                <img src={logoJava} alt="logoJava" />
                <img src={logoPython} alt="logoPython" />
                <img src={logoPhp} alt="logoPhp" />
                <img src={logoNode} alt="logoNode" />
                <img src={logoGo} alt="logoGo" />
              </div>
            </div>
          )}
          {tech === 3 && (
            <div className={style.techStackChanges}>
              <div className={style.basicBack}>
                <img src={logoShare} alt="logoShare" />
                <img src={logoMs} alt="logoMs" />
                <img src={logoSalesforce} alt="logoSalesforce" />
              </div>
            </div>
          )}
          {tech === 4 && (
            <div className={style.techStackChanges}>
              <p className={style.languages}>SQL</p>
              <div className={style.basicFront}>
                <img src={logoMssql} alt="logoMssql" />
                <img src={logoMysql} alt="logoMysql" />
                <img src={logoPostgre} alt="logoPostgre" />
                <img src={logoOracle} alt="logoOracle" />
              </div>
              <p className={style.languages}>NOSQL</p>
              <div className={style.basicBack}>
                <img src={logoHbase} alt="logoHbase" />
                <img src={logoNifi} alt="logoNifi" />
                <img src={logoCassandra} alt="logoCassandra" />
                <img src={logoHive} alt="logoHive" />
                <img src={logoMongodb} alt="logoMongodb" />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={style.contentContainer33}>
        <img src={bannerImage} alt="bannerImage" />
        <div className={style.textBanner}>
          Looking for an exact cost and <br />
          time frame estimate for custom web <br />
          development services?
        </div>
      </div>

      <Carousel
        responsiveProps={[
          { minWidth: 993, itemsToShow: 2 },
          { maxWidth: 992, itemsToShow: 1 },
        ]}
        containerProps={{
          style: {
            marginTop: "50px",
            display: "flex",
            justifyContent: "space-between",
            userSelect: "text",
            marginBottom: "60px",
          },
        }}
        dotsNav={{
          show: true,
          itemBtnProps: {
            style: {
              margin: "5px",
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0,
            },
          },
          activeItemBtnProps: {
            style: {
              margin: "5px",
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0,
              background: "black",
            },
          },
        }}
        activeSlideIndex={activeSlideIndex}
        onRequestChange={handleSlideIndexChange}
        itemsToScroll={1}
        disableNavIfEdgeActive={true}
        speed={400}
        easing="linear"
      >
        {carouselItems.map((item) => (
          <div key={item.id} className={style.carouselItem}>
            <div className={style.carouselDiv}>
              <div className={style.carouselInnerDiv}>
                <img src={item.imageOne} alt={item.titleOne} />
                <h2 className={style.titleSlide}>{item.titleOne}</h2>
                <p className={style.textSlide}>{item.textOne}</p>
              </div>
              <div className={style.carouselInnerDiv}>
                <img src={item.imageTwo} alt={item.titleTwo} />
                <h2 className={style.titleSlide}>{item.titleTwo}</h2>
                <p className={style.textSlide}>{item.textTwo}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      <div className={style.contentContainer44}>
        <div className={style.trustedHeadline}>
          <h2>We are trusted by brands you believe in</h2>
          <span></span>
        </div>
        <div className={style.trustedImages}>
          <img src={iconBinkx} alt="iconBinkx" />
          <img src={iconDominoz} alt="iconDominoz" />
          <img src={iconFuttaim} alt="iconFuttaim" />
          <img src={iconGoogle} alt="iconGoogle" />
          <img src={iconKaravan} alt="iconKaravan" />
          <img src={iconMelltoo} alt="iconMelltoo" />
          <img src={iconNcr} alt="iconNcr" />
          <img src={iconRoammate} alt="iconRoammate" />
        </div>
      </div>

      <div className={style.contentContainer44}>
        <h2
          onClick={() => {
            setQuestion(0);
          }}
          className={style.questionsHeading}
        >
          Frequently asked questions
        </h2>
        <div className={style.contentQuestion}>
          {textQuestions.map((textquestion, index) => (
            <div key={index} className={style.masterQuestion}>
              <div
                onClick={() => {
                  setQuestion(index + 1);
                }}
                className={style.headlineQuestion}
              >
                <h2>{textquestion.title}</h2>
                <span>{question === index + 1 ? "-" : "+"}</span>
              </div>
              <p>{question === index + 1 && textquestion.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={style.contentContainer55}>
        <h2 className={style.relatedHeading}>Related articles</h2>
        <div className={style.relatedContainer}>
          <div className={style.relatedFirst}>
            <h3 className={style.relatedSmall}>{relatedText[0].title}</h3>
            <p className={style.relatedText}>{relatedText[0].text}</p>
            <img src={relatedText[0].image} alt="Startups" />
          </div>
          <div className={style.relatedSecond}>
            <div className={style.relatedSecondInner}>
              <div className={style.textPart}>
                <h3 className={style.relatedSmall}>{relatedText[1].title}</h3>
                <p className={style.relatedText}>{relatedText[1].text}</p>
              </div>
              <img src={relatedText[1].image} alt="Changing" />
            </div>
            <div className={style.relatedSecondInner}>
              <div className={style.textPart}>
                <h3 className={style.relatedSmall}>{relatedText[2].title}</h3>
                <p className={style.relatedText}>{relatedText[2].text}</p>
              </div>
              <img src={relatedText[2].image} alt="Databases" />
            </div>
          </div>
        </div>
      </div>

      <div className={style.contentContainer44}>
        <div className={style.iosandroid}>
          <div className={style.iosandroidOne}>
            <div className={style.iosHead}>
              <img src={iconIos} alt="iconIos" />
              <h2 className={style.iosHeadline}>iOS</h2>
            </div>
            <p className={style.iosandroidParag}>
              We help businesses cast their presence in Apple market by
              providing bespoke, robust and scalable iOS app solutions.
            </p>
          </div>
          <div className={style.iosandroidOne}>
            <div className={`${style.iosHead} ${style.uDesno}`}>
              <img src={iconAndroid} alt="iconAndroid" />
              <h2 className={style.iosHeadline}>Android</h2>
            </div>
            <p className={`${style.iosandroidParag} ${style.uDesnoParag}`}>
            We build reliable tailor-made Android app development solutions that fit best to your business needs.
            </p>
          </div>
        </div>
      </div>

      <div
        // style={{
        //   height: "200vh",
        // }}
      />
      {showModal && <div className={style.backDrop} onClick={closeModal}></div>}
      {showModal && <Modal modalHandler={handleModal} />}
    </div>
  );
};

export default WebService;
