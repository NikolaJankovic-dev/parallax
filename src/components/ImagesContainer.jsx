import React, { useState, useLayoutEffect } from "react";

const ImagesContainer = ({ phase }) => {
  const [bgColor, setBgColor] = useState("#D2D2D5");
  useLayoutEffect(() => {
    if (phase === 1) {
      setBgColor("#D2D2D5");
    } else if (phase === 2) {
      setBgColor("#1F046D");
    } else if (phase === 3) {
      setBgColor("#141751");
    } else if (phase === 4) {
      setBgColor("#0D131B");
    } else if (phase === 5) {
      setBgColor("#25D5EB");
    } else if (phase === 6) {
      setBgColor("#1070EA");
    } else if (phase === 7) {
      setBgColor("#00BF72");
    }
  }, [phase]);
  return (
    <div
      style={{
        width: "57%",
        height: "100%",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        backgroundColor: bgColor,
      }}
    >
      <img
        src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/jobget-banner-case-wrapper.png"
        alt="jobget"
        style={{
          width: "100%",
          //   height: "100%",
          //   objectFit: "contain",
          position: "absolute",
          bottom: 0,
          left: 0,
          transition: "all 2s",
          transform: `translate(0, ${phase <= 1 ? 0 : 200}%)`,
        }}
      />
      <img
        src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/veme-app-ui-design.png"
        style={{
          position: "absolute",
          top: "0%",
          left: "70%",
          transform: `translate(-50%, ${phase === 2 ? 0 : -250}%)`,
          opacity: phase === 2 ? 1 : 0,
          transition: "all 2s",
          width: "35%",
          //   height: "20%",
          //   backgroundColor: "red",
        }}
      />

      <img
        src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/veme-blockchain-app-developed-by-appinventiv.png"
        style={{
          position: "absolute",
          bottom: "0%",
          left: "35%",
          transform: `translate(-50%, ${phase === 2 ? 0 : 200}%)`,
          opacity: phase === 2 ? 1 : 0,
          transition: "all 2s",
          width: "30%",
          //   width: "100%",
          //   height: "20%",
          //   backgroundColor: "red",
        }}
      />
      <img
        src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/actidrive-img2.webp"
        style={{
          position: "absolute",
          top: "0%",
          left: "70%",
          transform: `translate(-50%, ${phase === 3 ? 0 : -250}%)`,
          opacity: phase === 3 ? 1 : 0,
          transition: "all 2s",
          width: "35%",
          //   height: "20%",
          //   backgroundColor: "red",
        }}
      />
      <img
        src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/getting-started-actidrive.webp"
        style={{
          position: "absolute",
          bottom: "0%",
          left: "24%",
          transform: `translate(-50%, ${phase === 3 ? 20 : 200}%)`,
          opacity: phase === 3 ? 1 : 0,
          transition: "all 2s",
          width: "34%",
          //   width: "100%",
          //   height: "20%",
          //   backgroundColor: "red",
        }}
      />
      <img
        src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/pizza_box.png"
        style={{
          position: "absolute",
          top: "0%",
          left: "0%",
          transform: `translate(${phase === 4 ? 0 : -150}%, 0%)`,
          opacity: phase === 4 ? 1 : 0,
          transition: "all 2s",
          width: "48%",
        }}
      />
      <img
        src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/ux-strategy-for-mobile-app-devlopment.png"
        style={{
          position: "absolute",
          top: "0%",
          left: "70%",
          transform: `translate(-50%, ${phase === 4 ? 40 : -200}%)`,
          opacity: phase === 4 ? 1 : 0,
          transition: "all 2s",
          width: "32%",
        }}
      />
      <img
        src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/dominos-bread.png"
        style={{
          position: "absolute",
          top: "0%",
          left: "78%",
          transform: `translate(-50%, ${phase === 4 ? -10 : -100}%)`,
        //   opacity: phase === 4 ? 1 : 0,
          transition: "all 2s",
          width: "18%",
        }}
          />
          <img
        src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/domi-img1.png"
        style={{
          position: "absolute",
          bottom: "0%",
          left: "32%",
          transform: `translate(-50%, ${phase === 4 ? 0 : 200}%)`,
        //   opacity: phase === 4 ? 1 : 0,
          transition: "all 2s",
          width: "40%",
        }}
          />
           <img
        src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/dominos-bread1.png"
        style={{
          position: "absolute",
          bottom: "0%",
          left: "82%",
          transform: `translate(${phase === 4 ? -50 : 150}%, 20%)`,
        //   opacity: phase === 4 ? 1 : 0,
          transition: "all 2s",
          width: "40%",
        }}
      />
    </div>
  );
};

export default ImagesContainer;
