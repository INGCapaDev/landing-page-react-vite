import logo from "@assets/logo.webp";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { LINKS } from "../constants";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleScroll = (event, targetID) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetID);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 flex w-full flex-col items-center justify-center lg:top-4">
      <div className="flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg">
        <img src={logo} alt="Logo img" height={28} width={32} />
        <div className="hidden space-x-6 lg:flex">
          {LINKS.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.targetId}`}
              className={`text-sm ${idx !== 0 ? "border-l-2 border-neutral-300/20 pl-2" : ""} hover:opacity-50`}
              onClick={(e) => handleScroll(e, link.targetId)}
            >
              {link.text}
            </a>
          ))}
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="w-full backdrop-blur-lg lg:hidden">
          {LINKS.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.targetId}`}
              className="block p-4 tracking-tighter"
              onClick={(e) => handleScroll(e, link.targetId)}
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
