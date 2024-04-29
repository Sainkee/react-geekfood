import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import Testimonial from "./components/Testimonial";
import FooterSection from "./components/FooterSection"; 

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <div className=" max-w-7xl mx-auto px-6">
       

        <AboutSection />
        <Testimonial /> 
      </div>
      <FooterSection />
    </>
  );
}

export default App;
