import {
  MainContainer,
  TextContainer,
  CardContainer,
  Card,
} from "./styleCustomApproach";
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
      <CardContainer>
        {textCustomApproach.map((item, index) => (
          <Card key={index}>
            <span>01 - 0{index + 1}</span>
            <div>
              <img src={item.image} alt={item.title} />
            </div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </Card>
        ))}
      </CardContainer>
    </MainContainer>
  );
}

export default CustomApproach;
