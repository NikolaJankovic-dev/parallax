import style from "./Portfolio.module.css";
import { portfolioText } from "./textPortfolio";
import styled from "styled-components";

function Portfolio() {
  const WideContainerInlineDiv = styled.div`
    width: 100%;
    height: 900px;
    position: relative;

    @media (max-width: 700px) {
      height: fit-content;
    }
  `;

  const bigImage = {
    width: "50vw",
  };

  const ContentHolder = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${({ reverse }) =>
      reverse &&
      `
    flex-direction: row-reverse;
  `}

    @media (max-width: 700px) {
      position: relative;
      flex-direction: column;
    }
  `;

  const TelephoneHolderImage = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 700px) {
      position: relative;
      display: block;
      margin-bottom: 100px;
    }
  `;

  const BoxOfText = styled.div`
    padding: 0 320px;

    @media (max-width: 1750px) {
      padding: 0 250px;
    }

    @media (max-width: 1470px) {
      padding: 0 170px;
    }

    @media (max-width: 1150px) {
      padding: 0 100px;
      width: 40vw;
    }

    @media (max-width: 900px) {
      padding: 0 50px;
      width: 35vw;
    }

    @media (max-width: 700px) {
      padding: 0 50px;
      width: 85vw;
    }

    @media (max-width: 500px) {
      padding: 0 30px;
      width: 95vw;
    }
  `;

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

  const BigImageHolder = styled.div`
    @media (max-width: 700px) {
      display: none;
    }
  `;

  const CenteredTag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const StyledImage = styled.img`
    width: 419px;

    @media (max-width: 1250px) {
      width: 290px;
    }

    @media (max-width: 800px) {
      width: 220px;
    }

    @media (max-width: 700px) {
      width: 60vw;
    }

    @media (max-width: 450px) {
      width: 80vw;
    }
  `;

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
        <WideContainerInlineDiv key={index}>
          <ContentHolder reverse={index % 2 === 1}>
            <BoxOfText>
              <h2 style={bigHeadingInline}>{portfolio.title}</h2>
              <h3 style={smallHeadingInline}>{portfolio.blackText}</h3>
              <p style={smallTextInline}>{portfolio.text}</p>
            </BoxOfText>
            <BigImageHolder>
              <img style={bigImage} src={portfolio.bigImage} alt="bigImage" />
            </BigImageHolder>
          </ContentHolder>
          <TelephoneHolderImage>
            <CenteredTag>
              <StyledImage src={portfolio.smallImage} alt="smallImage" />
            </CenteredTag>
          </TelephoneHolderImage>
        </WideContainerInlineDiv>
      ))}
    </>
  );
}

export default Portfolio;
