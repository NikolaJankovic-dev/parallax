import { useState } from "react";
import { MainContainer, TextContainer } from "./styleCustomApproach";
import { textCustomApproach } from "./textCustomApproach";

function CustomApproach() {
  return (
    <MainContainer>
      <TextContainer>
        <h2>
          Our Custom Approach <br />
          to AI Development Services
        </h2>
        <p>
          As an artificial intelligence software development company, we offer
          comprehensive services, <br />
          including data preparation for AI algorithms and system rollout for a
          large number of users. We <br />
          ensure ourAI services follow an agile development approach, capable of
          offering a definitive <br />
          value to your business.
        </p>
      </TextContainer>
    </MainContainer>
  );
}

export default CustomApproach;
