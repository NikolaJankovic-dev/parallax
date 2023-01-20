import React, { useState, useLayoutEffect, useRef } from "react";
import CircleSvg from "./CircleSvg";
import style from "./TextContainer.module.css";

const TextContainer = ({ phase }) => {
  const [bgColor, setBgColor] = useState("#095CBB");
  const [scrollY, setScrollY] = useState(0);

  const contRef = useRef(null);

  const scrollToElement = (arg) => {
    if (arg > phase) {
      let diference = arg - phase;
      window.scrollBy({
        top: contRef.current.offsetHeight * diference,
        left: 0,
        behavior: "smooth",
      });
    } else if (arg < phase) {
      let diference = phase - arg;
      window.scrollBy({
        top: -contRef.current.offsetHeight * diference,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const isVisible = (ref) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const viewHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight
      );
      return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    }
  };

  useLayoutEffect(() => {
    if (phase === 1) {
      setBgColor("#095CBB");
    } else if (phase === 2) {
      setBgColor("#562DD3");
    } else if (phase === 3) {
      setBgColor("#0E1041");
    } else if (phase === 4) {
      setBgColor("#162B44");
    } else if (phase === 5) {
      setBgColor("#1070EA");
    } else if (phase === 6) {
      setBgColor("#00319C");
    } else if (phase === 7) {
      setBgColor("#008D54");
    }
  }, [phase]);
  return (
    <div
      style={{
        backgroundColor: bgColor,
      }}
      className={style.textContainer}
      ref={contRef}
    >
      <div
        style={{
          transform: `translate(50%, -50%) scale(${
            isVisible(contRef) ? 1 : 0.5
          })`,

          backgroundColor: bgColor,
        }}
        className={style.circleSvg}
      >
        <CircleSvg phase={phase} scrollToElement={scrollToElement} />
      </div>
      <div className={style.titles}>
        <div className={style.first}>
          <div className={style.title1}></div>
          <div className={style.title2}>
            <span>Innovation Award</span>
            <p
              className={style.toggleText}
              style={{
                transform: `translateY(${
                  phase < 2 && isVisible(contRef) ? 0 : -100
                }%)`,
              }}
            >
              Innovation Award
            </p>
          </div>
          <div className={style.title3}>
            <span> winning App</span>
            <p
              className={style.toggleText}
              style={{
                transform: `translateY(${phase < 2 && isVisible(contRef) ? 0 : -100}%)`,
                right: "0%",
              }}
            >
              winning App
            </p>
          </div>
        </div>
        <div className={style.second}>
          <div className={style.title1}>
            <span>The Next Big</span>
            <p
              className={style.toggleText}
              style={{
                transform: `translateY(${
                  phase === 2 ? 0 : phase > 2 ? -100 : 100
                }%)`,
                left: "0%",
              }}
            >
              The Next Big
            </p>
          </div>
          <div className={style.title2}>
            <span>Blockchain</span>
            <p
              className={style.toggleText}
              style={{
                transform: `translateY(${
                  phase === 2 ? 0 : phase > 2 ? -100 : 100
                }%)`,
              }}
            >
              Blockchain
            </p>
          </div>
          <div className={style.title3}>
            <span>Revolution</span>
            <p
              className={style.toggleText}
              style={{
                transform: `translateY(${
                  phase === 2 ? 0 : phase > 2 ? -100 : 100
                }%)`,
                right: "0%",
              }}
            >
              Revolution
            </p>
          </div>
        </div>
        <div className={style.third}>
          <div className={style.title1}>
            <span>Redefining</span>
            <p
              className={style.toggleText}
              style={{
                transform: `translateY(${
                  phase === 3 ? 0 : phase > 3 ? -100 : 100
                }%)`,
                left: "0%",
              }}
            >
              Redefining
            </p>
          </div>
          <div className={style.title2}>
            <span>BMI Measurment</span>
            <p
              className={style.toggleText}
              style={{
                transform: `translateY(${
                  phase === 3 ? 0 : phase > 3 ? -100 : 100
                }%)`,
              }}
            >
              BMI Measurment
            </p>
          </div>
          <div className={style.title3}>
            <span></span>
            <p
              className={style.toggleText}
              style={{
                transform: `translateY(${
                  phase === 3 ? 0 : phase > 3 ? -100 : 100
                }%)`,
                right: "0%",
              }}
            ></p>
          </div>
        </div>
        <div className={style.fourth}>
          <div className={style.title1}>
            <span>Redefining</span>
            <p
              className={style.toggleText}
              style={{
                transform: `translateY(${
                  phase === 4 ? 0 : phase > 4 ? -100 : 100
                }%)`,
                left: "0%",
              }}
            >
              Redefining
            </p>
          </div>
          <div className={style.title2}>
            <span>UX Strategy</span>
            <p
              className={style.toggleText}
              style={{
                transform: `translateY(${
                  phase === 4 ? 0 : phase > 4 ? -100 : 100
                }%)`,
              }}
            >
              UX Strategy
            </p>
          </div>
          <div className={style.title3}>
            <span>and UI design</span>
            <p
              className={style.toggleText}
              style={{
                transform: `translateY(${
                  phase === 4 ? 0 : phase > 4 ? -100 : 100
                }%)`,
                right: "0%",
              }}
            >
              and UI design
            </p>
          </div>
        </div>
        <div className={style.fifth}>
          <div className={style.title1}>
            <span>The world's first</span>
            <p
              className={style.toggleText}
              style={{
                transform: `translateY(${
                  phase === 5 ? 0 : phase > 5 ? -100 : 100
                }%)`,
                left: "0%",
              }}
            >
              The world's first
            </p>
          </div>
          <div className={style.title2}>
            <span>AR Experiential Network</span>
            <p
              className={style.toggleText}
              style={{
                transform: `translateY(${
                  phase === 5 ? 0 : phase > 5 ? -100 : 100
                }%)`,
              }}
            >
              AR Experiential Network
            </p>
          </div>
          <div className={style.title3}>
            <span>with value at $4mil</span>
            <p
              className={style.toggleText}
              style={{
                transform: `translateY(${
                  phase === 5 ? 0 : phase > 5 ? -100 : 100
                }%)`,
                right: "0%",
              }}
            >
              with value at $4mil
            </p>
          </div>
        </div>
        <div className={style.sixth}>
          <div className={style.title1}>
            <span>Developing ERP Solution for</span>
            <p
              className={style.toggleText}
              style={{
                transform: `translateY(${
                  phase === 6 ? 0 : phase > 6 ? -100 : 100
                }%)`,
                left: "0%",
              }}
            >
              Developing ERP Solution for
            </p>
          </div>
          <div className={style.title2}>
            <span>World's Largest Retailer</span>
            <p
              className={style.toggleText}
              style={{
                transform: `translateY(${
                  phase === 6 ? 0 : phase > 6 ? -100 : 100
                }%)`,
              }}
            >
              World's Largest Retailer
            </p>
          </div>
          <div className={style.title3}>
            <span>in furniture industry</span>
            <p
              className={style.toggleText}
              style={{
                transform: `translateY(${
                  phase === 6 ? 0 : phase > 6 ? -100 : 100
                }%)`,
                right: "0%",
              }}
            >
              in furniture industry
            </p>
          </div>
        </div>
        <div className={style.seventh}>
          <div className={style.title1}>
            <span>Biggest Classifieds app in</span>
            <p
              className={style.toggleText}
              style={{
                transform: `translateY(${phase >= 7 ? 0 : 100}%)`,
                left: "0%",
              }}
            >
              Biggest Classifieds app in
            </p>
          </div>
          <div className={style.title2}>
            <span>Middle East</span>
            <p
              className={style.toggleText}
              style={{
                transform: `translateY(${phase >= 7 ? 0 : 100}%)`,
              }}
            >
              Middle East
            </p>
          </div>
          <div className={style.title3}>
            <span>Countries</span>
            <p
              className={style.toggleText}
              style={{
                transform: `translateY(${phase >= 7 ? 0 : 100}%)`,
                right: "0%",
              }}
            >
              Countries
            </p>
          </div>
        </div>
      </div>
      <div className={style.leftContent}>
        <div>
          <span className={style.bigText}>JobGet</span>
          <h3
            style={{
              transform: `translateY(${phase < 2 ? 0 : -100}%)`,
            }}
          >
            JobGet
          </h3>
        </div>
        <div>
          <span>The award winnig app that is reshaping the employment</span>
          <p
            style={{
              transform: `translateY(${phase < 2 ? 0 : -100}%)`,
            }}
          >
            The award winnig app that is reshaping the employment
          </p>
        </div>
        <div>
          <span>landscape has become the de facto platform for the blue</span>
          <p
            style={{
              transform: `translateY(${phase < 2 ? 0 : -100}%)`,
            }}
          >
            landscape has become the de facto platform for the blue
          </p>
        </div>
        <div>
          <span>collar job space.</span>
          <p
            style={{
              transform: `translateY(${phase < 2 ? 0 : -100}%)`,
            }}
          >
            collar job space.
          </p>
        </div>
        <div>
          <span>The award winnig app that is reshaping the employment</span>
          <p
            style={{
              transform: `translateY(${phase < 2 ? 0 : -100}%)`,
              opacity: 0,
            }}
          >
            The award winnig app that is reshaping the employment
          </p>
        </div>
        <br />
        <br />
        <br />
      </div>
      <div className={style.leftContent}>
        <div>
          <span className={style.bigText}>VEME</span>
          <h3
            style={{
              transform: `translateY(${
                phase === 2 ? 0 : phase < 2 ? 100 : -100
              }%)`,
            }}
          >
            VEME
          </h3>
        </div>
        <div>
          <span>Veme is the future of social videos, developed</span>
          <p
            style={{
              transform: `translateY(${
                phase === 2 ? 0 : phase < 2 ? 100 : -100
              }%)`,
            }}
          >
            Veme is the future of social videos, developed
          </p>
        </div>
        <div>
          <span>with an aim to decentralize the authentic, loyal</span>
          <p
            style={{
              transform: `translateY(${
                phase === 2 ? 0 : phase < 2 ? 100 : -100
              }%)`,
            }}
          >
            with an aim to decentralize the authentic, loyal
          </p>
        </div>
        <div>
          <span>network between the media creators and influencers.</span>
          <p
            style={{
              transform: `translateY(${
                phase === 2 ? 0 : phase < 2 ? 100 : -100
              }%)`,
            }}
          >
            network between the media creators and influencers.
          </p>
        </div>
        <div>
          <span>The award winnig app that is reshaping the employment</span>
          <p
            style={{
              transform: `translateY(${
                phase === 2 ? 0 : phase < 2 ? 100 : -100
              }%)`,
              opacity: 0,
            }}
          >
            The award winnig app that is reshaping the employment
          </p>
        </div>
        <br />
        <br />
        <br />
      </div>
      <div className={style.leftContent}>
        <div>
          <span className={style.bigText}>Actidrive</span>
          <h3
            style={{
              transform: `translateY(${
                phase === 3 ? 0 : phase < 3 ? 100 : -100
              }%)`,
            }}
          >
            Actidrive
          </h3>
        </div>
        <div>
          <span>An intuitive gesture-recognition</span>
          <p
            style={{
              transform: `translateY(${
                phase === 3 ? 0 : phase < 3 ? 100 : -100
              }%)`,
            }}
          >
            An intuitive gesture-recognition
          </p>
        </div>
        <div>
          <span>application built on IoT, enabling drivers</span>
          <p
            style={{
              transform: `translateY(${
                phase === 3 ? 0 : phase < 3 ? 100 : -100
              }%)`,
            }}
          >
            application built on IoT, enabling drivers
          </p>
        </div>
        <div>
          <span>to drive distraction-free.</span>
          <p
            style={{
              transform: `translateY(${
                phase === 3 ? 0 : phase < 3 ? 100 : -100
              }%)`,
            }}
          >
            to drive distraction-free.
          </p>
        </div>
        <div>
          <span>The award winnig app that is reshaping the employment</span>
          <p
            style={{
              transform: `translateY(${
                phase === 2 ? 0 : phase < 2 ? 100 : -100
              }%)`,
              opacity: 0,
            }}
          >
            The award winnig app that is reshaping the employment
          </p>
        </div>
        <br />
        <br />
        <br />
      </div>
      <div className={style.leftContent}>
        <div>
          <span className={style.bigText}>Domino's</span>
          <h3
            style={{
              transform: `translateY(${
                phase === 4 ? 0 : phase < 4 ? 100 : -100
              }%)`,
            }}
          >
            Domino's
          </h3>
        </div>
        <div>
          <span>How we increased Dominos</span>
          <p
            style={{
              transform: `translateY(${
                phase === 4 ? 0 : phase < 4 ? 100 : -100
              }%)`,
            }}
          >
            How we increased Dominos
          </p>
        </div>
        <div>
          <span>conversion rate to 23% with a refined</span>
          <p
            style={{
              transform: `translateY(${
                phase === 4 ? 0 : phase < 4 ? 100 : -100
              }%)`,
            }}
          >
            conversion rate to 23% with a refined
          </p>
        </div>
        <div>
          <span>UX strategy.</span>
          <p
            style={{
              transform: `translateY(${
                phase === 4 ? 0 : phase < 4 ? 100 : -100
              }%)`,
            }}
          >
            UX strategy.
          </p>
        </div>
        <div>
          <span>The award winnig app that is reshaping the employment</span>
          <p
            style={{
              transform: `translateY(${
                phase === 2 ? 0 : phase < 2 ? 100 : -100
              }%)`,
              opacity: 0,
            }}
          >
            The award winnig app that is reshaping the employment
          </p>
        </div>
        <br />
        <br />
        <br />
      </div>
      <div className={style.leftContent}>
        <div>
          <span className={style.bigText}>Karavan</span>
          <h3
            style={{
              transform: `translateY(${
                phase === 5 ? 0 : phase < 5 ? 100 : -100
              }%)`,
            }}
          >
            Karavan
          </h3>
        </div>
        <div>
          <span>We are developing world's first AR</span>
          <p
            style={{
              transform: `translateY(${
                phase === 5 ? 0 : phase < 5 ? 100 : -100
              }%)`,
            }}
          >
            We are developing world's first AR
          </p>
        </div>
        <div>
          <span>Experiential network platform with a</span>
          <p
            style={{
              transform: `translateY(${
                phase === 5 ? 0 : phase < 5 ? 100 : -100
              }%)`,
            }}
          >
            Experiential network platform with a
          </p>
        </div>
        <div>
          <span>valuation at $4m</span>
          <p
            style={{
              transform: `translateY(${
                phase === 5 ? 0 : phase < 5 ? 100 : -100
              }%)`,
            }}
          >
            valuation at $4m
          </p>
        </div>
        <div>
          <span>The award winnig app that is reshaping the employment</span>
          <p
            style={{
              transform: `translateY(${
                phase === 2 ? 0 : phase < 2 ? 100 : -100
              }%)`,
              opacity: 0,
            }}
          >
            The award winnig app that is reshaping the employment
          </p>
        </div>
        <br />
        <br />
        <br />
      </div>
      <div className={style.leftContent}>
        <div>
          <span className={style.bigText}>IKEA</span>
          <h3
            style={{
              transform: `translateY(${
                phase === 6 ? 0 : phase < 6 ? 100 : -100
              }%)`,
            }}
          >
            IKEA
          </h3>
        </div>
        <div>
          <span>A one stop ERP Solution for Shoppers</span>
          <p
            style={{
              transform: `translateY(${
                phase === 6 ? 0 : phase < 6 ? 100 : -100
              }%)`,
            }}
          >
            A one stop ERP Solution for Shoppers
          </p>
        </div>
        <div>
          <span>to view all the store offers & for retailers to</span>
          <p
            style={{
              transform: `translateY(${
                phase === 6 ? 0 : phase < 6 ? 100 : -100
              }%)`,
            }}
          >
            to view all the store offers & for retailers to
          </p>
        </div>
        <div>
          <span>get all customer data at on place.</span>
          <p
            style={{
              transform: `translateY(${
                phase === 6 ? 0 : phase < 6 ? 100 : -100
              }%)`,
            }}
          >
            get all customer data at on place.
          </p>
        </div>
        <div>
          <span>The award winnig app that is reshaping the employment</span>
          <p
            style={{
              transform: `translateY(${
                phase === 2 ? 0 : phase < 2 ? 100 : -100
              }%)`,
              opacity: 0,
            }}
          >
            The award winnig app that is reshaping the employment
          </p>
        </div>
        <br />
        <br />
        <br />
      </div>
      <div className={style.leftContent}>
        <div>
          <span className={style.bigText}>MellToo</span>
          <h3
            style={{
              transform: `translateY(${phase >= 7 ? 0 : 100}%)`,
            }}
          >
            MellToo
          </h3>
        </div>
        <div>
          <span>Melltoo, the App of the Year 2016, is UAE’s</span>
          <p
            style={{
              transform: `translateY(${phase >= 7 ? 0 : 100}%)`,
            }}
          >
            Melltoo, the App of the Year 2016, is UAE’ss
          </p>
        </div>
        <div>
          <span>top classified ads platform that</span>
          <p
            style={{
              transform: `translateY(${phase >= 7 ? 0 : 100}%)`,
            }}
          >
            top classified ads platform that
          </p>
        </div>
        <div>
          <span>serves you with options for finding buyer/seller,</span>
          <p
            style={{
              transform: `translateY(${phase >= 7 ? 0 : 100}%)`,
            }}
          >
            serves you with options for finding buyer/seller,
          </p>
        </div>
        <div>
          <span>The award winnig app that is reshaping the employment</span>
          <p
            style={{
              transform: `translateY(${
                phase === 2 ? 0 : phase < 2 ? 100 : -100
              }%)`,
              opacity: 0,
            }}
          >
            The award winnig app that is reshaping the employment
          </p>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default TextContainer;
