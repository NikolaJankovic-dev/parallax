import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 100vw;
  background-color: #000;
  padding-bottom: 100px;
`;

export const TextContainer = styled.div`
  max-width: 1700px;
  margin: 0 auto;
  color: #fff;
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