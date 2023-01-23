import React, { useState, useLayoutEffect } from "react";
import style from "./History.module.css";

const History = () => {
  const [year, setYear] = useState(2015);
  const [text, setText] = useState(
    "We started with just 10 employees working passionately with a vision to grow. With utmost dedication, we bagged our first brand project within a month of our incorporation. Set the grounds for success and unprecedented opportunities."
  );
  const [img, setImg] = useState(
    "https://appinventiv.com/wp-content/themes/twentynineteen-child/images/ai-founded.webp"
  );
  const [opacity, setOpacity] = useState(1);

  const onPointerDown = (arg) => {
    if (arg !== year){
    setOpacity(0);
    setTimeout(() => {
      setYear(arg);
    }, 300);
    }
  };

  useLayoutEffect(() => {
    if (year === 2015) {
      setOpacity(1);
      setText(
        "We started with just 10 employees working passionately with a vision to grow. With utmost dedication, we bagged our first brand project within a month of our incorporation. Set the grounds for success and unprecedented opportunities."
      );
      setImg(
        "https://appinventiv.com/wp-content/themes/twentynineteen-child/images/ai-founded.webp"
      );
    } else if (year === 2016) {
      setOpacity(1);
      setText(
        "We touched a 100+ project milestone mark and strengthened our workforce by hiring 150+ employees from across locations, all of this in just a year. Ramped up all our processes to incorporate a smooth flow of work."
      );
      setImg(
        "https://appinventiv.com/wp-content/themes/twentynineteen-child/images/img2017.webp"
      );
    } else if (year === 2017) {
      setOpacity(1);
      setText(
        "We received industry and world wide recognition as tech experts and thought leaders. Our employee strength grew into a community of tech lovers building a powerful culture that was bound to see only growth ahead."
      );
      setImg(
        "https://appinventiv.com/wp-content/themes/twentynineteen-child/images/img2018.webp"
      );
    } else if (year === 2018) {
      setOpacity(1);
      setText(
        "With a year on year growth of 250%, we moved into a new office to accommodate our enormous strength of 1000+ employees. And went on to expand across the globe with 6 new branches."
      );
      setImg(
        "https://appinventiv.com/wp-content/themes/twentynineteen-child/images/img2019.webp"
      );
    } else if (year === 2019) {
      setOpacity(1);
      setText(
        "We delivered to 1000+ happy clients and celebrated this achievement in our very own newly built terrace cafe. We also started a charitable initiative, Daan Sewa, to help uplift the less fortunate in our locality."
      );
      setImg(
        "https://appinventiv.com/wp-content/themes/twentynineteen-child/images/img2019-nw.webp"
      );
    } else if (year === 2020) {
      setOpacity(1);
      setText(
        "We bagged multiple long-term state and central government contracts worth millions of dollars. Set the record for biggest number of hirings done during the pandemic. Under the mentorship of our Director Mr Saurabh Singh, we won the award for App Development Company of The Year & wrapped up 2020 with a revenue of 14 million dollars."
      );
      setImg(
        "https://appinventiv.com/wp-content/themes/twentynineteen-child/images/img2020.webp"
      );
    }
  }, [year]);

  return (
    <div className={style.history}>
          <h2>Our History</h2>
          <span className={style.bigH}>HISTORY</span>
      <div className={style.container}>
        <div
          className={style.content}
          style={{
            opacity: opacity,
          }}
        >
          <div className={style.text}>
            <p>{year}</p>
            {year === 2015 ? (
              <p
                style={{
                  fontSize: "1.7rem",
                }}
              >
                Appinventiv is founded
              </p>
            ) : null}
            <p>{text}</p>
          </div>
          <div className={style.picture}>
            <img src={img} alt="history" />
            <span></span>
          </div>
        </div>
        <div className={style.slider}>
          <ul>
            <li
              onPointerDown={() => {
                onPointerDown(2015);
              }}
            >
              <span>2015</span>
              <span
                className={style.logo}
                style={{
                  opacity: year === 2015 ? 1 : 0,
                  transform: year === 2015 ? "scale(1)" : "scale(0)",
                }}
              ></span>
            </li>
            <li
              onPointerDown={() => {
                onPointerDown(2016);
              }}
            >
              <span>2016</span>
              <span
                className={style.logo}
                style={{
                  opacity: year == 2016 ? 1 : 0,
                  transform: year == 2016 ? "scale(1)" : "scale(0)",
                }}
              ></span>
            </li>
            <li
              onPointerDown={() => {
                onPointerDown(2017);
              }}
            >
              <span>2017</span>
              <span
                className={style.logo}
                style={{
                  opacity: year == 2017 ? 1 : 0,
                  transform: year == 2017 ? "scale(1)" : "scale(0)",
                }}
              ></span>
            </li>
            <li
              onPointerDown={() => {
                onPointerDown(2018);
              }}
            >
              <span>2018</span>
              <span
                className={style.logo}
                style={{
                  opacity: year == 2018 ? 1 : 0,
                  transform: year == 2018 ? "scale(1)" : "scale(0)",
                }}
              ></span>
            </li>
            <li
              onPointerDown={() => {
                onPointerDown(2019);
              }}
            >
              <span>2019</span>
              <span
                className={style.logo}
                style={{
                  opacity: year == 2019 ? 1 : 0,
                  transform: year == 2019 ? "scale(1)" : "scale(0)",
                }}
              ></span>
            </li>
            <li
              onPointerDown={() => {
                onPointerDown(2020);
              }}
            >
              <span>2020</span>
              <span
                className={style.logo}
                style={{
                  opacity: year == 2020 ? 1 : 0,
                  transform: year == 2020 ? "scale(1)" : "scale(0)",
                }}
              ></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default History;
