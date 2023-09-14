import { useState } from "react";
import {
  TextContainer,
  Images,
  JustText,
  imageHolder,
  imageHolderWhite,
} from "./stylePartnership";
import { textPartnership } from "./textPartnership";

function Partnership() {
  const [image, setImage] = useState(1);

  return (
    <>
      <TextContainer>
        <h2>Our Cloud Partnerships</h2>
        <p>
          The most successful cloud solutions are enabled through a network of
          expert partners. <br />
          Here are some of our strategic partners that we work with.
        </p>
      </TextContainer>
      <Images>
        {textPartnership.map((item, index) => (
          <div
            onClick={() => {
              setImage(index + 1);
            }}
            style={index + 1 === image ? imageHolder : imageHolderWhite}
            key={index}
          >
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </Images>
      <JustText>
        {textPartnership.map((item, index) => (
          <div key={index}>
            {index + 1 === image && (
              <div key={index}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            )}
          </div>
        ))}
      </JustText>
    </>
  );
}

export default Partnership;
