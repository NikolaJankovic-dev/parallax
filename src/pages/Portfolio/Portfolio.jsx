import style from "./Portfolio.module.css";
import { portfolioText } from "./textPortfolio";

function Portfolio() {
  const wideContainerInline = {
    width: "100%",
    height: "900px",
    position: "relative",
  };

  const contentAllHolderInline = {
    position: "absolute",
    width: "100%",
    top: "0",
    left: "0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const contentAllHolderInlineReverse = {
    position: "absolute",
    width: "100%",
    top: "0",
    left: "0",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const telephoneHolder = {
    position: "absolute",
    width: "100%",
    top: "0",
    left: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const textInline = {
    padding: "0 320px",
  };

  const bigHeadingInline = {
    fontSize: "36px",
    color: "#000",
    fontWeight: "600",
    marginBottom: "15px",
  };

  const smallHeadingInline = {
    fontSize: "18px",
    color: "#000",
    fontWeight: "600",
    marginBottom: "15px",
  };

  const smallTextInline = {
    fontSize: "18px",
    color: "#000",
    lineHeight: "35px",
  };

  const imageInside = {
    width: '419px'
  }

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
        </div>
      </div>
      {portfolioText.map((portfolio, index) => (
        <div key={index} style={wideContainerInline} className="wideContainer">
          <div
            style={
              index % 2 === 0
                ? contentAllHolderInline
                : contentAllHolderInlineReverse
            }
            className="contentAllHolder"
          >
            <div style={textInline}>
              <h2 style={bigHeadingInline}>{portfolio.title}</h2>
              <h3 style={smallHeadingInline}>{portfolio.blackText}</h3>
              <p style={smallTextInline}>{portfolio.text}</p>
            </div>
            <div>
              <img src={portfolio.bigImage} alt="bigImage" />
            </div>
          </div>
          <div style={telephoneHolder} className="Inline">
            <div>
              <img style={imageInside} src={portfolio.smallImage} alt="smallImage" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Portfolio;
