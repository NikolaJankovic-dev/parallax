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
} from "./stylePrioritaze";
import { textPrioritaze } from "./textPrioritaze";

function Prioritaze({ isLandscape }) {
  const [numberCU, setNumberCU] = useState(1);

  return (
    <>
      <MainContainer>
        <TextContainer>
          <h2>
            Why Prioritize Appinventiv as Your {isLandscape && <br />}
            Cloud Service Partner?
          </h2>
          <p>
            Whether you are migrating or are already in the cloud, we help you
            digitally transform your business at {isLandscape && <br />}
            every stage. Here’s why you should consider us as your cloud
            solution service company.
          </p>
        </TextContainer>
        <Flex>
          <ListBox>
            {textPrioritaze.map((item, index) => (
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
              {textPrioritaze.map((item, index) => (
                <div key={index}>
                  {index + 1 === numberCU && (
                    <img src={item.image} alt={item.title} />
                  )}
                </div>
              ))}
            </ImageHolder>
          )}
          <TextHolder>
            {textPrioritaze.map((item, index) => (
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

export default Prioritaze;
