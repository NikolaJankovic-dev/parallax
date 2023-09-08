import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 100vw;
  padding-bottom: 100px;
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
  max-width: 1700px;
  margin: 0 auto 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media (max-width: 500px) {
    gap: 10px;
  }
`;

export const FlexItem = styled.div`
  border-left: 1px solid #a7a7a7;
  padding: 0 40px;

  @media (max-width: 500px) {
    padding: 0 20px;
    border-left: none;
  }

  &:last-child {
    border-right: 1px solid #a7a7a7;

    @media (max-width: 500px) {
      border-right: none;
    }
  }
`;
