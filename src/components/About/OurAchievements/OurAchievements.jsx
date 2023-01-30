import React from "react";
import style from "./OurAchievements.module.css";

const OurAchievements = () => {
  return (
    <div className={style.ourAchievements}>
      <div className={style.container}>
        <h2>OurAchievements</h2>
        <p>
          With the utmost priority of adding value to the projects we undertake,
          we ensure that our partners stay ahead of the clutter and achieve
          excellence.
        </p>
        <div className={style.flexContainer}>
          <div className={style.flipWrap}>
            <div className={style.flipper}>
              <div className={style.front}>
                <figure>
                  <span className={style.clutch}></span>
                </figure>
              </div>
              <div className={style.back}>
                <h3>No. 1 App Development Company for Fintech/Startup</h3>
              </div>
            </div>
          </div>
          <div className={style.flipWrap}>
            <div className={style.flipper}>
              <div className={style.front}>
                <figure>
                  <span className={style.manifest}></span>
                </figure>
              </div>
              <div className={style.back}>
                <h3>Top mobile app developers in the industry</h3>
              </div>
            </div>
          </div>
          <div className={style.flipWrap}>
            <div className={style.flipper}>
              <div className={style.front}>
                <figure>
                  <span className={style.boa}></span>
                </figure>
              </div>
              <div className={style.back}>
                <h3>No. 1 App Development Company for Fintech/Startup</h3>
              </div>
            </div>
          </div>
          <div className={style.flipWrap}>
            <div className={style.flipper}>
              <div className={style.front}>
                <figure>
                  <span className={style.enter}></span>
                </figure>
              </div>
              <div className={style.back}>
                <h3>
                  App of the year - Melltoo || Developed by Appinventiv ||
                </h3>
              </div>
            </div>
          </div>
          <div className={style.flipWrap}>
            <div className={style.flipper}>
              <div className={style.front}>
                <figure>
                  <span className={style.ifah}></span>
                </figure>
              </div>
              <div className={style.back}>
                <h3>
                  Top healthcare product-Shifa || Developed by Appinventiv ||
                </h3>
              </div>
            </div>
          </div>
          <div className={style.flipWrap}>
            <div className={style.flipper}>
              <div className={style.front}>
                <figure>
                  <span className={style.futura}></span>
                </figure>
              </div>
              <div className={style.back}>
                <h3>Number 1 mobile app development company </h3>
              </div>
            </div>
          </div>
          <div className={style.flipWrap}>
            <div className={style.flipper}>
              <div className={style.front}>
                <figure>
                  <span className={style.mad}></span>
                </figure>
              </div>
              <div className={style.back}>
                <h3>Top blockchain app development company</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.orangeBanner}>
        <div
          className={style.digits}
          style={{
            borderRight: "1px solid #fff",
          }}
        >
          <span>1000+</span>
          <div>Projects Delivered</div>
        </div>
        <div
          className={style.digits}
          style={{
            borderRight: "1px solid #fff",
          }}
        >
          <span>1000+</span>
          <div>Tech experts On-board</div>
        </div>
        <div className={style.digits}>
          <span>$950M</span>
          <div>Investment Raised for Startups</div>
        </div>
      </div>
    </div>
  );
};

export default OurAchievements;
