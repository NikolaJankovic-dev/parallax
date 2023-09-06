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
  padding: 30px;

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
  margin-top: 50px;
  display: flex;
  gap: 30px;
  max-width: 1700px;
  margin: 0 auto;
  padding: 30px;
  justify-content: space-around;

  @media (max-width: 1600px) {
    gap: 10px;
  }
  @media (max-width: 745px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ListBox = styled.ul`
  margin: 0;
  list-style-type: disc;
  padding-left: 30px;
  width: 28%;

  @media (max-width: 1320px) {
    width: 22%;
  }

  @media (max-width: 745px) {
    width: 87%;
  }
`;

export const ImageHolder = styled.ul`
  width: 28%;
  @media (max-width: 1320px) {
    width: 22%;
    img {
      max-width: 250px;
    }
  }
`;

export const TextHolder = styled.ul`
  width: 28%;
  font-size: 20px;
  line-height: 1.6;
  font-weight: 300;
  @media (max-width: 1320px) {
    width: 22%;
  }
  @media (max-width: 745px) {
    width: 87%;
  }
`;

// regular styles
export const itemWhite = {
  color: "#fff",
  fontSize: "28px",
  fontWeight: "600",
  cursor: "pointer",
  marginBottom: "60px",
};

export const itemGray = {
  color: "#868892",
  fontSize: "28px",
  fontWeight: "600",
  cursor: "pointer",
  marginBottom: "60px",
};
