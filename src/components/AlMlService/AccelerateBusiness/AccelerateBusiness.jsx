import { TextContainer, Boxes } from "./stylesAB";
import { textAB } from "./textAB";

function AccelerateBusiness() {
  return (
    <>
      <TextContainer>
        <h2>
          Accelerate Business Growth with <br /> Our Expansive AI Know-How
        </h2>
        <p>
          Our AI services have been optimizing business operations for the past
          8+ years. As a dedicated <br /> AI development company, we have been
          helping businesses utilize the latest artificial intelligence <br />{" "}
          tools and technologies to achieve exponential growth.
        </p>
      </TextContainer>
      <Boxes>
        {textAB.map((abtext, index) => (
          <div key={index}>
            <img src={abtext.image} alt={abtext.title} />
            <h4>{abtext.title}</h4>
            <p>{abtext.text}</p>
          </div>
        ))}
      </Boxes>
    </>
  );
}

export default AccelerateBusiness;
