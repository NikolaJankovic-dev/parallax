import { useState } from "react";
import {
  MainContainer,
  TextContainer,
  FlexMain,
  FlexCol,
  BlueBox,
  ListBox,
  TextBox,
  JustText,
  BlueImage,
  H3headline,
  Ptext,
  itemWhite,
  itemPurple,
} from "./stylesAI";
import { artifIntellText } from "./textAI";

function ArtificialIntelligence({ isLandscape }) {
  const [numberAi, setNumberAi] = useState(1);

  return (
    <>
      <MainContainer>
        <TextContainer>
          <h2>
            Artificial Intelligence Development <br /> Services We Offer
          </h2>
          <p>
            Our AI development services are known to unlock the potential of
            vast amounts of data for driving tangible <br />
            business results. Here are our reliably intelligent AI services that
            can convert your vision into reality.
          </p>
        </TextContainer>
        {isLandscape ? (
          <>
            <FlexMain>
              <BlueBox>
                <ListBox>
                  {artifIntellText.map((item, index) => (
                    <li
                      onClick={() => {
                        setNumberAi(index + 1);
                      }}
                      style={index + 1 === numberAi ? itemWhite : itemPurple}
                      key={index}
                    >
                      {index + 1}. {item.title}
                    </li>
                  ))}
                </ListBox>
              </BlueBox>
              <TextBox>
                <JustText>
                  {artifIntellText.map((item, index) => (
                    <div key={index}>
                      {index + 1 === numberAi && (
                        <>
                          <BlueImage>
                            <img src={item.image} alt={item.title} />
                          </BlueImage>
                          <H3headline>{item.title}</H3headline>
                          <Ptext>{item.text}</Ptext>
                        </>
                      )}
                    </div>
                  ))}
                </JustText>
              </TextBox>
            </FlexMain>
          </>
        ) : (
          <FlexCol>
            {artifIntellText.map((item, index) => (
              <div key={index}>
                <BlueImage>
                  <img src={item.image} alt={item.title} />
                </BlueImage>
                <H3headline>{item.title}</H3headline>
                <Ptext>{item.text}</Ptext>
              </div>
            ))}
          </FlexCol>
        )}
      </MainContainer>
    </>
  );
}

export default ArtificialIntelligence;
