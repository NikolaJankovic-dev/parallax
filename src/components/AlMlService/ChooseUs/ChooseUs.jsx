import { useState } from "react";
import {
  MainContainer,
  TextContainer,
  Flex,
  ListBox,
  ImageHolder,
  TextHolder,
  itemWhite,
  itemGray,
} from "./stylesCU";
import { textCU } from "./textCU";

function ChooseUs({ isLandscape }) {
  const [numberCU, setNumberCU] = useState(1);

  return (
    <>
      <MainContainer>
        <TextContainer>
          <h2>
            Why Choose Us as Your Artificial {isLandscape && <br />}
            Intelligence App Development Company?
          </h2>
          <p>
            As a dedicated AI development services organization, we utilize our
            extensive domain expertise {isLandscape && <br />}
            to push the boundaries of what is possible for your business. OurAI
            app development services {isLandscape && <br />}
            are designed to produce tangible results and unlock the full
            potential of artificial intelligence.
          </p>
        </TextContainer>
        <Flex>
          <ListBox>
            {textCU.map((item, index) => (
              <li
                style={index + 1 === numberCU ? itemWhite : itemGray}
                onClick={() => {
                  setNumberCU(index + 1);
                }}
                key={index}
              >
                {item.title}
              </li>
            ))}
          </ListBox>
          {isLandscape && (
            <ImageHolder>
              {textCU.map((item, index) => (
                <div key={index}>
                  {index + 1 === numberCU && (
                    <img src={item.image} alt={item.title} />
                  )}
                </div>
              ))}
            </ImageHolder>
          )}
          <TextHolder>
            {textCU.map((item, index) => (
              <div key={index}>
                {index + 1 === numberCU && <p>{item.text}</p>}
              </div>
            ))}
          </TextHolder>
        </Flex>
      </MainContainer>
    </>
  );
}

export default ChooseUs;
