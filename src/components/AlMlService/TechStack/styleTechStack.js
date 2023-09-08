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
`;

export const Grid = styled.div`
  max-width: 1400px;
  padding: 10px 20px;
  gap: 35px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  @media (max-width: 950px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }

  p {
    font-size: 18px;
    line-height: 1.3;
    font-weight: 300;
    margin-top: 15px;
    text-align: center;

    /* @media (max-width: 800px) {
      font-size: 19px;
    } */
  }
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.div`
  background: #151515;
  border: 1px solid #707070;
  border-radius: 10px;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    transition: all 0.19s;
  }

  img:hover {
    transform: scale(1.1);
  }
`;
