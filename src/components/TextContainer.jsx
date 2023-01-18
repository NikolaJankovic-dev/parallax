import React, { useState, useLayoutEffect } from "react";
import CircleSvg from "./CircleSvg";

const TextContainer = ({ phase }) => {
  const [bgColor, setBgColor] = useState("#095CBB");

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
      setBgColor("#1070EA");
    } else if (phase === 7) {
      setBgColor("#008D54");
    }
  }, [phase]);
  return (
    <div
      style={{
        width: "43%",
        height: "100%",
        textAlign: "center",
        verticalAlign: "middle",
        position: "relative",
        backgroundColor: bgColor,
              transition: "background-color 0.5s",
              color: "white",
        zIndex: 1,
      }}
    >
      TextContainer
      <div
        style={{
          position: "absolute",
          top: "38%",
          left: "96%",
          transform: "translate(-50%, -50%)",
          width: "396px",
          height: "396px",
          backgroundColor: bgColor,
          transition: "background-color 0.7s",
          borderRadius: "50%",
        }}
          >
              <CircleSvg phase={ phase } />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translate(-50%, 0%)",
          width: "300px",
          height: "300px",
          backgroundColor: bgColor,
          transition: "background-color 0.5s",
        //   border: "1px solid black",
          color: "black",
        }}
      >
        
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "18px",
                      overflow: "hidden",
                      color: "white",
            
          }}
        >
          <span
            style={{
              display: "inline-block",
              position: "absolute",
              top: "0%",
              left: "50%",
              transform: `translate(-50%, ${phase < 2 ? 0 : -100}%)`,
              transition: "transform 0.5s",
            }}
          >
            TEXT
          </span>
        </div>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "18px",
            overflow: "hidden",
          }}
        >
          <span
            style={{
              display: "inline-block",
              position: "absolute",
              top: "0%",
              left: "50%",
              transform: `translate(-50%, ${phase < 2 ? 0 : -100}%)`,
                          transition: "transform 0.5s",
                          color: "white",
              
            }}
          >
            TEXT 1
          </span>
          <span
            style={{
              display: "inline-block",
              position: "absolute",
              top: "0%",
              left: "50%",
              transform: `translate(-50%, ${
                phase === 2 ? 0 : phase > 2 ? -100 : 100
              }%)`,
                          transition: "transform 0.5s",
                          color: "white",
              
            }}
          >
            TEXT 2
          </span>
          <span
            style={{
              display: "inline-block",
              position: "absolute",
              top: "0%",
              left: "50%",
              transform: `translate(-50%, ${phase === 3 ? 0 : 100}%)`,
                          transition: "transform 0.5s",
                          color: "white",
              
            }}
          >
            TEXT 3
          </span>
        </div>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "18px",
            overflow: "hidden",
          }}
        >
          <span
            style={{
              display: "inline-block",
              position: "absolute",
              top: "0%",
              left: "50%",
              transform: `translate(-50%, ${phase < 2 ? 0 : -100}%)`,
              transition: "transform 0.5s",
            }}
          >
            TEXT
          </span>
        </div>
      </div>
    </div>
  );
};

export default TextContainer;
