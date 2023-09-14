import { useEffect, useState } from "react";
import {
  MainContainer,
  TextContainer,
  Flex,
  TextPart,
  Headline,
  AllText,
  ImagePart,
} from "./styleWeHandle";
import { textWeHandle } from "./textWeHandle";

function WeHandle() {
  const [showText, setShowText] = useState(1);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowText((prevShowText) => {
        return prevShowText < 4 ? prevShowText + 1 : 1;
      });
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <MainContainer>
      <TextContainer>
        <h2>Cloud Deployments We Handle</h2>
      </TextContainer>
      <Flex>
        <TextPart>
          {textWeHandle.map((item, index) => (
            <AllText key={index}>
              <Headline
                onClick={() => {
                  setShowText(index + 1);
                }}
              >
                <span>
                  <img src={item.icon} alt={item.title} />
                </span>
                <h3>{item.title}</h3>
              </Headline>
              {index + 1 === showText && <p>{item.text}</p>}
            </AllText>
          ))}
        </TextPart>
        <ImagePart>
          {textWeHandle.map((item, index) => (
            <div key={index}>
              {index + 1 === showText && (
                <img src={item.image} alt={item.title} />
              )}
            </div>
          ))}
        </ImagePart>
      </Flex>
    </MainContainer>
  );
}

export default WeHandle;
