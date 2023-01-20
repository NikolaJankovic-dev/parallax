import React from "react";
import style from "./Work.module.css";

const Work = () => {
  return (
    <div className={style.work}>
      <h2>
        Work Life <br />
        At Its <span>Best</span>
      </h2>
      <div className={style.grid}>
        <div>
          <img
            src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/learning-dev.jpg"
            alt="learning"
          />
          <h3>
            Learning <br /> & Development
          </h3>
          <span></span>
        </div>
        <div>
          <img
            src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/Mindful-Personal-Guidance.jpg"
            alt="learning"
          />
          <h3>
            Mindful <br /> Personal Guidance
          </h3>{" "}
          <span></span>
        </div>
        <div>
          <img
            src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/Constructive-Feedback.jpg"
            alt="learning"
          />
          <h3>
            Constructive <br /> Feedback
          </h3>
        </div>
        <div>
          <img
            src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/Inclusive-Open-Culture.jpg"
            alt="learning"
          />
          <h3>
            Inclusive <br /> & Open-Culture
          </h3>
          <span></span>
        </div>
        <div>
          <img
            src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/Innovation-Quality-First.jpg"
            alt="learning"
          />
          <h3>
            Innovation <br /> & Quality First
            <span></span>
          </h3>
        </div>
        <div>
          <img
            src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/Proactive-Implementation.jpg"
            alt="learning"
          />
          <h3>
            Proactive <br /> Implementation
          </h3>
        </div>
        <div>
          <img
            src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/Best-Global-Opportunities.jpg"
            alt="learning"
          />
          <h3>
            Best & Global <br /> Opportunities
                  </h3>
                  <span></span>
        </div>
        <div>
          <img
            src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/Work-with-Latest-Technology.jpg"
            alt="learning"
          />
          <h3>
            Work with <br /> Latest Technology
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Work;
