import {
  MainContainer,
  TextContainer,
  Grid,
  GridItem,
  Heading,
  Paragraph,
} from "./styleFAQ";
import { textFAQ } from "./textFAQ";
import arrowUp from "../../../assets/icons/arrow-up.png";
import arrowDown from "../../../assets/icons/arrow-down.png";
import { useState } from "react";

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <MainContainer>
      <TextContainer>
        <h2>Frequently Asked Questions</h2>
      </TextContainer>
      <Grid>
        {textFAQ.map((item, index) => (
          <GridItem key={index}>
            <Heading
              onClick={() => {
                if (open === index + 1) {
                  setOpen(0);
                } else {
                  setOpen(index + 1);
                }
              }}
            >
              <h4>{item.title}</h4>
              <img
                src={open === index + 1 ? arrowUp : arrowDown}
                alt="open/close"
              />
            </Heading>
            {open === index + 1 && (
              <div>
                {item.text.map((textItem, textIndex) => (
                  <Paragraph key={textIndex}>{textItem}</Paragraph>
                ))}
              </div>
            )}
          </GridItem>
        ))}
      </Grid>
    </MainContainer>
  );
}

export default FAQ;
