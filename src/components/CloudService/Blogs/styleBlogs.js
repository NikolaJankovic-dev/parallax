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
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto 50px;
  gap: 23px;
  justify-content: center;
  align-items: center;
`;

export const LitleFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 353px;

  img {
    width: 353px;
    height: 340px;
    object-fit: cover;
    margin-bottom: 35px;
  }
`;
