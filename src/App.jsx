import HeroSection from "./components/HeroSection";
import NavBar from "./components/navBar";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <>
      <NavBar />

      <div className="max-w-7xl mx-auto px-6">
        <HeroSection />

        <AboutSection />
      </div>
    </>
  );
}

export default App;
