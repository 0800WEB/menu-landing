import { useState, useEffect } from "react";
import arrowToBottom from "../assets/svg/arrow-to-bottom.svg";
import arrowToTop from "../assets/svg/arrow-to-top.svg";
import lineStroke from "../assets/svg/line-stroke.svg";

const ButtonsScroll = () => {
  const sections = ["section-hero", "section-3d", "section-reviews", "section-chatbot", "section-menu"];
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollDown = () => {
    if (currentSectionIndex < sections.length - 1) {
      const nextSection = sections[currentSectionIndex + 1];
      scrollTo(nextSection);
      setCurrentSectionIndex(currentSectionIndex + 1);
    }
  };

  const handleScrollUp = () => {
    if (currentSectionIndex > 0) {
      const previousSection = sections[currentSectionIndex - 1];
      scrollTo(previousSection);
      setCurrentSectionIndex(currentSectionIndex - 1);
    }
  };

  // Función para rastrear en qué sección estamos en función del scroll
  const handleScroll = () => {
    sections.forEach((sectionId, index) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        // Asegúrate de que la sección está completamente visible o casi visible (ajustando margen con rect.height / 2)
        if (rect.top >= 0 && rect.bottom <= window.innerHeight + rect.height / 2) {
          setCurrentSectionIndex(index);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex items-center gap-4">
      <button onClick={handleScrollUp} disabled={currentSectionIndex === 0}>
        <img
          className="w-5 sm:w-6 md:w-full"
          src={arrowToTop}
          alt="Flecha Hacia Arriba"
        />
      </button>
      <img className="h-6 sm:h-8" src={lineStroke} alt="Linea Divisora" />
      <button onClick={handleScrollDown} disabled={currentSectionIndex === sections.length - 1}>
        <img
          className="w-5 sm:w-6 md:w-full"
          src={arrowToBottom}
          alt="Flecha Hacia Abajo"
        />
      </button>
    </div>
  );
};

export default ButtonsScroll;
