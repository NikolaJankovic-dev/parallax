import { useNavigate, useLocation } from "react-router-dom";
import ArrowIcon from "../elements/Arrow/ArrowIcon";
import ArrowWithCircle from "../elements/Arrow/ArrowWithCircle";
import Button from "../elements/Button/Button";
import style from "./Hero.module.css";

const Hero = ({
  modalHandler,
  imgSrc,
  breadCrumb,
  title1,
  title2,
  heroText,
  buttonText,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  let classForWrapper;
  let classForImage;

  switch (location.pathname) {
    case "/ios":
      classForWrapper = style.heroWrapperIos;
      classForImage = style.heroImageIos;
      break;
    case "/react":
      classForWrapper = style.heroWrapperReact;
      break;
    case "/android":
      classForWrapper = style.heroWrapperAndroid;
      classForImage = style.heroImageAndroid;
      break;
    case "/alml":
      classForWrapper = style.heroWrapperAlMl;
      break;
  }

  console.log(classForImage);

  return (
    <div className={classForWrapper}>
      <div className={style.hero}>
        <div className={style.title}>
          <div className={style.breadCrumbWrapper}>
            <span className={style.arrow}>
              <ArrowIcon />
            </span>
            <span
              onClick={() => {
                navigate("/");
              }}
              style={{ cursor: "pointer" }}
            >
              Home
            </span>
            <span className={style.slash}>/</span>
            <span className={style.active}>{breadCrumb}</span>
          </div>
          <div className={style.iosAppText}>
            <h2 className={style.mainTitle}>
              {title1} <br /> {title2}
            </h2>
            <p className={style.mainText}>{heroText}</p>
            <Button
              backGround="white"
              textColor="#0092FF"
              paddingX="45px"
              paddingY="17px"
              handler={modalHandler}
            >
              {buttonText}
              <ArrowWithCircle />
            </Button>
          </div>
        </div>
        <div>
          {location.pathname !== "/react" ? (
            <img
              className={classForImage}
              src={imgSrc}
              alt="ios app development"
              loading="lazy"
            />
          ) : (
            <video width="400" height="500" autoPlay muted loop>
              <source
                src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/video/react-native-anim.mp4"
                type="video/mp4"
              />
            </video>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
