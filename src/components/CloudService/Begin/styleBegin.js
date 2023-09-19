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

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto 50px;
  gap: 85px;
  justify-content: center;
`;

export const LitleFlex = styled.div`
  flex-basis: 25%;
  display: flex;
  flex-direction: column;

  @media (max-width: 750px) {
    flex-basis: 35%;
  }

  @media (max-width: 450px) {
    flex-basis: 75%;
  }

  p {
    margin: 10px 0 0;
    font-size: 14px;
    line-height: 1.6;
    font-weight: 400;
  }
`;

export const BlueDiv = styled.div`
  width: 100%;
  height: 6px;
  margin-bottom: 10px;
  position: relative;
  background-color: #041e48;

  span {
    display: block;
    height: 6px;
    width: 56%;
    background: linear-gradient(to right, #1262e4, #6ca4fe 100%);
  }
`;

export const BlueText = styled.p`
  span {
    font-size: 60px;
    font-weight: 700;
    color: #1262e4;
  }
`;

export const OrangeDiv = styled.div`
  width: 100%;
  height: 6px;
  margin-bottom: 10px;
  position: relative;
  background-color: #51221c;

  span {
    display: block;
    height: 6px;
    width: 74%;
    background: linear-gradient(to right, #fc6c58, #fc9f51 100%);
  }
`;

export const OrangeText = styled.p`
  span {
    font-size: 60px;
    font-weight: 700;
    color: #fc6c58;
  }
`;

export const YellowDiv = styled.div`
  width: 100%;
  height: 6px;
  margin-bottom: 10px;
  position: relative;
  background-color: #513727;

  span {
    display: block;
    height: 6px;
    width: 32%;
    background: linear-gradient(to right, #f3d84f, #faaf75 100%);
  }
`;

export const YellowText = styled.p`
  span {
    font-size: 60px;
    font-weight: 700;
    color: #f3d84f;
  }
`;
