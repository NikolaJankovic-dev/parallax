import style from "./PwaService.module.css";
import { benefitsPWA, developPWA, revolutionPWA, whyChooseUs } from "../../../text/text";

const PwaService = () => {
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
        <h2 className={style.mainHeadingInner}>
        Why choose us?
        </h2>
        <div className={style.mainParagraph}>
        Our team of Progressive web app developers leverage years of expertise and the power of PWA technology to offer cutting-edge solutions that help you stand out in the world of millions.
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



    </>
  );
};

export default PwaService;
