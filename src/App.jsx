import Projects from "@/components/Projects";
import About from "@components/About";
import ContactSection from "@components/ContactSection";
import Expertise from "@components/Expertise";
import Footer from "@components/Footer";
import HeroSection from "@components/HeroSection";
import Mission from "@components/Mission";
import Navbar from "@components/Navbar";
import Review from "@components/Review";
import WhatssapButton from "./components/WhatssapButton";

const App = () => {
  return (
    <main className="relative overflow-hidden text-neutral-200 antialiased">
      <HeroSection />
      <Navbar />
      <Projects />
      <About />
      <Mission />
      <Expertise />
      <Review />
      <ContactSection />
      <Footer />
      <WhatssapButton />
    </main>
  );
};

export default App;
