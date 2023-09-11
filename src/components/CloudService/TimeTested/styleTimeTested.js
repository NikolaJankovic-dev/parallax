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
`;

export const BlueDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 60px;
  width: 40%;
  background-color: #126bfb;
  border-radius: 20px 0 0 20px;

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
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 100px 100px 80px 50px;
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
