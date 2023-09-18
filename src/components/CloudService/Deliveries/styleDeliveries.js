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
  grid-template-columns: repeat(1, 1fr);
  gap: 25px;
  overflow-y: scroll;
  height: 420px;
  padding-right: 15px;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #8897fa;
    border-radius: 10px;
  }
`;

export const LitleFlex = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  min-height: 400px;
  background-color: #000;
  border-radius: 15px;
  border: 1px solid #4a4a4a;
  gap: 15px;
  transition: all 0.23s;

  div {
    background: #0363ff;
    width: 54px;
    height: 52px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.2;
    margin: 25px 0 8px;
  }

  p {
    font-size: 12px;
    line-height: 1.7;
  }
`;
