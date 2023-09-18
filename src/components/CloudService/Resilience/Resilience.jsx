import {
  MainContainer,
  Flex,
  TextContainer,
  Grid,
  LitleFlex,
} from "./styleResilience";
import { textResilience } from "./textResilience";

function Resilience() {
  return (
    <MainContainer>
      <Flex>
        <TextContainer>
          <h2>Enabling Cloud-First Resilience</h2>
          <p>
            While cloud offers new opportunities to transform operations,
            security risks still remain the greatest barrier to its adoption.
            According to an (ISC)2 report, almost 93% organizations are
            moderately or extremely concerned about cloud security. The
            companies already using cloud solutions increased their cloud
            security budgets by 98% in 2022, as per the Cloud Data Security
            Survey Report.
          </p>
          <br />
          <p>
            As a cloud consulting company and a cloud security managed service
            provider, while we deeply understand your security concerns and the
            necessity of making your cloud journey secure, here’s what we
            actually do to make it all possible:
          </p>
        </TextContainer>
        <Grid>
          {textResilience.map((item, index) => (
            <LitleFlex key={index}>
              <div>
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </LitleFlex>
          ))}
        </Grid>
      </Flex>
    </MainContainer>
  );
}

export default Resilience;
