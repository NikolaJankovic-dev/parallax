import React, { useState, useEffect } from "react";

const CircleSvg = ({ phase, scrollToElement }) => {
  const [strokeDasharray, setStrokeDasharray] = useState(0);

  const blue = "rgba(0,146,255, 1)";
  const white = "rgba(255,255,255, 1)";
  const transperentWhite = "rgba(255,255,255, 0.4)";

  useEffect(() => {
    if (phase < 2) {
      setStrokeDasharray(0);
      console.log("phase 0");
    } else if (phase === 2) {
      setStrokeDasharray(150);
      console.log("phase 2");
    } else if (phase === 3) {
      setStrokeDasharray(290);
    } else if (phase === 4) {
      setStrokeDasharray(410);
    } else if (phase === 5) {
      setStrokeDasharray(530);
    } else if (phase === 6) {
      setStrokeDasharray(680);
    } else if (phase === 7) {
      setStrokeDasharray(805);
    } else if (phase === 8) {
      setStrokeDasharray(910);
    }
  }, [phase]);

  return (
    <div>
      <svg
        version="1.1"
        id="transring"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 414 414"
        style={{
          enableBackground: "new 0 0 414 414",
        }}
        xmlSpace="preserve"
      >
        <path
          id="Transparent_Ring"
          className="transrg"
          style={{
            opacity: 0.4,
            fill: "none",
            stroke: "#FFFFFF",
            strokeWidth: 2,
            strokeMiterlimit: 10,
            enableBackground: "new",
          }}
          d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173
c-47.8,0-91-19.4-122.3-50.7"
        ></path>
        <path
          id="Opaque_Ring"
          className="transrgwht"
          strokeDasharray="0,1000"
          style={{
            fill: "none",
            stroke: "rgb(255, 255, 255)",
            strokeWidth: 2,
            strokeMiterlimit: 1,
            strokeDasharray: `${strokeDasharray}, 1000`,
            transition: "all 0.5s",
          }}
          d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173
c-47.8,0-91-19.4-122.3-50.7"
        ></path>

        <g
          id="Dots"
          className="dots-nav"
          style={{
            transform: `translate(-121px, 49px)`,
            cursor: "pointer",
          }}
          onPointerDown={() => {
            scrollToElement(1);
          }}
        >
          <g>
            <path
              className="dotsst dotsfill"
              style={{
                fill: "rgb(0, 146, 255)",
                opacity: 1,
                transition: "all 0.5s",
              }}
              d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S210.1,29,206.8,29z M206.8"
            ></path>
          </g>
          <g>
            <path
              className="dotsstro"
              style={{
                opacity: 1,
                fill: "none",
                stroke: "rgb(255, 255, 255)",
                strokeWidth: 2,
                strokeMiterlimit: 10,
                transition: "all 0.5s",
              }}
              d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S210.1,29,206.8,29z M206.8"
            ></path>
          </g>
        </g>
        <g
          id="Dots1"
          className="dots-nav"
          style={{
            transform: `translate(15px, -0.5px)`,
            cursor: "pointer",
          }}
          onPointerDown={() => {
            scrollToElement(2);
          }}
        >
          <g>
            <path
              className="dotsst dotsfill1"
              style={{
                fill: phase < 2 ? transperentWhite : blue,
                opacity: 2,
                transition: "all 0.5s",
              }}
              d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S210.1,29,206.8,29z M206.8"
            ></path>
          </g>
          <g>
            <path
              className="dotsstro1"
              style={{
                opacity: 1,
                fill: "none",
                stroke: phase < 2 ? transperentWhite : white,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                transition: "all 0.5s",
              }}
              d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S210.1,29,206.8,29z M206.8"
            ></path>
          </g>
        </g>
        <g
          id="Dots2"
          className="dots-nav"
          style={{
            transform: `translate(130px, 58px)`,
            cursor: "pointer",
          }}
          onPointerDown={() => {
            scrollToElement(3);
          }}
        >
          <g>
            <path
              className="dotsst dotsfill2"
              style={{
                fill: phase < 3 ? transperentWhite : blue,
                opacity: 1,
                transition: "all 0.5s",
              }}
              d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S210.1,29,206.8,29z M206.8"
            ></path>
          </g>
          <g>
            <path
              className="dotsstro2"
              style={{
                opacity: 1,
                fill: "none",
                stroke: phase < 3 ? transperentWhite : white,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                transition: "all 0.5s",
              }}
              d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S210.1,29,206.8,29z M206.8"
            ></path>
          </g>
        </g>
        <g
          id="Dots3"
          className="dots-nav"
          style={{
            transform: `translate(172.4px, 170px)`,
            cursor: "pointer",
          }}
          onPointerDown={() => {
            scrollToElement(4);
          }}
        >
          <g>
            <path
              className="dotsst dotsfill3"
              style={{
                fill: phase < 4 ? transperentWhite : blue,
                opacity: 1,
                transition: "all 0.5s",
              }}
              d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S210.1,29,206.8,29z M206.8"
            ></path>
          </g>
          <g>
            <path
              className="dotsstro3"
              style={{
                opacity: 1,
                fill: "none",
                stroke: phase < 4 ? transperentWhite : white,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                transition: "all 0.5s",
              }}
              d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S210.1,29,206.8,29z M206.8"
            ></path>
          </g>
        </g>
        <g
          id="Dots4"
          className="dots-nav"
          style={{
            transform: `translate(127.5px, 288.5px)`,
            cursor: "pointer",
          }}
          onPointerDown={() => {
            scrollToElement(5);
          }}
        >
          <g>
            <path
              className="dotsst dotsfill4"
              style={{
                fill: phase < 5 ? transperentWhite : blue,
                opacity: 1,
                transition: "all 0.5s",
              }}
              d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S210.1,29,206.8,29z M206.8"
            ></path>
          </g>
          <g>
            <path
              className="dotsstro4"
              style={{
                opacity: 1,
                fill: "none",
                stroke: phase < 5 ? transperentWhite : white,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                transition: "all 0.5s",
              }}
              d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S210.1,29,206.8,29z M206.8"
            ></path>
          </g>
        </g>
        <g
          id="Dots5"
          className="dots-nav"
          style={{
            transform: `translate(0.5px, 344.5px)`,
            cursor: "pointer",
          }}
          onPointerDown={() => {
            scrollToElement(6);
          }}
        >
          <g>
            <path
              className="dotsst dotsfill5"
              style={{
                fill: phase < 6 ? transperentWhite : blue,
                opacity: 1,
                transition: "all 0.5s",
              }}
              d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S210.1,29,206.8,29z M206.8"
            ></path>
          </g>
          <g>
            <path
              className="dotsstro5"
              style={{
                opacity: 1,
                fill: "none",
                stroke: phase < 6 ? transperentWhite : white,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                transition: "all 0.5s",
              }}
              d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S210.1,29,206.8,29z M206.8"
            ></path>
          </g>
        </g>
        <g
          id="Dots6"
          className="dots-nav"
          style={{
            transform: `translate(-119px, 297.45px)`,
            cursor: "pointer",
          }}
          onPointerDown={() => {
            scrollToElement(7);
          }}
        >
          <g>
            <path
              className="dotsst dotsfill6"
              style={{
                fill: phase < 7 ? transperentWhite : blue,
                opacity: 1,
                transition: "all 0.5s",
              }}
              d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S210.1,29,206.8,29z M206.8"
            ></path>
          </g>
          <g>
            <path
              className="dotsstro6"
              style={{
                opacity: 1,
                fill: "none",
                stroke: phase < 7 ? transperentWhite : white,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                transition: "all 0.5s",
              }}
              d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S210.1,29,206.8,29z M206.8"
            ></path>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default CircleSvg;
