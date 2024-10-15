import hero from "../assets/hero.jpeg";
import video from "../assets/hero.mp4";
import logo from "../assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <video
          src={video}
          className="h-full w-full object-cover"
          muted
          autoPlay
          loop
          playsInline
          poster={hero}
        ></video>
      </div>
      <img src={logo} alt="lgo img" />
    </section>
  );
};

export default HeroSection;
