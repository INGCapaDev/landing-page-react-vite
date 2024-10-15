import About from "./components/About";
import Dishes from "./components/Dishes";
import Expertise from "./components/Expertise";
import HeroSection from "./components/HeroSection";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="overflow-hidden text-neutral-200 antialiased">
      <HeroSection />
      <Navbar />
      <Dishes />
      <About />
      <Mission />
      <Expertise />
    </main>
  );
};

export default App;
