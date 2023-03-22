import { useLocation } from "react-router-dom";
import { useCaseTextIos, useCaseTextAndroid } from "../../text/text"
import { IoArrowForward } from "react-icons/io5";
import style from "./UseCase.module.css";

const benefits = [
  {
    id: 1,
    benefitText: "Multi-platform exposure",
  },
  {
    id: 2,
    benefitText: "Greater sources of revenue",
  },
  {
    id: 3,
    benefitText: "Easy integrations",
  },
  {
    id: 4,
    benefitText: "Greater scope of innovation",
  },
];

const UseCase = ({ modalHandler }) => {
  const location = useLocation();

  let text;

  switch (location.pathname) {
    case "/ios":
      text = useCaseTextIos;
      break;
    case "/android":
      text = useCaseTextAndroid;
      break;
  }

  return (
    <div className={style.wrapper}>
      <div className={style.leftSide}>
        <h1 className={style.useCaseTitle}>
          {text.title.title1} <br /> {text.title.title2} <br />
          {text.title.title3 && text.title.title3} <br />
          {text.title.title4 && text.title.title4}
        </h1>
        <p className={style.paragraphP1}>{text.paragraph.p1}</p>
        <div className={style.linkDiv}>
          <span onClick={modalHandler}>{text.spanText.text}</span>
          <span>
            <IoArrowForward size={16} className={style.arrowRight} />
          </span>
        </div>
      </div>
      <div className={style.rightSide}>
        <div className={style.benefits}>
          {benefits.map((benefit) => (
            <div className={style.benefitItem} key={benefit.id}>
              <p className={style.num}>{benefit.id}</p>
              <p className={style.text}>{benefit.benefitText}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCase;
