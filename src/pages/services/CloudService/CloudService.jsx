import Landing from "../../../components/AlMlService/Landing/Landing";
import TrustedBy from "../../../components/AlMlService/TrustedBy/TrustedBy";
import Begin from "../../../components/CloudService/Begin/Begin";
import BigNumbers from "../../../components/CloudService/BigNumbers/BigNumbers";
import Blogs from "../../../components/CloudService/Blogs/Blogs";
import Deliveries from "../../../components/CloudService/Deliveries/Deliveries";
import Diference from "../../../components/CloudService/Diference/Diference";
import FAQ from "../../../components/CloudService/FAQ/FAQ";
import Footer from "../../../components/CloudService/Footer/Footer";
import Partnership from "../../../components/CloudService/Partnership/Partnership";
import Prioritaze from "../../../components/CloudService/Prioritaze/Prioritaze";
import Resilience from "../../../components/CloudService/Resilience/Resilience";
import TeckStack from "../../../components/CloudService/TeckStack/TeckStack";
import TimeTested from "../../../components/CloudService/TimeTested/TimeTested";
import WeHandle from "../../../components/CloudService/WeHandle/WeHandle";

const CloudService = ({ isLandscape }) => {
  return (
    <div>
      <Landing />
      <TrustedBy />
      <TimeTested />
      <BigNumbers />
      <WeHandle />
      <Partnership />
      <Resilience />
      <Prioritaze isLandscape={isLandscape} />
      <Diference isLandscape={isLandscape} />
      <Deliveries isLandscape={isLandscape} />
      <TeckStack />
      <Begin />
      <FAQ />
      <Blogs />
      <Footer />
    </div>
  );
};

export default CloudService;
