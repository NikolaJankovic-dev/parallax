import { useState, useLayoutEffect } from "react";
import style from "./ReactProjects.module.css";

const ReactProjects = () => {
  const [step, setStep] = useState(1);

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      if (step === 0) {
        setStep(1);
      } else if (step === 1) {
        setStep(2);
      } else if (step === 2) {
        setStep(3);
      } else if (step === 3) {
        setStep(1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [step]);

  return (
    <div className={style.wrapper}>
      <div className={style.leftSide}>
        <h1>
          React Native Projects Built to <br />
          Accelerate Business Revenue
        </h1>
      </div>
      {step === 1 && <div className={style.rightSideFirst}></div>}
      {step === 2 && <div className={style.rightSideSecond}></div>}
      {step === 3 && <div className={style.rightSideThird}></div>}
    </div>
  );
};

export default ReactProjects;
