import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Benefits from "./components/Benefits/Benefits"
import BenefitOne from "./components/BenefitOne/BenefitOne"
import BenefitTwo from "./components/BenefitTwo/BenefitTwo"
import BenefitThree from "./components/BenefitThree/BenefitThree"
import BenefitFour from "./components/BenefitFour/BenefitFour"
import Slider from "./components/Slider/Slider"
import Footer from "./components/Footer/Footer" 
import CourseAudience from "./components/CourseAudience/CourseAudience"
import Payment from "./components/Payment/Payment"
import Faqs from "./components/Faqs/Faqs"
import About from "./components/About/About"
import Arrowup from "./components/Arrowup/Arrowup"


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <BenefitOne />
      <BenefitTwo />
      <BenefitThree />
      <BenefitFour />
      <Slider/>
      <CourseAudience/>
      <Payment/>
      <Faqs/>
      <About/>
      <Footer/>
      <Arrowup/>
    </>
  )
}

export default App
