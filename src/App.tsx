import ConsultationForm from "./components/ConsultaionForm";
import FitBanner from "./components/FitBanner";
import Footer from "./components/Footer";
import AboutUs from "./section/AboutUs";
// import Booking from "./section/Booking";
// import ChangeYourLife from "./section/ChangeYourLife";
import ConsultationAndBenefitsContainer from "./section/ConsultationAndBenefitsContainer";
import HeroSection from "./section/HeroSection";
// import Result from "./section/Result";
// import Testimonial from "./section/Testimonial";
import Transformation from "./section/Transformation";

function App() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutUs />
        <FitBanner
          className="my-8 md:mt-14  "
          title="Become the Next Ayuvive Champion Today"
          buttonTitle="Consult now!"
        />
        <ConsultationAndBenefitsContainer />
        {/* <ChangeYourLife /> */}
        <Transformation />
        {/* <Result />
        <Booking />
        <Testimonial /> */}
        <ConsultationForm />
        <Footer />
      </main>
    </>
  );
}

export default App;
