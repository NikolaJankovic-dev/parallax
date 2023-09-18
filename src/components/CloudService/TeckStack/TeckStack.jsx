import { useState } from "react";
import {
  MainContainer,
  TextContainer,
  BigFlex,
  Names,
  NameHolder,
  Images,
  ImageHolder,
  JustImage,
} from "./styleTeckStack";
import { textTeckStack } from "./textTeckStack";

function TeckStack() {
  const [position, setPosition] = useState(1);

  return (
    <MainContainer>
      <TextContainer>
        <h2>Cloud and DevOps Tech Stack We Use</h2>
        <p>
          Our experts are adept at all the leading technologies and tools to
          provide you the best <br /> cloud consulting services and most
          comprehensive solutions.
        </p>
      </TextContainer>
      <BigFlex>
        <Names>
          {textTeckStack.map((item, index) => (
            <NameHolder
              onClick={() => {
                setPosition(index + 1);
              }}
              key={index}
            >
              {item.title}
            </NameHolder>
          ))}
        </Names>
        {textTeckStack.map((item, index) => (
          <div key={index}>
            {position === index + 1 && (
              <Images>
                {item.icons.map((icon, indexIcon) => (
                  <ImageHolder key={indexIcon}>
                    <JustImage>
                      <img src={icon.image} alt={icon.text} />
                    </JustImage>
                    <h5>{icon.text}</h5>
                  </ImageHolder>
                ))}
              </Images>
            )}
          </div>
        ))}
      </BigFlex>
    </MainContainer>
  );
}

export default TeckStack;
