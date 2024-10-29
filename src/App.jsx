import Projects from "@/components/Projects";
import About from "@components/About";
import ContactSection from "@components/ContactSection";
import Expertise from "@components/Expertise";
import Footer from "@components/Footer";
import HeroSection from "@components/HeroSection";
import Navbar from "@components/Navbar";
import Review from "@components/Review";

const App = () => {
  return (
    <main className="overflow-hidden text-neutral-200 antialiased">
      <HeroSection />
      <Navbar />
      <Projects />
      <About />
      {/* <Mission /> */}
      <Expertise />
      <Review />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default App;
