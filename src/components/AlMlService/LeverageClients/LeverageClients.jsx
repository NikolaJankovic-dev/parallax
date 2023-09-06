import {
  MainContainer,
  TextContainer,
  ScrollBox,
  Flex,
  Text,
  Image,
  Results,
} from "./stylesLeverageClients";
import { textLeverageClients } from "./textLeverageClients";

function LeverageClients({ isLandscape }) {
  return (
    <>
      <MainContainer>
        <TextContainer>
          <h2>
            How Our Clients Leverage AI to {isLandscape && <br />} Innovate
            Instantly and Flourish Globally
          </h2>
          <p>
            Our commitment to delivering quality work that meets custom
            requirements has consistently {isLandscape && <br />} exceeded
            expectations. Here are a few noteworthy projects we have undertaken
            as an AI software {isLandscape && <br />} development company that
            speak volumes and guarantee maximum ROI.
          </p>
        </TextContainer>
        <ScrollBox>
          {textLeverageClients.map((item, index) => (
            <Flex key={index}>
              <Text>
                <div>
                  <div className="title">
                    {item.title && <h3>{item.title}</h3>}
                    {item.logo && <img src={item.logo} alt={item.title} />}
                  </div>
                  <p>{item.text}</p>
                </div>
                <Results>
                  <p>Results</p>
                  <p>{item.number}</p>
                  <p>{item.underNum}</p>
                </Results>
              </Text>
              <Image>
                <img src={item.image} alt={item.number} />
              </Image>
            </Flex>
          ))}
        </ScrollBox>
      </MainContainer>
    </>
  );
}

export default LeverageClients;
