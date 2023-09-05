import {
  MainContainer,
  TextContainer,
  Grid,
  GridItem,
  Image,
} from "./stylesIndustries";
import { textIndustries } from "./textIndustries";

function Industries() {
  return (
    <MainContainer>
      <TextContainer>
        <h2>
          Industries That Our AI Development <br />
          Services Excel In
        </h2>
        <p>
          OurAI developers specialize in integrating the best-in-class
          artificial intelligence services into <br />
          your business offerings, processes, and growth strategies, regardless
          of your industry.
        </p>
      </TextContainer>
      <Grid>
        {textIndustries.map((item, index) => (
          <GridItem key={index}>
            <Image>
              <img src={item.image} alt={item.title} />
            </Image>
            <p>{item.title}</p>
          </GridItem>
        ))}
      </Grid>
    </MainContainer>
  );
}

export default Industries;
