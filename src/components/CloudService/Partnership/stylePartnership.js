import styled from "styled-components";

export const TextContainer = styled.div`
  max-width: 1700px;
  margin: 0 auto;
  padding: 80px 15px;
  text-align: center;

  h2 {
    font-size: 3.5vw;
    font-weight: 600;
    line-height: 1.1;
    margin-bottom: 20px;

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

export const Images = styled.div`
  max-width: 630px;
  margin: 0 auto;
  display: flex;

  @media (max-width: 700px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  img {
    width: 130px;
  }
`;

export const JustText = styled.div`
  max-width: 630px;
  margin: 65px auto;
  text-align: center;

  div {
    display: flex;
    flex-direction: column;

    @media (max-width: 700px) {
      padding: 0 20px;
    }

    h3 {
      font-size: 30px;
      font-weight: 600;
    }

    p {
      font-size: 16px;
      font-weight: 300;
      line-height: 1.7;
      margin: 30px 0;
    }
  }
`;

// regular styles
export const imageHolder = {
  margin: "0 20px",
  display: "flex",
  alignItems: "center",
  background: "#f1f2fd",
  borderRadius: "5px",
  cursor: "pointer",
  padding: "25px 20px",
};

export const imageHolderWhite = {
  margin: "0 20px",
  display: "flex",
  alignItems: "center",
  background: "#fff",
  borderRadius: "5px",
  cursor: "pointer",
  padding: "25px 20px",
};
