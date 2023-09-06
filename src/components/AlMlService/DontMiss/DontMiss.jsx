import { MainContainer, TextContainer } from "./stylesDontMiss";

function DontMiss({ isLandscape }) {
  return (
    <MainContainer>
      <TextContainer>
        <h2>Don’t miss out on the transformative power of AI</h2>
        <p>
          We can help you unlock the power of artificial intelligence and
          reinvent a new {isLandscape && <br />}
          era of operational efficiency for your business
        </p>
        <img
          src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/female-employee-talking-banner.webp"
          alt=""
        />
      </TextContainer>
    </MainContainer>
  );
}

export default DontMiss;
