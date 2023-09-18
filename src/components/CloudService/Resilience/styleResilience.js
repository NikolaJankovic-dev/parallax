import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 100vw;
  background-color: #000;
  color: #fff;
  padding-bottom: 100px;
`;

export const Flex = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 15px;
  display: flex;
  gap: 75px;

  @media (max-width: 750px) {
      flex-direction: column;
    }
`;

export const TextContainer = styled.div`
  flex-basis: 45%;

  h2 {
    font-size: 3.5vw;
    font-weight: 600;
    line-height: 1.1;
    margin-bottom: 20px;

    @media (max-width: 800px) {
      text-align: center;
    }

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

export const Grid = styled.div`
  flex-basis: 45%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;

  @media (max-width: 420px) {
    grid-template-columns: repeat(1, 1fr);
    }
`;

export const LitleFlex = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px 25px 35px;
  min-height: 260px;
  background-color: #1c1c1e;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  gap: 15px;
  transition: all 0.23s;

  &:hover {
    background-color: #fc7e66;

    h3,
    p {
      color: #fff;
    }

    div {
      background-image: #fc7e66;
    }
  }

  div {
    border-radius: 10px;
    background-image: linear-gradient(
      to bottom,
      #343338,
      #302e34,
      #2b2a2f,
      #27252b,
      #232127
    );
    width: 53px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.2;
    margin: 25px 0 8px;
    color: #bbbbbc;
  }

  p {
    font-size: 12px;
    line-height: 1.7;
    color: #bbbbbc;
  }
`;
