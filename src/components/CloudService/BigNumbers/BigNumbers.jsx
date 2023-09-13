import {
  MainContainer,
  TextContainer,
  FlexNumbers,
  OneNumber,
  TextNumb,
  Button,
} from "./stylesBN";
import { numbersText } from "./textBN";

function BigNumbers() {
  return (
    <>
      <MainContainer>
        <TextContainer>
          <FlexNumbers>
            {numbersText.map((item, index) => (
              <div key={index}>
                <OneNumber>{item.number}+</OneNumber>
                <TextNumb>{item.text}</TextNumb>
              </div>
            ))}
          </FlexNumbers>
          <Button>Transform Your Business</Button>
        </TextContainer>
      </MainContainer>
    </>
  );
}

export default BigNumbers;
