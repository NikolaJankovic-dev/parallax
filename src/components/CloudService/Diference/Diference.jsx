import {
  MainContainer,
  TextContainer,
  ScrollBox,
  Flex,
  Text,
  Image,
  Results,
} from "./styleDiference";
import { textDiference } from "./textDiference";

function Diference({ isLandscape }) {
  return (
    <>
      <MainContainer>
        <TextContainer>
          <h2>
            The Appinventiv Difference - {isLandscape && <br />} Client Success
            Stories
          </h2>
          <p>
            Our domain expertise and cross-industry experience help our clients
            achieve the best business {isLandscape && <br />} outcomes while
            making us one of the top-rated ​​cloud computing companies.
          </p>
        </TextContainer>
        <ScrollBox>
          {textDiference.map((item, index) => (
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

export default Diference;
