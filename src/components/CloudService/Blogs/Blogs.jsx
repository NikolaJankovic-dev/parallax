import { MainContainer, TextContainer, Flex, LitleFlex } from "./styleBlogs";
import { textBlogs } from "./textBlogs";

function Blogs() {
  return (
    <MainContainer>
      <TextContainer>
        <h2>Related Blogs</h2>
      </TextContainer>
      <Flex>
        {
          textBlogs.map((item, index) => (
            <LitleFlex key={index}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </LitleFlex>
          ))
        }
      </Flex>
    </MainContainer>
  );
}

export default Blogs;
