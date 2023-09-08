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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1700px;
  margin: 0 auto 50px;
  row-gap: 50px;
  column-gap: 30px;
`;
export const GridItem = styled.div`
  padding: 40px 40px;
  background: #f1f2fd;
  border-radius: 20px;
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 25px;

  img {
    width: 36px;
    height: 36px;
  }

  &:hover {
    h4 {
      color: #1367fb;
    }
  }

  h4 {
    font-size: 20px;
    font-weight: 600;
    transition: all 0.23s;
  }
`;

export const Paragraph = styled.div`
  font-size: 18px;
  line-height: 1.5;
  font-weight: 400;
  margin: 0 0 20px;
`;
