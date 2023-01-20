import React, { useState, useLayoutEffect, useRef } from "react";

const ImagesContainer = ({ phase }) => {
  const [bgColor, setBgColor] = useState("#D2D2D5");
  const contRef = useRef(null);

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
        transition: "background-color 0.5s",
      }}
      ref={contRef}
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
          right: 0,
          transition: "all 2s",
          transform: `translate(0, ${phase  <= 1 && isVisible(contRef) ? 7 : 200}%)`,
        }}
      />
      <img
        src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/veme-app-ui-design.png"
        style={{
          position: "absolute",
          top: "0%",
          left: "65%",
          transform: `translate(-50%, ${phase === 2 ? 0 : -250}%)`,
          opacity: phase === 2 ? 1 : 0,
          transition: "all 2s",
          width: "38%",
          //   height: "20%",
          //   backgroundColor: "red",
        }}
      />

      <img
        src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/veme-blockchain-app-developed-by-appinventiv.png"
        style={{
          position: "absolute",
          bottom: "0%",
          left: "25%",
          transform: `translate(-50%, ${phase === 2 ? 0 : 200}%)`,
          opacity: phase === 2 ? 1 : 0,
          transition: "all 2s",
          width: "38%",
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
          left: "78%",
          transform: `translate(-50%, ${phase === 3 ? -11 : -250}%)`,
          opacity: phase === 3 ? 1 : 0,
          transition: "all 2s",
          width: "33%",
          //   height: "20%",
          //   backgroundColor: "red",
        }}
      />
      <img
        src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/getting-started-actidrive.webp"
        style={{
          position: "absolute",
          bottom: "0%",
          left: "31%",
          transform: `translate(-50%, ${phase === 3 ? 8 : 200}%)`,
          opacity: phase === 3 ? 1 : 0,
          transition: "all 2s",
          width: "33%",
          //   width: "100%",
          //   height: "20%",
          //   backgroundColor: "red",
        }}
      />
      <img
        src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/pizza_box.png"
        style={{
          position: "absolute",
          top: "1%",
          left: "0%",
          transform: `translate(${phase === 4 ? 0 : -150}%, 0%)`,
          opacity: phase === 4 ? 1 : 0,
          transition: "all 2s",
          width: "36%",
        }}
      />
      <img
        src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/ux-strategy-for-mobile-app-devlopment.png"
        style={{
          position: "absolute",
          top: "0%",
          left: "55%",
          transform: `translate(-50%, ${phase === 4 ? 4 : -200}%)`,
          opacity: phase === 4 ? 1 : 0,
          transition: "all 2s",
          width: "32%",
          zIndex: 1,
        }}
      />
      <img
        src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/dominos-bread.png"
        style={{
          position: "absolute",
          top: "0%",
          left: "88%",
          transform: `translate(-50%, ${phase === 4 ? -20 : -100}%)`,
          //   opacity: phase === 4 ? 1 : 0,
          transition: "all 2s",
          width: "15%",
        }}
      />
      <img
        src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/domi-img1.png"
        style={{
          position: "absolute",
          bottom: "0%",
          left: "25%",
          transform: `translate(-50%, ${phase === 4 ? 0 : 200}%)`,
          //   opacity: phase === 4 ? 1 : 0,
          transition: "all 2s",
          width: "32%",
        }}
      />
      <img
        src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/on-demand-app-development-company.png"
        style={{
          position: "absolute",
          bottom: "0%",
          left: "55%",
          transform: `translate(-50%, ${phase === 4 ? 0 : 200}%)`,
          //   opacity: phase === 4 ? 1 : 0,
          transition: "all 2s",
          width: "32%",
        }}
      />
      <img
        src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/dominos-bread1.png"
        style={{
          position: "absolute",
          bottom: "0%",
          left: "85%",
          transform: `translate(${phase === 4 ? -50 : 150}%, -16%)`,
          //   opacity: phase === 4 ? 1 : 0,
          transition: "all 2s",
          width: "34%",
        }}
      />
      <img
        src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/dominos-masala.png"
        style={{
          position: "absolute",
          top: "52%",
          left: "88%",
          transform: `translate(${phase === 4 ? -100 : 150}%, -50%)`,
          //   opacity: phase === 4 ? 1 : 0,
          transition: "all 1500ms",
          width: "14%",
        }}
      />
      <img
        src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/karavan-social-networking-app-screen.png"
        style={{
          position: "absolute",
          top: "1%",
          left: "34%",
          transform: `translate(-50%, ${phase === 5 ? -24 : -200}%)`,
          //   opacity: phase === 4 ? 1 : 0,
          transition: "all 2s",
          width: "26%",
          zIndex: 1,
        }}
      />
      <img
        src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/social-networking-app-case-study.png"
        style={{
          position: "absolute",
          top: "0%",
          left: "60%",
          transform: `translate(-50%, ${phase === 5 ? 13 : -250}%)`,
          //   opacity: phase === 4 ? 1 : 0,
          transition: "all 2s",
          width: "26%",
          zIndex: 1,
        }}
      />
      <img
        src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/developers-for-social-media-app.png"
        style={{
          position: "absolute",
          top: "5%",
          left: "85%",
          transform: `translate(${phase === 5 ? -50 : 150}%, 50%)`,
          //   opacity: phase === 4 ? 1 : 0,
          transition: "all 2s",
          width: "26%",
        }}
      />
      <img
        src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/karavan_2.png"
        style={{
          position: "absolute",
          bottom: "0%",
          left: "34%",
          transform: `translate(-50%, ${phase === 5 ? -6 : 250}%)`,
          //   opacity: phase === 4 ? 1 : 0,
          transition: "all 2s",
          width: "26%",
        }}
      />
      <img
        src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/karavan-social-networking-app-screen-2.png"
        style={{
          position: "absolute",
          bottom: "0%",
          left: "60%",
          transform: `translate(-50%, ${phase === 5 ? 30 : 250}%)`,
          //   opacity: phase === 4 ? 1 : 0,
          transition: "all 2s",
          width: "26%",
        }}
      />
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          opacity: phase === 6 ? 1 : 0,
          transition: "all 1300ms",

          backgroundImage: `url("https://appinventiv.com/wp-content/themes/twentynineteen-child/images/ikea-pbg.webp")`,
          //   backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      ></div>
      <img
        src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/erp-app-development-service.png"
        style={{
          position: "absolute",
          bottom: "50%",
          left: "50%",
          transform: `translate(-50%, ${phase === 6 ? 50 : 250}%)`,
          //   opacity: phase === 4 ? 1 : 0,
          transition: "all 2s",
          width: "100%",
        }}
      />
      <img
        src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/melltoo-img1.png"
        style={{
          position: "absolute",
          bottom: "50%",
          right: "-16%",
          transform: `translate(-50%, ${phase >= 7 ? 71 : 250}%)`,
          //   opacity: phase === 4 ? 1 : 0,
          transition: "all 2s",
          width: "40%",
        }}
      />
      <img
        src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/melltoo-img2.png"
        style={{
          position: "absolute",
          bottom: "50%",
          right: "-1%",
          transform: `translate(-50%, ${phase >= 7 ? 62 : 350}%)`,
          //   opacity: phase === 4 ? 1 : 0,
          transition: "all 2s",
          width: "54%",
        }}
      />
    </div>
  );
};

export default ImagesContainer;
