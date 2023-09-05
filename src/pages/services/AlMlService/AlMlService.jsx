// components
import Landing from "../../../components/AlMlService/Landing/Landing";
import TrustedBy from "../../../components/AlMlService/TrustedBy/TrustedBy";
import ArtificialIntelligence from "../../../components/AlMlService/ArtificialIntelligence/ArtificialIntelligence";
import BigNumbers from "../../../components/AlMlService/BigNumbers/BigNumbers";
import AccelerateBusiness from "../../../components/AlMlService/AccelerateBusiness/AccelerateBusiness";
import Industries from "../../../components/AlMlService/Industries/Industries";

const AlMlService = ({ isLandscape }) => {
  return (
    <div>
      <Landing />
      <TrustedBy />
      <ArtificialIntelligence isLandscape={isLandscape} />
      <BigNumbers />
      <AccelerateBusiness />
      <Industries />
    </div>
  );
};

export default AlMlService;
