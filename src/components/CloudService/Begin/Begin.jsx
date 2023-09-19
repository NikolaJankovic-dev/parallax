import {
  MainContainer,
  TextContainer,
  Flex,
  LitleFlex,
  BlueDiv,
  BlueText,
  OrangeDiv,
  OrangeText,
  YellowDiv,
  YellowText,
} from "./styleBegin";

function Begin() {
  return (
    <MainContainer>
      <TextContainer>
        <h2>Begin Your Cloud Journey Today</h2>
        <p>
          Today, more than ever, companies need to operate at an unprecedented
          pace to beat their competition. This means <br />
          innovating faster, enhancing customer experiences, and creating new
          revenue sources.
        </p>
        <br />
        <p>
          Do you want your business to be an AI business? Do you wish to create
          supply chain transparency with <br />
          blockchain? Do you want to use IoT to become more customer centric? It
          all starts with the power of the cloud.
        </p>
      </TextContainer>
      <Flex>
        <LitleFlex>
          <BlueDiv>
            <span></span>
          </BlueDiv>
          <BlueText>
            <span>56</span>
            <span> %</span>
          </BlueText>
          <p>
            of enterprises see cloud as a strategic platform for growth and
            innovation
          </p>
        </LitleFlex>
        <LitleFlex>
          <OrangeDiv>
            <span></span>
          </OrangeDiv>
          <OrangeText>
            <span>74</span>
            <span> %</span>
          </OrangeText>
          <p>of business leaders are engaged in cloud strategy</p>
        </LitleFlex>
        <LitleFlex>
          <YellowDiv>
            <span></span>
          </YellowDiv>
          <YellowText>
            <span>32</span>
            <span> %</span>
          </YellowText>
          <p>
            of enterprises plan to innovate their products & services through
            cloud over the next three years
          </p>
        </LitleFlex>
      </Flex>
    </MainContainer>
  );
}

export default Begin;
