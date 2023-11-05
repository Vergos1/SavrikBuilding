import HeroSection from "../component/heroSection/HeroSection.jsx";
import AboutSection from "../component/aboutSection/AboutSection.jsx";
import VideoSection from "../component/videoSection/VideoSection.jsx";
import CatalogSection from "../component/catalogSection/CatalogSection.jsx";



const HomePage = () => {
  return (
   <>
     <HeroSection/>
     <AboutSection/>
     <VideoSection/>
     <CatalogSection/>
   </>
  )
}

export default HomePage;