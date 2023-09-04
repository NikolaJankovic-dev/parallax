import { Holder, Line, LineParagraph, ImageHolder } from "./stylesTrusted";

function TrustedBy() {
  return (
    <>
      <Holder>
        <Line></Line>
        <LineParagraph>
          Trusted by conglomerates, enterprises, and startups alike
        </LineParagraph>
        <Line></Line>
      </Holder>
      <ImageHolder>
        <img
          src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/kfc-logo.svg"
          alt="Appinventiv client KFC"
        />
        <img
          src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/kpmg-logo.svg"
          alt="Appinventiv client KPMG"
        />
        <img
          src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/google-logo.svg"
          alt="Appinventiv client Google"
        />
        <img
          src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/dominos-logo.svg"
          alt="Appinventiv client Dominos"
        />
        <img
          src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/bcg-logo.svg"
          alt="Appinventiv client BCG"
        />
        <img
          src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/americana-logo.svg"
          alt="Appinventiv client Americana"
        />
      </ImageHolder>
    </>
  );
}

export default TrustedBy;
