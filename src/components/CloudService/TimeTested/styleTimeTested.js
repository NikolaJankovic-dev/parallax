import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 100vw;
  background-color: #000;
  color: #fff;
  padding-bottom: 100px;
`;

export const TextContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 15px;
  padding-top: 80px;
  padding-bottom: 80px;

  h2 {
    font-size: 3.5vw;
    font-weight: 600;
    line-height: 1.1;
    margin-bottom: 10px;

    @media (max-width: 700px) {
      font-size: 40px;
    }
  }

  p {
    line-height: 1.5;
    font-size: 22px;

    @media (max-width: 800px) {
      font-size: 19px;
    }
  }
`;

export const BigFlex = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  border: 1px solid #126bfb;
  border-radius: 25px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const BlueDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 60px;
  width: 40%;
  background-color: #126bfb;
  border-radius: 20px 0 0 20px;
  @media (max-width: 700px) {
    width: 100%;
    border-radius: 20px 20px 0 0;
  }

  @media (max-width: 850px) {
    padding: 80px 40px;
  }

  h3:not(:last-child) {
    border-bottom: 1px solid #89b5fd;
  }

  p {
    font-size: 24px;
    font-weight: 700;
    color: #89b5fd;
    margin-bottom: 45px;

    span {
      color: #fff;
    }
  }
`;

export const BlackDiv = styled.div`
  width: 60%;
  padding: 100px 100px 80px 50px;
  position: relative;

  @media (max-width: 700px) {
    width: 100%;
  }

  @media (max-width: 850px) {
    padding: 80px 80px 60px 30px;
  }
`;

export const InsideBlackDiv = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 1.9rem;
  }
`;

export const AllSmallText = styled.div`
  padding-bottom: 25px;
  margin-bottom: 25px;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(141, 141, 141, 0.5);
  }
`;

export const SmallHeadline = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  div {
    display: flex;
    align-items: center;

    span {
      font-size: 18px;
      display: inline-block;
      margin-right: 10px;
    }

    h5 {
      font-size: 14px;
    }
  }
`;

export const BigParagraph = styled.p`
  font-size: 18px;
  margin: 20px 0;
  font-weight: 400;
  line-height: 1.5;
`;

export const SmallParagraph = styled.p`
  font-size: 12px;
  margin: 10px 0 10px 40px;
  font-weight: 400;
  line-height: 1.7;
`;

export const Image = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  border-radius: 10px;
  background-image: linear-gradient(
    to bottom,
    #23c0f8,
    #1fa0f7,
    #186df6,
    #1140f5,
    #0904f4
  );
  width: 57px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// regular styles
export const headlineBlue = {
  color: "#89b5fd",
  fontSize: "24px",
  fontWeight: "700",
  padding: "35px 0",
  cursor: "pointer",
};

export const headlineWhite = {
  color: "#fff",
  fontSize: "24px",
  fontWeight: "700",
  padding: "35px 0",
  cursor: "pointer",
};

export const arrowRotate = {
  transform: "rotate(180deg)",
};
