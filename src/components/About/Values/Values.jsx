import React from "react";
import style from "./Values.module.css";

const Values = () => {
  return (
    <div className={style.values}>
      <h2>Our Core Values</h2>
      <h3>
        We’re enthusiastic learners and seasoned inventors. Together, we can
        <br />
        create solutions that serve not just technology but the humans behind
        it.
      </h3>
      <div className={style.container}>
        <div>
          <span>01</span>
          <h4>Ensure impactful innovations</h4>
          <p>
            An unwavering commitment to drive maximum customer satisfaction,
            infused with integrity and passion.
          </p>
        </div>
        <div>
          <span>02</span>
          <h4>Focus on self-development</h4>
          <p>
            Training and mentorship programs, interactive sessions and community
            meetups to drive personal growth.
          </p>
        </div>
        <div>
          <span>03</span>
          <h4>Integrate work-life balance</h4>
          <p>
            Latest infrastructure and flexible working hours along with many
            other privileges that inculcate healthy lifestyle choices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
