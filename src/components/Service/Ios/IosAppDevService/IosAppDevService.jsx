import { IoArrowForward } from "react-icons/io5";
import Bulb from "../../../elements/Bulb";
import DeploymentIcon from "../../../elements/DeploymentIcon";
import DevIcon from "../../../elements/DevIcon";
import PencilRuler from "../../../elements/PencilRuler";
import ScrolingDivItems from "../../../elements/ScrollingDivItems/ScrollingDivItems";
import TestingIcon from "../../../elements/TestingIcon";
import style from "./IosAppDevService.module.css";

const text = {
  consultation:
    "iOS applications, depending on the characteristics, are more suited for a particular type of business. Our team of iOS app developers help businesses decide whether iOS is a good fit for them and which tech stack best suits their needs.",
  design:
    "iOS applications are known for their memorable and immersive designs. We align your brand with what your users expect from the Apple ecosystem. Our team of iOS app designers specialize in creating experiences that last.",
  development:
    "Our iPhone application developers carry in expertise in creating scalable, future-forward iOS solutions. We specialize in delivering custom iOS software to both first time entrepreneurs and enterprises across the sectors, across the globe.",
  testing:
    "Our iPhone mobile development process is structured to keep security and performance at the center. We make sure your application is glitch free and hack proof by applying a mix of manual and AI-driven automated mode of testing.",
  deployment:
    "We are a custom iPhone app development company that excels in a seamless integration of applications across multiple Apple devices. We are sure that your brand is on every device your users are active on.",
};

const IosAppDevService = ({ modalHandler }) => {
  return (
    <div className={style.wrapperIosAppDev}>
      <div className={style.leftSide}>
        <h1 className={style.titleLeft}>
          iOS App <br /> Development Services
        </h1>
        <p className={style.textLeft}>
          iOS application development is known as the best choice for building
          secure, scalable digital solutions. Our iOS software developers ensure
          that your applications are engineered to make you future-forward
          businesses.
        </p>
        <div className={style.linkDiv}>
          <span onClick={modalHandler}>Discuss your goals with us</span>
          <span>
            <IoArrowForward size={16} className={style.arrowRight} />
          </span>
        </div>
      </div>
      <div className={style.rightSide}>
        <div className={style.consultation}>
          <Bulb />
          <span className={style.subtitle}>
            iOS App Development Consultation
          </span>
          <ScrolingDivItems text={text.consultation} />
        </div>
        <div className={style.design}>
          <PencilRuler />
          <span className={style.subtitle}>iOS UI/UX Design</span>
          <ScrolingDivItems text={text.design} />
        </div>
        <div className={style.development}>
          <DevIcon />
          <span className={style.subtitle}>
            Custom iOS Application Development
          </span>
          <ScrolingDivItems text={text.development} />
        </div>
        <div className={style.testing}>
          <TestingIcon />
          <span className={style.subtitle}>iOS Software Testing</span>
          <ScrolingDivItems text={text.testing} />
        </div>
        <div className={style.deployment}>
          <DeploymentIcon />
          <span className={style.subtitle}>Multi-platform Deployment</span>
          <ScrolingDivItems text={text.deployment} />
        </div>
      </div>
    </div>
  );
};

export default IosAppDevService;
