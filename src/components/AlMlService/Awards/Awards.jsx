import { MainContainer, TextContainer, Flex, FlexItem } from "./styleAwards";
import { textAwards } from "./textAwards";

function Awards() {
  return (
    <MainContainer>
      <TextContainer>
        <h2>Our Awards and Recognitions</h2>
        <p>
          As a dedicatedAI development services provider, we have partnered with
          clients <br />
          across the globe in building and scaling their digital products by
          leveraging the power <br />
          of disruptive technologies including artificial intelligence, cloud,
          data science & analytics, <br />
          AR/VR, IoT, blockchain, and metaverse.
        </p>
      </TextContainer>
      <Flex>
        {textAwards.map((item, index) => (
          <FlexItem key={index}>
            <img src={item.image} alt={index} />
          </FlexItem>
        ))}
      </Flex>
    </MainContainer>
  );
}

export default Awards;
