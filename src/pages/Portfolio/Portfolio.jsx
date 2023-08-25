import style from "./Portfolio.module.css";
import { portfolioText } from "./textPortfolio";

function Portfolio() {
  return (
    <>
      <div className={style.heroContainer}>
        <div className={style.contentContainer}>
          <h1 className={style.mainHeading}>
            Crafted With Love. <br /> Built With Passion
          </h1>
          <p className={style.mainParagraph}>
            Appinventiv offers transformative technology and software solutions
            to startups, global brands & Fortune 500 companies. Some of our
            major clients include IKEA, Domino's, Adidas, KPMG, BCG & Pizza Hut.
          </p>
          <p>{portfolioText[1].text}</p>
          <img src={portfolioText[2].image} alt="" />
        </div>
      </div>
    </>
  );
}

export default Portfolio;
