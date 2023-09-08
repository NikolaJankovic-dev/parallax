import { MainContainer, TextContainer, Grid, Image, GridItem } from "./styleTechStack";
import { textTechStack } from "./textTechStack";

function TechStack() {
  return (
    <MainContainer>
      <TextContainer>
        <h2>
          Tech Stack We Use to Deliver <br />
          Top-Notch AI Services
        </h2>
      </TextContainer>
      <Grid>
        {textTechStack.map((item, index) => (
          <GridItem key={index}>
            <Image>
              <img src={item.image} alt={item.name} />
            </Image>
            <p>{item.name}</p>
          </GridItem>
        ))}
      </Grid>
    </MainContainer>
  );
}

export default TechStack;
