import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 100vw;
  background-color: #000;
  padding-bottom: 100px;
  color: #fff;
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

export const CardContainer = styled.div`
  max-width: 1700px;
  margin: 0 auto;
  gap: 15px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1720px) {
    margin: 0 15px;
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  border: 1px solid #4a4a4a;
  border-radius: 15px;
  padding: 80px 35px 40px;
  display: flex;
  flex-direction: column;

  div {
    background-color: #0363ff;
    border-radius: 10px;
    width: 54px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0px;
  }

  span {
    font-size: 11px;
  }

  p {
    font-size: 16px;
    line-height: 1.7;
    margin-bottom: 30px;
  }

  h4 {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;