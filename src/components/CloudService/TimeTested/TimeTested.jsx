import { useState } from "react";
import {
  MainContainer,
  TextContainer,
  BigFlex,
  BlueDiv,
  BlackDiv,
  headlineWhite,
  headlineBlue,
} from "./styleTimeTested";
import { textTimeTested } from "./textTimeTested";
import arrow from "../../../assets/images/service-drop-icon.svg";

function TimeTested() {
  const [leftText, setLeftText] = useState(1);

  return (
    <MainContainer>
      <TextContainer>
        <h2>
          Choose from Our Time-Tested <br />
          Portfolio of Cloud Services
        </h2>
        <p>
          As a leading cloud technology solution company, we support your
          business at every stage of product <br />
          development. From streamlining everyday business processes to
          integrating innovation in all products and <br />
          services, our cloud-based services tackle your biggest challenges.
        </p>
      </TextContainer>
      <BigFlex>
        <BlueDiv>
          <p>
            <span>0{leftText}</span> - 03
          </p>
          {textTimeTested.map((item, index) => (
            <h3
              style={index + 1 === leftText ? headlineWhite : headlineBlue}
              onClick={() => {
                setLeftText(index + 1);
              }}
              key={index}
            >
              {item.title}
            </h3>
          ))}
        </BlueDiv>
        <BlackDiv>
          <div>
            <img src={arrow} alt="open/close" />
          </div>
          <div>
            <h2>text naslova</h2>
            <p>ceo tekst</p>
          </div>
        </BlackDiv>
      </BigFlex>
    </MainContainer>
  );
}

export default TimeTested;
