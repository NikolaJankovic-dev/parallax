import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 100vw;
  background-color: #000;
  padding-bottom: 100px;
  color: #fff;
  border-top: 5px solid #1468fb;
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  max-width: 1740px;
  margin: 0 auto 50px;
  justify-content: center;
  padding: 100px 20px 0;
`;

export const FlexItem = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #707070;
  padding: 35px 40px;
  transition: all 0.23s;
  flex-basis: 328px;

  &:hover {
    background-color: #126bfb;
    border: 1px solid #126bfb;
  }

  img {
    width: 45px;
    height: 45px;
    filter: grayscale(80%);
    -webkit-filter: grayscale(80%);
  }

  h5 {
    font-size: 26px;
    font-weight: 900;
    padding: 15px 0 10px;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 16px;
  }

  span {
    font-size: 12px;
  }
`;
