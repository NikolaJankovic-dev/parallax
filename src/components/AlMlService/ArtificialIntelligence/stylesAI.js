import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 100vw;
  background-color: #000;
  padding-bottom: 100px;
`;

export const TextContainer = styled.div`
  max-width: 1700px;
  margin: 0 auto;
  color: #fff;
  padding: 80px 15px;
  padding-top: 80px;
  padding-bottom: 80px;

  h2 {
    font-size: 3.5vw;
    font-weight: 600;
    line-height: 1.1;
    margin-bottom: 10px;

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

export const FlexMain = styled.div`
  display: flex;
  max-width: 1700px;
  margin: 0 auto;
  color: #fff;
  border: 1px solid #15497e;
  border-radius: 25px;
  overflow: hidden;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1700px;
  margin: 0 auto;
  color: #fff;
  gap: 65px;
  padding: 0 20px;
`;

export const BlueBox = styled.div`
  background-image: linear-gradient(
    to right bottom,
    #24c2f8,
    #0084ff,
    #005cff,
    #0b0df4
  );
  padding: 60px 60px 50px 30px;
  width: 50%;
`;

export const ListBox = styled.ul`
  overflow-y: scroll;
  height: 420px;
  padding-right: 80px;
  margin: 0;
  list-style-type: none;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #8897fa;
    border-radius: 10px;
  }
`;

export const TextBox = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

export const JustText = styled.div`
  padding: 50px 100px;
`;

export const H3headline = styled.h3`
  margin: 30px 0 20px;
  font-size: 28px;
  font-weight: 600;

  @media (max-width: 1400px) {
    font-size: 26px;
  }
`;

export const Ptext = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 1.5;

  @media (max-width: 1400px) {
    font-size: 14px;
  }
`;

export const BlueImage = styled.div`
  border-radius: 10px;
  background-image: linear-gradient(
    to bottom,
    #23c0f8,
    #1fa0f7,
    #186df6,
    #1140f5,
    #0904f4
  );
  width: 55px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// regular styles
export const itemWhite = {
  color: "#fff",
  width: "500px",
  fontSize: "22px",
  fontWeight: "700",
  padding: "30px 0",
  cursor: "pointer",
  position: "relative",
  marginLeft: "60px",
  borderBottom: "1px solid #89b5fd",
};

export const itemPurple = {
  color: "#8dc1fb",
  width: "500px",
  fontSize: "22px",
  fontWeight: "700",
  padding: "30px 0",
  cursor: "pointer",
  position: "relative",
  marginLeft: "60px",
  borderBottom: "1px solid #89b5fd",
};
