import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 100vw;
  background-color: #000;
  padding-bottom: 100px;
`;

export const TextContainer = styled.div`
  max-width: 1700px;
  margin: 0 auto;
  background: #eef0fe;
  padding: 3rem 0 3.5rem;
  border-radius: 10px;
`;

export const FlexNumbers = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem 5rem 2.5rem;
  justify-content: space-around;

  @media (max-width: 1050px) {
      flex-wrap: wrap;
      gap: 30px;
    }
`;

export const OneNumber = styled.p`
  font-size: 72px;
  font-weight: 700;
  color: #000;
  text-align: center;
  border-bottom: 1px solid black;
`;
export const TextNumb = styled.p`
  padding-top: 10px;
  font-size: 18px;
  font-weight: 400;
  color: #000;
  text-align: center;
`;

export const Button = styled.div`
  margin: 0 auto;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  border: 2px solid #000;
  padding: 14px 50px;
  border-radius: 10px;
  display: block;
  text-align: center;
  max-width: fit-content;
  transition: all 0.23s;

  &:hover {
    background:#1468fb;
    cursor: pointer;
    border: 2px solid #1468fb;
    color: white;
  }
`;
