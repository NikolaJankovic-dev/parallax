import styled from "styled-components";

export const TextContainer = styled.div`
  max-width: 1700px;
  margin: 0 auto;
  padding: 80px 15px;

  h2 {
    font-size: 3.5vw;
    font-weight: 600;
    line-height: 1.1;
    margin-bottom: 20px;

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
export const Boxes = styled.div`
  padding: 0 15px;
  max-width: 1700px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 5px 100px;

  @media (max-width: 1450px) {
    gap: 5px 50px;
    }

  div {
    padding: 40px 30px;
    width: 25%;
    border: 1px solid transparent;
    transition: all 0.23s;

    @media (max-width: 1150px) {
      width: 45%;
    }

    @media (max-width: 700px) {
      width: 95%;
    }

    h4 {
      font-size: 26px;
      font-weight: 500;
      margin: 20px 0;
    }

    p {
      font-size: 18px;
      line-height: 1.7;
    }
    &:hover {
      background: #f1f2fd;
      border-radius: 15px;
    }
  }
`;
