import React from "react";
import Gallery from "../../components/About/Gallery/Gallery";
import History from "../../components/About/History/History";
import OurAchievements from "../../components/About/OurAchievements/OurAchievements";
import Values from "../../components/About/Values/Values";
import Work from "../../components/About/Work/Work";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.about}>
      <section className={style.banner}>
        <h1>Transforming Businesses With Innovation</h1>
      </section>

      <section className={style.who}>
        <span>WHO</span>
        <div className={style.whoCont}>
          <div>
            <h2>Who We Are?</h2>
            <p>
              We are believers of change! A change driven by technology and
              innovation. We help businesses and individuals in adapting as well
              as adopting digital transformation. Our aim is to change people’s
              lives and improve businesses with our progressive and innovative
              technology solutions.
            </p>
          </div>
          <div>
            <h2>What We Do Best</h2>
            <p>
              We start by listening to the issues, requirements, challenges and
              objectives. The process continues with an effort to understand the
              business, market sector and competitors to develop information
              which is combined with our technical knowledge, expertise and
              research in order to provide the best solution at the lowest cost.
            </p>
          </div>
        </div>
      </section>
      <History />
      <Work />
      <Gallery />
      <Values />
      <OurAchievements/>
    </div>
  );
};

export default About;
