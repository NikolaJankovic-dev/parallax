// components
import Landing from "../../../components/AlMlService/Landing/Landing";
import TrustedBy from "../../../components/AlMlService/TrustedBy/TrustedBy";
import ArtificialIntelligence from "../../../components/AlMlService/ArtificialIntelligence/ArtificialIntelligence";
import BigNumbers from "../../../components/AlMlService/BigNumbers/BigNumbers";

const AlMlService = ({ isLandscape }) => {
  return (
    <div>
      <Landing />
      <TrustedBy />
      <ArtificialIntelligence isLandscape={isLandscape} />
      <BigNumbers />
    </div>
  );
};

export default AlMlService;
