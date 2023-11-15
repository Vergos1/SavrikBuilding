import HeroSection from "../component/heroSection/HeroSection.jsx";
import AboutSection from "../component/aboutSection/AboutSection.jsx";
import VideoSection from "../component/videoSection/VideoSection.jsx";
import CatalogSection from "../component/catalogSection/CatalogSection.jsx";
import StagesConstructionSection from "../component/stagesConstructionSection/StagesConstructionSection.jsx";
import InformationSection from "../component/informationSection/InformationSection.jsx";
import CalculationSection from "../component/calculationSection/CalculationSection.jsx";
import SubmissionForm from "../component/sumbissionForm/SubmissionForm.jsx";



const HomePage = () => {
  return (
   <>
     <HeroSection/>
     <AboutSection/>
     <VideoSection/>
     <CatalogSection/>
     <StagesConstructionSection/>
     <CalculationSection/>
     <InformationSection/>
     <SubmissionForm/>
   </>
  )
}

export default HomePage;