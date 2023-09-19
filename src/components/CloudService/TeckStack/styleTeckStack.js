import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 100vw;
  padding: 100px 0;
`;

export const TextContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  text-align: center;

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

export const BigFlex = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Names = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  overflow-x: scroll;
  gap: 25px;
  margin: 35px 0;
  /* align-items: center;
  justify-content: center; */
  padding: 10px 25px 27px;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #126bfb;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #8897fa;
    border-radius: 10px;
  }
`;

export const NameHolder = styled.div`
  border: 2px solid #000;
  border-radius: 5px;
  padding: 0 35px;
  /* height: 70px; */
  width: 458px;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  color: #000;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.23s;

  &:hover {
    background-color: #126bfb;
    border: 2px solid #126bfb;
    color: #fff;
  }
`;

export const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  margin: 35px 0;
  align-items: center;
  justify-content: center;
`;

export const ImageHolder = styled.div`
  display: flex;
  flex-direction: column;
  
  h5 {
    text-align: center;
    margin-top: 15px;
    font-weight: 400;
  }
`;

export const JustImage = styled.div`
  background: #e5e5e5;
  border-radius: 15px;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
