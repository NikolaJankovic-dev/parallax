import React, { useState, useRef, useLayoutEffect } from "react";
import style from "./OneTeam.module.css";

const OneTeam = () => {
  const numbersRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    const topPos = numbersRef.current.getBoundingClientRect().top;
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (topPos < scrollPos) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className={style.oneTeam}>
        <h2>One team, one love - Innovation</h2>
        <h3>
          Appinventiv dream, architect, design and develop. But more than that,
          we are a team of passionate people driven by one relentless pursuit-
          to craft innovative solutions and deliver unparalleled results.
        </h3>
        <div className={style.numbers} ref={numbersRef}>
          <div
            style={{
              borderRight: "1px solid #e0e0e0",
              padding: "20px",
              position: "relative",
            }}
          >
            <span
              className={style.number1}
              style={{
                transform: "scale(" + (visible ? 1 : 0.5) + ")",
                opacity: visible ? 1 : 0.5,
              }}
            >
              1000+
            </span>
            <span
              style={{
                position: "absolute",
                bottom: "0",
                right: visible ? "20px" : "100px",
                opacity: visible ? 1 : 0,
                transition: "all 1s ease",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              Products (Apps) Delivered
            </span>
          </div>
          <div>
            <div
              style={{
                borderBottom: "1px solid #e0e0e0",
                paddingInline: "20px",
              }}
            >
              <span
                className={style.number2}
                style={{
                  transform: "scale(" + (visible ? 1 : 0.5) + ")",
                  opacity: visible ? 1 : 0.5,
                }}
              >
                1000+
              </span>
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                creative nerds under one roof
              </span>
            </div>
            <div
              style={{
                paddingInline: "20px",
              }}
            >
              <span
                className={style.number2}
                style={{
                  transform: "scale(" + (visible ? 1 : 0.5) + ")",
                  opacity: visible ? 1 : 0.5,
                }}
              >
                $950m
              </span>
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Investment Raised for startups
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneTeam;
