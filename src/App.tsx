import FitBannner from "./components/FitBannner";
import Footer from "./components/Footer";
import AboutUs from "./section/AboutUs";
import Booking from "./section/Booking";
import ChangeYourLife from "./section/ChangeYourLife";
import ConsultationAndBenefitsContainer from "./section/ConsultationAndBenefitsContainer";
import HeroSection from "./section/HeroSection";
import Result from "./section/Result";
import Testimonial from "./section/Testimonial";
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
        <Result />
        <Booking />
        <Testimonial />
        <FitBannner
          title="Weight loss isn't a task, it's a healthy habit!"
          buttonTitle="Get Fit Today!"
        />
        <Footer />
      </main>
    </>
  );
}

export default App;
