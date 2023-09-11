import { MainContainer, Flex, FlexItem } from "./styleFooter";
import { textFooter } from "./textFooter";

function Footer() {
  return (
    <MainContainer>
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
