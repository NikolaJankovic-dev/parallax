import React from "react";
import style from "./Achivments.module.css";

const Achivments = () => {
  return (
    <div className={style.achivments}>
      <div className={style.info}>
        <h2>
          The relentless pursuit of being the best in digital product
          <br />
          development
        </h2>
        <p>
          Our award and recognitions validate that when businesses think about
          expanding into mobile segment, we are the top mobile app development
          company in US that they think of.
        </p>
      </div>
      <div className={style.cards}>
        <div className={style.card}>
          <div className={style.cardImg}>
            <img
              src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/cio-review.png"
              alt="award1"
            />
            <img
              src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/awardbadge.svg"
              alt="award2"
              className={style.awardBadge}
            />
          </div>
          {/* <div className={style.cardInfo}> */}
          <h4>The most promising mobile apps solution providers globally</h4>
          <p>
            We have been recognized as a market leader globally, post a rigorous
            evaluation of factors such as company`s ability to deliver, market
            presence & client experience
          </p>
          {/* </div> */}
        </div>
        <div className={style.card}>
          <div className={style.cardImg}>
            <img
              src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/top-app-development-company-for-startup-and-fintech-by-clutch.png"
              alt="award1"
            />
            <img
              src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/awardbadge.svg"
              alt="award2"
              className={style.awardBadge}
            />
          </div>
          {/* <div className={style.cardInfo}> */}
          <h4>
            We are ranked among the top global leaders in mobile app development
          </h4>
          <p>
            Beside being recognised as the top global leader in custom software
            development, we have been awarded #1 app development company for
            startup and Fintech by Clutch for 2019.
          </p>
          {/* </div> */}
        </div>
        <div className={style.card}>
          <div className={style.cardImg}>
            <img
              src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/cmmi3.svg"
              alt="award1"
            />
          </div>
          {/* <div className={style.cardInfo}> */}
          <h4>Setting a new benchmark in quality of service</h4>
          <p>
            We have achieved Level 3 of Capability Maturity Model Integration
            (CMMI), setting a new benchmark to offer the best technical
            solutions to clients.
          </p>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Achivments;
