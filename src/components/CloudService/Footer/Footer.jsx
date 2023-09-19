import { MainContainer, Flex, FlexItem, TextContainer } from "./styleFooter";
import { textFooter } from "./textFooter";

function Footer() {
  return (
    <MainContainer>
      <TextContainer>
        <img
          src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/Clutch-Badge-Blue.svg"
          alt=""
        />
        <h2>Most trusted Mobile App Consulting Company on Clutch</h2>
      </TextContainer>
      <Flex>
        {textFooter.map((item, index) => (
          <FlexItem key={index}>
            <img src={item.image} alt={item.country} />
            <h5>{item.country}</h5>
            <p>{item.text}</p>
            <span>{item.phone}</span>
          </FlexItem>
        ))}
      </Flex>
    </MainContainer>
  );
}

export default Footer;
