import FitBannner from "./components/FitBannner";
import AboutUs from "./section/AboutUs";
import ChangeYourLife from "./section/ChangeYourLife";
import ConsultationAndBenefitsContainer from "./section/ConsultationAndBenefitsContainer";
import HeroSection from "./section/HeroSection";
import Transformation from "./section/Transformation";

function App() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutUs />
        <FitBannner
          title="Become the next weight loss champion today!"
          buttonTitle="Consult Now!"
        />
        <ConsultationAndBenefitsContainer />
        <ChangeYourLife />
        <Transformation />
        <FitBannner
          title="Let's rebuild your relationship with food!"
          buttonTitle="Get my plan!"
        />
      </main>
    </>
  );
}

export default App;
