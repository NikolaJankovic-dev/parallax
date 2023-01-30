import React from "react";
import style from "./Apply.module.css";

const Apply = () => {
  return (
    <div className={style.apply}>
      <div className={style.container}>
        <div className={style.flex}>
          <h2>Join the Appinventiv team!</h2>
          <p>
            Innovate with the latest and greatest technologies & get to work on
            some of the coolest projects you can imagine.
          </p>
          <button>Apply now</button>
        </div>
        <div className={style.grid}>
          <div
            style={{
            gridRow: "1/3",
          }}
          >
            <img src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/join-appi-team2.webp" />
          </div>
          <div>
            <img src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/join-appi-team1.webp" />
          </div>
          <div>
            <img src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/join-team-img3.webp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
