import { IoArrowForward } from "react-icons/io5";
import style from "./Benefits.module.css";

const Benefits = ({ modalHandler }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.circles}></div>
      <div className={style.container}>
        <h1>React Native Benefits Go Beyond Cost-Saving</h1>
        <p>
          Our React mobile development services are engineered to use React
          Native for more than simply meeting the budget plans. We ensure that
          our mobile app development with react native gives you quality, proper
          communication, transparency and human relations, all in a
          cost-effective manner.
        </p>
      </div>
      <div className={style.dots}></div>
      <div className={style.benefitsContainer}>
        <div className={style.benefits}>
          <span className={style.benefitsText}>
            <span>01</span>Blazing Fast Performance
            <br /> and Speed
          </span>
        </div>
        <div className={`${style.benefits} ${style.second}`}>
          <span className={style.benefitsText}>
            <span>02</span>Reusable Code
          </span>
        </div>
        <div className={`${style.benefits} ${style.third}`}>
          <span className={style.benefitsText}>
            <span>03</span>Rapid Multi-platform
            <br /> Development
          </span>
        </div>
        <div className={style.benefits}>
          <span className={style.benefitsText}>
            <span>04</span>Live Reload
          </span>
        </div>
        <div className={`${style.benefits} ${style.second}`}>
          <span className={style.benefitsText}>
            <span>05</span>Open Source
          </span>
        </div>
        <div className={`${style.benefits} ${style.third}`}>
          <span className={style.benefitsText}>
            <span>06</span>Great Developer Tools
          </span>
        </div>
      </div>
      <div className={style.linkDiv}>
        <span onClick={modalHandler}>
          Overcome complexity with React Native
        </span>
        <span>
          <IoArrowForward size={16} className={style.arrowRight} />
        </span>
      </div>
    </div>
  );
};

export default Benefits;
