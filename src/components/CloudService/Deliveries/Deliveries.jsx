import {
  MainContainer,
  Flex,
  TextContainer,
  Grid,
  LitleFlex,
} from "./styleDeliveries";
import { textDeliveries } from "./textDeliveries";

function Deliveries({ isLandscape }) {
  return (
    <MainContainer>
      <Flex>
        <TextContainer>
          <h2>
            A Stringent {isLandscape && <br />}
            Process for {isLandscape && <br />} Seamless Cloud-{" "}
            {isLandscape && <br />} Based Project {isLandscape && <br />}{" "}
            Deliveries
          </h2>
          <p>
            Our approach towards cloud-based projects puts your business needs
            first, creating industry-leading solutions to get you benefitting
            from the cloud.
          </p>
        </TextContainer>
        <Grid>
          {textDeliveries.map((item, index) => (
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

export default Deliveries;
