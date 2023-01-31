import React, { useState, useLayoutEffect } from "react";
import style from "./CarouselComponent.module.css";

const CarouselComponent = () => {
  const [phase, setPhase] = useState(0);

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      if (phase === 0) {
        setPhase(1);
      } else if (phase === 1) {
        setPhase(2);
      } else if (phase === 2) {
        setPhase(0);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [phase]);

  return (
    <div className={style.carouselComp}>
      <div
        className={style.container}
        onPointerDown={() => {
          if (phase === 0) {
            setPhase(1);
          } else if (phase === 1) {
            setPhase(2);
          } else if (phase === 2) {
            setPhase(0);
          }
        }}
      >
        <div
          className={phase === 0 ? style.show : style.hide}
          style={{
            backgroundImage: `url("https://appinventiv.com/wp-content/themes/twentynineteen-child/images/appinventiv-work-culture.webp")`,
            backgroundSize: 'cover',
          }}
        >
          <div className={style.sliderContent}>
            <h2>
              We lead. The industry follows as we shape your vision to reality
            </h2>
            <p>
              Work with hand-picked tech talent having experience of working
              with companies, from around the world and time-zones
            </p>
          </div>
        </div>
        <div
          className={phase === 1 ? style.show : style.hide}
          style={{
            backgroundImage: `url("https://appinventiv.com/wp-content/themes/twentynineteen-child/images/appinventiv-project-management.webp")`,
            backgroundSize: 'cover',
          }}
        >
          <div className={style.sliderContent}>
            <h2>World Class Full Stack Product Team On Demand</h2>
            <p>
              Our teams can design, build, ship and scale your idea and make it
              a reality in the most efficient way.
            </p>
          </div>
        </div>
        <div
          className={phase === 2 ? style.show : style.hide}
          style={{
            backgroundImage: `url("https://appinventiv.com/wp-content/themes/twentynineteen-child/images/appinventiv-mobile-app-design-&-development-company.webp")`,
            backgroundSize: 'cover',
          }}
        >
          <div className={style.sliderContent}>
            <h2>Fastest growing digital product agency in APAC</h2>
            <p>
              Work with hand-picked tech talent having experience of working
              with companies, from around the world and time-zones.
            </p>
          </div>
        </div>
      </div>
      <div className={style.bottom}>
        <div className={style.info}>
          <div>
            <h2>Skilled techies,</h2>
            <p>in-house</p>
          </div>
          <div>
            <h2>Definite process,</h2>
            <p>extraordinary results</p>
          </div>
          <div>
            <h2>Unmatched transparency,</h2>
            <p>offering total visibility</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
