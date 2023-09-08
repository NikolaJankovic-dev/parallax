// components
import Landing from "../../../components/AlMlService/Landing/Landing";
import TrustedBy from "../../../components/AlMlService/TrustedBy/TrustedBy";
import ArtificialIntelligence from "../../../components/AlMlService/ArtificialIntelligence/ArtificialIntelligence";
import BigNumbers from "../../../components/AlMlService/BigNumbers/BigNumbers";
import AccelerateBusiness from "../../../components/AlMlService/AccelerateBusiness/AccelerateBusiness";
import Industries from "../../../components/AlMlService/Industries/Industries";
import ChooseUs from "../../../components/AlMlService/ChooseUs/ChooseUs";
import DontMiss from "../../../components/AlMlService/DontMiss/DontMiss";
import LeverageClients from "../../../components/AlMlService/LeverageClients/LeverageClients";
import OurClients from "../../../components/AlMlService/OurClients/OurClients";
import CustomApproach from "../../../components/AlMlService/CustomApproach/CustomApproach";
import TechStack from "../../../components/AlMlService/TechStack/TechStack";
import Awards from "../../../components/AlMlService/Awards/Awards";
import FAQ from "../../../components/AlMlService/FAQ/FAQ";

const AlMlService = ({ isLandscape }) => {
  return (
    <div>
      <Landing />
      <TrustedBy />
      <ArtificialIntelligence isLandscape={isLandscape} />
      <BigNumbers />
      <AccelerateBusiness />
      <Industries />
      <ChooseUs isLandscape={isLandscape} />
      <DontMiss isLandscape={isLandscape} />
      <LeverageClients isLandscape={isLandscape} />
      <OurClients />
      <CustomApproach />
      <TechStack />
      <Awards />
      <FAQ />
    </div>
  );
};

export default AlMlService;
