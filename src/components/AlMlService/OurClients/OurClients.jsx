import { useState } from "react";
import {
  MainContainer,
  TextContainer,
  SayContainer,
  WithImage,
  WithText,
  Flex,
  WithSpans,
  ClickJobs,
  JobSpanWhite,
  JobSpanGray,
} from "./stylesOurClients";
import { textOurClients } from "./textOurClients";

function OurClients() {
  const [company, setCompany] = useState(1);

  const itemSilverStyles1 = {
    backgroundColor: company === 1 ? "#115dfb" : "#707070",
    width: "60px",
    height: company === 2 ? "2px" : "4px",
    cursor: "pointer",
    transition: "background-color 0.23s",
  };
  const itemSilverStyles2 = {
    backgroundColor: company === 2 ? "#115dfb" : "#707070",
    width: "60px",
    height: company === 1 ? "2px" : "4px",
    cursor: "pointer",
    transition: "background-color 0.23s",
  };

  return (
    <MainContainer>
      <TextContainer>
        <h2>
          What Our Clients Have <br />
          to Say for Us
        </h2>
        <p>
          As a bespokeartificial intelligence software development company, we
          have helped multiple startups, <br />
          enterprises, and Fortune 500s in realizing their business visions. Our
          AI software development services <br />
          make AI accessible to everyone, everywhere.
        </p>
      </TextContainer>
      <SayContainer>
        {textOurClients.map((item, index) => (
          <div key={index}>
            {company === index + 1 && (
              <Flex>
                <WithImage>
                  <img src={item.image} alt={item.name} />
                  <h5>{item.name}</h5>
                  <h6>{item.position}</h6>
                  <p>{item.company}</p>
                </WithImage>
                <WithText>
                  <p>{item.text}</p>
                  <WithSpans>
                    <span
                      style={itemSilverStyles1}
                      onClick={() => {
                        setCompany(1);
                      }}
                    ></span>
                    <span
                      style={itemSilverStyles2}
                      onClick={() => {
                        setCompany(2);
                      }}
                    ></span>
                  </WithSpans>
                </WithText>
              </Flex>
            )}
          </div>
        ))}
      </SayContainer>
      <ClickJobs>
        <span
          style={company === 1 ? JobSpanWhite : JobSpanGray}
          onClick={() => {
            setCompany(1);
          }}
        >
          {textOurClients[0].company}
        </span>
        <span
          style={company === 2 ? JobSpanWhite : JobSpanGray}
          onClick={() => {
            setCompany(2);
          }}
        >
          {textOurClients[1].company}
        </span>
      </ClickJobs>
    </MainContainer>
  );
}

export default OurClients;
