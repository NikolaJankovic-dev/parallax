import { useLocation } from "react-router-dom";
import {
  empoweringPartIos,
  empoweringPartAndroid,
  empoweringPartReact,
} from "../../text/text";
import style from "./Empowering.module.css";

const Empowering = () => {
  const location = useLocation();

  let text;
  let classForPhoto;
  let classForWrapper;

  switch (location.pathname) {
    case "/ios":
      text = empoweringPartIos;
      classForPhoto = style.empoweringPhotoIos;
      classForWrapper = style.empoweringWrapper;
      break;
    case "/android":
      text = empoweringPartAndroid;
      classForPhoto = style.empoweringPhotoAndroid;
      classForWrapper = style.empoweringWrapper;
      break;
    case "/react":
      text = empoweringPartReact;
      classForPhoto = style.empoweringPhotoReact;
      classForWrapper = style.empoweringReactWrapper;
  }

  return (
    <div className={classForWrapper}>
      <div className={style.content}>
        <h1>
          {text.title.title1}
          <br />
          {text.title.title2}
        </h1>
        <div className={style.container}>
          <div className={style.empoweringText}>
            <p>{text.paragraphs.first}</p>
            <p>{text.paragraphs.second}</p>
            {text.paragraphs.third && <p>{text.paragraphs.third}</p>}
          </div>
          <div className={classForPhoto}></div>
        </div>
      </div>
    </div>
  );
};

export default Empowering;
