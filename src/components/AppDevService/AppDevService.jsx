import { IoArrowForward } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import Bulb from "../elements/Bulb";
import DeploymentIcon from "../elements/DeploymentIcon";
import DevIcon from "../elements/DevIcon";
import PencilRuler from "../elements/PencilRuler";
import ScrolingDivItems from "../elements/ScrollingDivItems/ScrollingDivItems";
import TestingIcon from "../elements/TestingIcon";
import ReactDevIcon from "../elements/ReactDevIcon";
import {
  textIosAppDevService,
  textAndroidAppDevService,
  textReactAppDevService,
} from "../../text/text";
import style from "./AppDevService.module.css";
import ReactMigrationIcon from "../elements/ReactMigrationIcom";
import ReactSupportIcon from "../elements/ReactSupportIcon";

const IosAppDevService = ({ modalHandler }) => {
  const location = useLocation();

  let text;

  switch (location.pathname) {
    case "/ios":
      text = textIosAppDevService;
      break;
    case "/react":
      text = textReactAppDevService;
      break;
    case "/android":
      text = textAndroidAppDevService;
      break;
    case "/alml":
      classForWrapper = style.heroWrapperAlMl;
      break;
  }

  return (
    <div className={style.wrapperIosAppDev}>
      <div className={style.leftSide}>
        <h1 className={style.titleLeft}>
          {text.title.title1}
          <br /> {text.title.title2}
        </h1>
        <p className={style.textLeft}>{text.leftText.text}</p>
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
          <span className={style.subtitle}>{text.consultation.subtitle}</span>
          <ScrolingDivItems text={text.consultation.text} />
        </div>

        {location.pathname !== "/react" && (
          <>
            <div className={style.design}>
              <PencilRuler />
              <span className={style.subtitle}>{text.design.subtitle}</span>
              <ScrolingDivItems text={text.design.text} />
            </div>
            <div className={style.development}>
              <DevIcon />
              <span className={style.subtitle}>
                {text.development.subtitle}
              </span>
              <ScrolingDivItems text={text.development.text} />
            </div>
            <div className={style.testing}>
              <TestingIcon />
              <span className={style.subtitle}>{text.testing.subtitle}</span>
              <ScrolingDivItems text={text.testing.text} />
            </div>
            <div className={style.deployment}>
              <DeploymentIcon />
              <span className={style.subtitle}>{text.deployment.subtitle}</span>
              <ScrolingDivItems text={text.deployment.text} />
            </div>
          </>
        )}
        {location.pathname === "/react" && (
          <>
            <div>
              <ReactDevIcon />
              <span className={style.subtitle}>
                {text.development.subtitle}
              </span>
              <ScrolingDivItems text={text.development.text} />
            </div>
            <div>
              <ReactMigrationIcon />
              <span className={style.subtitle}>{text.migration.subtitle}</span>
              <ScrolingDivItems text={text.migration.text} />
            </div>
            <div>
              <ReactSupportIcon />
              <span className={style.subtitle}>{text.support.subtitle}</span>
              <ScrolingDivItems text={text.support.text} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default IosAppDevService;
