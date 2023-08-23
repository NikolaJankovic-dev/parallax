import style from "./PwaService.module.css";
import {
  benefitsPWA,
  developPWA,
  revolutionPWA,
  whyChooseUs,
  skilledText,
  mobileText,
  recognizedPwa,
  textQuestionsPwa,
} from "../../../text/text";
import greenImage from "../../../assets/images/greenImage.png";
import iconBinkx from "../../../assets/images/trustedBy/binkx.svg";
import iconDominoz from "../../../assets/images/trustedBy/dominoz.svg";
import iconFuttaim from "../../../assets/images/trustedBy/futtaim.svg";
import iconGoogle from "../../../assets/images/trustedBy/google.svg";
import iconKaravan from "../../../assets/images/trustedBy/karavan.svg";
import iconMelltoo from "../../../assets/images/trustedBy/melltoo.svg";
import iconNcr from "../../../assets/images/trustedBy/ncr.svg";
import iconRoammate from "../../../assets/images/trustedBy/roammate.svg";
import icongrayStar from "../../../assets/images/recognizedPwa/grayStar.png";
import { useState } from "react";

const PwaService = () => {
  const [questionPwa, setQuestionPwa] = useState(0);

  return (
    <>
      <div className={style.heroContainer}>
        <div className={style.contentContainer}>
          <h1 className={style.mainHeading}>Progressive Web App Development</h1>
          <p className={style.mainParagraph}>
            Delivering user experiences that have the look and feel of a mobile
            app and the reach of the web.
          </p>
        </div>
      </div>

      <div className={style.contentContainer}>
        <h2 className={style.mainHeadingInner}>
          Delight users and increase conversions with next-gen Progressive web
          app development
        </h2>
        <div className={style.mainParagraph}>
          We are a top progressive web app development company having
          successfully deployed secure and robust web app solutions across all
          industry verticals.
        </div>
        <div className={style.flexWrapper}>
          <p className={style.flexParagraph}>
            At Appinventiv, we build cutting-edge web applications that render a
            100% immersive experience and function similar to a desktop or
            mobile app. Through progressive web app development, we help you
            take your business to the world in a way that the world wants to
            interact with your business. <br />
            <br />
            Our Progressive web applications ensure smooth performance and
            render a native alike experience. We work with an aim to optimise
            and maximise user engagement, and make mobile applications readily
            accessible with less effort across all platforms.
            <br />
            <br />
            Our progressive web app solutions come integrated with unique
            features such as offline browsing, push notifications, data analysis
            and easy channels of distribution.
            <br />
            <br />
            At Appinventiv, the creation of a PWA is so
          </p>
          <p className={style.flexParagraph}>
            standardised and seamless that users can’t really differentiate
            between a native mobile application and a progressive web app.
            Besides delivering the feel of a native app, we focus greatly on
            enhancing the user experience with faster load time, an app-like
            interface and highly interactive content.
            <br />
            <br />
            We help brands by developing best-in-class progressive web
            applications that aren’t just superfast and lite but also
            connectivity-independent and compatible across all devices and
            screen sizes.
            <br />
            <br />
            Our team of Progressive web app developers helped over 30+SMBs and
            brands increase their user engagement by over 65x and expand their
            revenues by over 300%, with our best-in-class progressive web app
            development services.
          </p>
        </div>
      </div>

      <div className={style.contentContainer}>
        <h2 className={style.mainHeadingInner}>
          Future-ready progessive web app solutions come with an array of
          benefits
        </h2>
        <div className={style.mainParagraph}>
          We take the power of Progressive web app technology and combine it
          with our extensive Mobile and Web App development expertise to deliver
          a feature- packed solution. Our progressive web app developers provide
          a potent combination of technical expertise and deliver meaningful
          experiences.
        </div>
      </div>

      <div className={style.contentContainer}>
        <div className={style.gridPwa}>
          {benefitsPWA.map((benefit, index) => (
            <div key={index} className={style.oneBenefit}>
              <img src={benefit.image} alt={benefit.title} />
              <h3 className={style.benefitHeadline}>{benefit.title}</h3>
              <p className={style.benefitParagraph}>{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={style.contentContainer}>
        <h2 className={style.mainHeadingInner}>
          Our Progressive Web App Development Services
        </h2>
        <div className={style.mainParagraph}>
          We provide high-end progressive web app development solutions that are
          remarkably efficient, highly responsive and aim at meeting unique user
          needs. Through our progressive web application development services,
          we ensure that users get an immersive app experience when visiting
          your website.
        </div>
      </div>

      <div className={style.contentContainer}>
        <div className={style.flexPwa}>
          {developPWA.map((develop, index) => (
            <div key={index} className={style.oneDevelop}>
              <div className={style.oneDevelopImage}>
                <img src={develop.image} alt={develop.title} />
              </div>
              <div>
                <h3 className={style.developHeadline}>{develop.title}</h3>
                <p className={style.developParagraph}>{develop.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={style.contentContainer}>
        <h2 className={style.mainHeadingInner}>
          PWAs are revolutionising business around the world
        </h2>
        <div className={style.mainParagraph}>
          As a leading PWA development company, we are not the only patrons of
          the PWA power. There are many businesses who witnessed a stark rise in
          their revenue and conversion rates after PWA inclusion.
        </div>
      </div>

      <div className={style.contentContainer}>
        <div className={style.gridRevolution}>
          {revolutionPWA.map((revolution, index) => (
            <div key={index} className={style.onerevolution}>
              <div className={style.onerevolutionImage}>
                <img src={revolution.image} alt={revolution.title} />
              </div>
              <div>
                <p className={style.revolutionParagraph}>{revolution.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={style.contentContainer}>
        <h2 className={style.mainHeadingInner}>Why choose us?</h2>
        <div className={style.mainParagraph}>
          Our team of Progressive web app developers leverage years of expertise
          and the power of PWA technology to offer cutting-edge solutions that
          help you stand out in the world of millions.
        </div>
      </div>

      <div className={style.contentContainer}>
        <div className={style.flexPwa}>
          {whyChooseUs.map((develop, index) => (
            <div key={index} className={style.oneDevelop}>
              <div className={style.oneDevelopImage}>
                <img src={develop.image} alt={develop.title} />
              </div>
              <div>
                <h3 className={style.developHeadline}>{develop.title}</h3>
                <p className={style.developParagraph}>{develop.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={style.contentContainer}>
        <h2 className={style.mainHeadingInner}>
          Our team is skilled to develop an engaging PWA solution
        </h2>
      </div>

      <div className={style.contentContainer}>
        <div className={style.flexSkilled}>
          {skilledText.map((develop, index) => (
            <div key={index} className={style.oneSkilled}>
              <img src={develop.image} alt={develop.title} />
              <h3>{develop.text}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className={style.contentContainer}>
        <h2 className={style.mainHeadingInner}>
          We help businesses take the future of Mobile web across diverse
          industry verticals
        </h2>
        <div className={style.mainParagraph}>
          We transform your brilliant ideas into exceptional user interfaces to
          build solutions that help you meet the rising demands of the digital
          business era. We have worked with startups and brands in diverse
          domains and industry verticals.
        </div>
      </div>

      <div className={style.contentContainer}>
        <div className={style.flexMobile}>
          {mobileText.map((develop, index) => (
            <div key={index} className={style.oneMobile}>
              <img src={develop.image} alt={develop.title} />
              <h3>{develop.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <img
        style={{
          width: "99.1vw",
          display: "block",
          marginTop: "100px",
          marginBottom: "80px",
        }}
        src={greenImage}
        alt={greenImage}
      />

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
        <div className={style.trustedHeadline2}>
          <h2>Recognized by the best</h2>
          <span></span>
        </div>
      </div>

      <div className={style.contentContainerRecognized}>
        <div className={style.flexRecognized}>
          {recognizedPwa.map((develop, index) => (
            <div key={index} className={style.oneRecognized}>
              <img src={icongrayStar} alt={icongrayStar} />
              <img src={develop.image} alt={develop.title} />
              <p className={style.textRecog}>{develop.text}</p>
              <p className={style.margRecog}>{develop.year}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={style.contentContainer44}>
        <h2
          onClick={() => {
            setQuestionPwa(0);
          }}
          className={style.questionsHeading}
        >
          Frequently asked questions
        </h2>
        <div className={style.contentQuestion}>
          {textQuestionsPwa.map((textquestion, index) => (
            <div key={index} className={style.masterQuestion}>
              <div
                onClick={() => {
                  questionPwa === index + 1
                    ? setQuestionPwa(0)
                    : setQuestionPwa(index + 1);
                }}
                className={style.headlineQuestion}
              >
                <h2>{textquestion.title}</h2>
                <span>{questionPwa === index + 1 ? "-" : "+"}</span>
              </div>
              <p>{questionPwa === index + 1 && textquestion.text}</p>
              {questionPwa === index + 1 && textquestion.bullets && (
                <ul
                  style={{
                    paddingBottom: "20px",
                    marginTop: "30px",
                  }}
                  className="listaPwa"
                >
                  {textquestion.bullets.map((bullet, index) => (
                    <li
                      style={{
                        paddingBottom: "10px",
                        fontSize: "18px",
                        lineHeight: 1.5,
                        color: "#333",
                        marginLeft: "20px",
                      }}
                      className="bulletPwa"
                      key={index}
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={style.contentContainer55}>
        <h2 className={style.relatedHeading}>Related articles</h2>
        {/* <div className={style.relatedContainer}>
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
        </div> */}
      </div>
    </>
  );
};

export default PwaService;
