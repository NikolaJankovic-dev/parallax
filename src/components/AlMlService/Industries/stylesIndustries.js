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
  text-align: center;
  padding-top: 45px;

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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  max-width: 1700px;
  margin: 0 auto;
  padding-top: 45px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const GridItem = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  padding: 40px 50px;
  min-height: 215px;
  border-right: 1px solid #3c3c3c;
  border-bottom: 1px solid #3c3c3c;
  text-align: center;

  &:nth-child(5n) {
    border-right: none;
  }
  &:nth-child(11) {
    border-bottom: none;
  }
  &:nth-child(12) {
    border-bottom: none;
  }
  &:nth-child(13) {
    border-bottom: none;
  }
  &:nth-child(14) {
    border-bottom: none;
  }
  &:nth-child(15) {
    border-bottom: none;
  }

  p {
    font-size: 18px;
    font-weight: 300;
    transition: all 0.23s;
  }

  img {
    transition: all 0.23s;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
    p {
      color: #1468fb;
      cursor: pointer;
    }
  }

  @media (max-width: 1000px) {
    padding: 20px 30px;
  }

  @media (max-width: 800px) {
    border-bottom: 1px solid #3c3c3c;
    border-right: 1px solid #3c3c3c;

    &:nth-child(5n) {
      border-right: 1px solid #3c3c3c;
    }

    &:nth-child(2n) {
      border-right: none;
    }

    &:nth-child(11) {
      border-bottom: 1px solid #3c3c3c;;
    }
    &:nth-child(12) {
      border-bottom: 1px solid #3c3c3c;;
    }
    &:nth-child(13) {
      border-bottom: 1px solid #3c3c3c;;
    }
    &:nth-child(14) {
      border-bottom: 1px solid #3c3c3c;;
    }
  }
`;

export const Image = styled.div`
  border-radius: 10px;
  background-image: linear-gradient(
    to bottom,
    #343338,
    #302e34,
    #2b2a2f,
    #27252b,
    #232127
  );
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
