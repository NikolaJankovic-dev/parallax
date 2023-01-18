import React from "react";
import style from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={style.banner}>
      <div className={style.container}>
        <div className={style.part1}>
          <h1>Redefining</h1>
          <h1>Mobile Experience</h1>
          <p>
            We put disruption in top gear by helping you create exceptional
            experiences.
          </p>
          <button>Consult our Growth Advisor</button>
        </div>
        <div className={style.part2}>
          <div className={style.award1}>
            <h4>
              App Development Company <br /> of the Year
            </h4>
            <span></span>
            <figure>
              <img
                src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/entrepreneur-logo.png"
                alt="award1"
              />
            </figure>
          </div>
          <div className={style.award1}>
            <h4>
              Most Promising Mobile Application <br />
              Solution Providers
            </h4>
            <figure className={style.img2}>
              <img
                src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/CIOReview.png"
                alt="award1"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
