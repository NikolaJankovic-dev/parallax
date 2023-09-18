import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 100vw;
  background-color: #000;
  padding-bottom: 100px;
  color: #fff;
`;

export const TextContainer = styled.div`
  max-width: 1700px;
  margin: 0 auto 50px;
  padding: 80px 20px;
  text-align: center;

  h2 {
    font-size: 3.5vw;
    font-weight: 600;
    line-height: 1.1;
    margin-bottom: 25px;

    @media (max-width: 800px) {
      font-size: 30px;
    }
  }

  p {
    font-size: 22px;
    line-height: 1.5;
    font-weight: 400;

    @media (max-width: 800px) {
      font-size: 19px;
    }
  }
`;

export const ScrollBox = styled.div`
  overflow-x: scroll;
  width: 90vw;
  display: flex;
  margin: 0 auto;
  gap: 45px;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 4px;
    height: 11px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #822f2f;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #8897fa;
    border-radius: 10px;
  }
`;

export const Flex = styled.div`
  padding-bottom: 30px;
  display: flex;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #c1c1c1;
  border-radius: 15px 0 0 15px;
  width: 505px;
  height: 547px;
  padding: 40px 100px 40px 80px;
  justify-content: space-around;

  @media (max-width: 850px) {
    width: 400px;
    padding: 20px 60px 20px 40px;
  }

  @media (max-width: 500px) {
    border-radius: 15px;
    width: 90vw;
    padding: 10px 20px 20px 10px;
  }

  h3 {
    color: #fff;
    margin-bottom: 30px;
    font-size: 3.5vw;
    font-weight: 600;
    line-height: 1.1;

    @media (max-width: 700px) {
      font-size: 40px;
    }
  }

  p {
    color: #fff;
    line-height: 1.4;
    font-size: 20px;
    font-weight: 300;
  }

  img {
    margin-bottom: 30px;
  }
`;

export const Image = styled.div`
  width: 50%;
  border-radius: 0 15px 15px 0;
  overflow: hidden;

  @media (max-width: 500px) {
    display: none;
  }

  img {
    @media (max-width: 850px) {
      width: 400px;
      height: 547px;
      border-radius: 0 15px 15px 0;
    }
  }
`;

export const Results = styled.div`
  color: #fff;

  p:first-child {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 15px;
  }

  p:nth-child(2) {
    font-size: 32px;
    font-weight: bolder;
  }
`;
