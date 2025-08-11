import Navbar from "./Component/Navbar/navbar";
import "./App.css"
import HeroSection from "./Component/HeroSection/heroSection";
import Capability from "./Component/CapabilitySection/capability";
import NumberCount from "./Component/numberCount/numberCount";
import SolutionSection from "./Component/SolutionSection/solutionSection";
import StrategicSection from "./Component/StrategicSection/strategicSection";
import FooterSection from "./Component/FooterSection/footerSection";

function App() {

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Capability/>
    <NumberCount/>
    <SolutionSection/>
    <StrategicSection/>
    <FooterSection/>
    </>
  )
}

export default App
