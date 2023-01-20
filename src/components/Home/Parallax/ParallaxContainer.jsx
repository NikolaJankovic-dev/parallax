import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import ImagesContainer from "./ImagesContainer";
import TextContainer from "./TextContainer";

const ParallaxContainer = ({ parallaxFinished, setParallaxFinished }) => {
  const [bgColor, setBgColor] = useState("white");
  const [phase, setPhase] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const parallaxRef = useRef(null);
  const [initialTop, setInitialTop] = useState(0);
  const [parallaxHeight, setParallaxHeight] = useState(0);

  useEffect(() => {
    setInitialTop(parallaxRef.current.offsetTop);
    setParallaxHeight(parallaxRef.current.offsetHeight);
  }, []);

  useEffect(() => {
    console.log(initialTop);
    console.log(parallaxHeight);
  }, [initialTop, parallaxHeight]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollCheck = window.scrollY;
      if (scrollCheck > scroll) {
        setIsScrollingUp(false);
        console.log("scrolling down");
      } else {
        setIsScrollingUp(true);
        console.log("scrolling up");
      }
      setScroll(scrollCheck);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll]);

  useLayoutEffect(() => {
    if (isScrollingUp) {
      if (scroll > initialTop && scroll < initialTop + parallaxHeight) {
        setPhase(1);
      } else if (
        scroll > initialTop + parallaxHeight &&
        scroll < initialTop + parallaxHeight * 2
      ) {
        setPhase(2);
      } else if (
        scroll > initialTop + parallaxHeight * 2 &&
        scroll < initialTop + parallaxHeight * 3
      ) {
        setPhase(3);
      } else if (
        scroll > initialTop + parallaxHeight * 3 &&
        scroll < initialTop + parallaxHeight * 4
      ) {
        setPhase(4);
      } else if (
        scroll > initialTop + parallaxHeight * 4 &&
        scroll < initialTop + parallaxHeight * 5
      ) {
        setPhase(5);
      } else if (
        scroll > initialTop + parallaxHeight * 5 &&
        scroll < initialTop + parallaxHeight * 6
      ) {
        setPhase(6);
      } else if (
        scroll > initialTop + parallaxHeight * 6 &&
        scroll < initialTop + parallaxHeight * 7
      ) {
        setPhase(7);
      } else if (scroll < initialTop) {
        setPhase(0);
      } else if (scroll > initialTop + parallaxHeight * 7) {
        setPhase(8);
      }
    } else {
      if (scroll > initialTop && scroll < initialTop + parallaxHeight) {
        setPhase(1);
      } else if (
        scroll > initialTop + parallaxHeight &&
        scroll < initialTop + parallaxHeight * 2
      ) {
        setPhase(2);
      } else if (
        scroll > initialTop + parallaxHeight * 2 &&
        scroll < initialTop + parallaxHeight * 3
      ) {
        setPhase(3);
      } else if (
        scroll > initialTop + parallaxHeight * 3 &&
        scroll < initialTop + parallaxHeight * 4
      ) {
        setPhase(4);
      } else if (
        scroll > initialTop + parallaxHeight * 4 &&
        scroll < initialTop + parallaxHeight * 5
      ) {
        setPhase(5);
      } else if (
        scroll > initialTop + parallaxHeight * 5 &&
        scroll < initialTop + parallaxHeight * 6
      ) {
        setPhase(6);
      } else if (
        scroll > initialTop + parallaxHeight * 6 &&
        scroll < initialTop + parallaxHeight * 7
      ) {
        setPhase(7);
      } else if (
        scroll > initialTop + parallaxHeight * 7 &&
        scroll < initialTop + parallaxHeight * 8
      ) {
        setPhase(8);
      }
    }
  }, [scroll, isScrollingUp, initialTop, parallaxHeight]);

  useEffect(() => {
    if (phase === 8) {
      setParallaxFinished(true);
    } else {
        setParallaxFinished(false);
    }
      console.log(phase);
  }, [phase, setParallaxFinished]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: bgColor,
        transition: "background-color 0.5s",
        position: phase > 0 && phase < 8 ? "fixed" : "relative",
        top: phase < 8 ? "0" : parallaxHeight * 7 + "px",
        left: "0",
        //   zIndex: phase === 1 ? "100" : "0",
        display: "flex",
        // justifyContent: "stretch",
        alignItems: "center",
        flexDirection: "row",
        overflow: "hidden",
      }}
      ref={parallaxRef}
    >
      <TextContainer phase={phase} />
      <ImagesContainer phase={phase} />
    </div>
  );
};

export default ParallaxContainer;
