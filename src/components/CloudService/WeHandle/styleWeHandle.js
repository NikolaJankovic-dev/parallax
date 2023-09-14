import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 100vw;
  background-color: #000;
  color: #fff;
  padding-bottom: 100px;
`;

export const TextContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 15px;
  padding-top: 80px;
  padding-bottom: 80px;

  h2 {
    font-size: 3.5vw;
    font-weight: 600;
    line-height: 1.1;
    margin-bottom: 10px;

    @media (max-width: 800px) {
      text-align: center;
    }

    @media (max-width: 700px) {
      font-size: 40px;
    }
  }
`;

export const Flex = styled.div`
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const TextPart = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const AllText = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  @media (max-width: 1300px) {
    margin-left: 25px;
  }

  &:not(:last-child) {
    border-bottom: 2px solid #7c7c7a;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
    line-height: 1.7;

    @media (max-width: 1300px) {
      font-size: 12px;
    }
  }
`;

export const Headline = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 35px;

  span {
    display: flex;
    background-image: linear-gradient(
      to bottom,
      #25232b,
      #211f28,
      #1e1c24,
      #1a1821,
      #17151e
    );
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  }

  h3 {
    font-size: 1.75rem;
    margin-left: 25px;

    @media (max-width: 1300px) {
      font-size: 1.25rem;
    }
  }
`;

export const ImagePart = styled.div`
  width: 45%;
  display: flex;

  @media (max-width: 800px) {
    width: 80%;
  }

  @media (max-width: 1300px) {
    img {
      width: 30vw;
    }
  }

  @media (max-width: 800px) {
    img {
      width: 80vw;
    }
  }
`;
