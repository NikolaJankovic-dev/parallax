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
  return (
    <div className={style.wrapper}>
      <div className={style.leftSide}>
        <h1 className={style.useCaseTitle}>
          Use Cases That Make <br /> iOS Development The First <br /> Choice
          <br /> of SMEs and Enterprises
        </h1>
        <p>
          Our custom iOS app development services guarantee that you take
          complete advantage of the Apple ecosystem’s offerings.
        </p>
        <div className={style.linkDiv}>
          <span onClick={modalHandler}>
            Explore Problem Solving skills of iOS
          </span>
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
