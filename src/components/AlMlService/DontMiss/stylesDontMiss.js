import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 100vw;
  background-color: #141414;
  padding-bottom: 100px;
`;

export const TextContainer = styled.div`
  max-width: 1700px;
  margin: 0 auto 50px;
  padding: 30px;
  color: #fff;
  text-align: center;

  @media (max-width: 1000px) {
      img {
        width: 80vw;
      }
    }

  h2 {
    font-size: 36px;
    font-weight: 600;
    line-height: 1.1;
    margin-bottom: 25px;
    margin-top: 50px;

    @media (max-width: 800px) {
      font-size: 30px;
    }
  }

  p {
    font-size: 22px;
    line-height: 1.5;
    font-weight: 400;
    margin-bottom: 45px;

    @media (max-width: 800px) {
      font-size: 19px;
    }
  }
`;