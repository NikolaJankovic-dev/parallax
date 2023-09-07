import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 100vw;
  background: rgb(71, 38, 116);
  background: linear-gradient(
    90deg,
    rgba(71, 38, 116, 1) 0%,
    rgba(0, 0, 0, 1) 13%,
    rgba(0, 0, 0, 1) 51%,
    rgba(0, 0, 0, 1) 78%,
    rgba(13, 60, 78, 1) 100%
  );
  padding-bottom: 100px;
  color: #fff;
`;

export const TextContainer = styled.div`
  max-width: 1700px;
  margin: 0 auto;
  padding: 80px 15px;
  padding-top: 80px;
  padding-bottom: 80px;
  text-align: center;

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

export const SayContainer = styled.div`
  display: flex;
  max-width: 1060px;
  margin: 0 auto;
  color: #fff;
  border: 1px solid #5f5f6a;
  border-radius: 15px;
  padding: 60px 60px 30px;

  @media (max-width: 570px) {
    margin: 0 15px;
    padding: 30px 20px 30px;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 570px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const WithImage = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;

  @media (max-width: 570px) {
    margin-bottom: 35px;
    width: 80%;
    align-items: center;
  }

  h5 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  h6,
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  }

  img {
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
  }
`;

export const WithText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 65%;

  @media (max-width: 570px) {
    width: 80%;
  }

  p {
    font-size: 20px;
    line-height: 1.8;
    font-weight: 300;
  }
`;

export const WithSpans = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  gap: 30px;
`;

export const ClickJobs = styled.div`
  text-align: center;
  margin-top: 60px;
  display: flex;
  gap: 40px;
  justify-content: center;

  span {
    cursor: pointer;
    font-size: 30px;
  }
`;


// regular styles
export const JobSpanWhite = {
  color: "#fff",
  fontWeight: "700",
};

export const JobSpanGray = {
  color: "#707070",
  fontWeight: "400",
};

