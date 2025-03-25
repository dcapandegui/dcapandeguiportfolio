import { useTranslation } from "react-i18next";
import LanguageSelector from "../components/LanguageSelector/LanguageSelector";
import "../styles/Navbar.css";

const Navbar = () => {
  const {t} = useTranslation();


  // Función para hacer el scroll suave hacia la sección correspondiente
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth", // Desplazamiento suave
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo"
      onClick={(e) => {
        e.preventDefault(); // Prevenimos el comportamiento predeterminado del enlace
        scrollToSection("hero"); // Desplazamos hacia la sección con id="hero"
      }}
      >DCapandegui</div>
      <div className="navbar-links">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault(); // Prevenimos el comportamiento predeterminado del enlace
            scrollToSection("hero"); // Desplazamos hacia la sección con id="hero"
          }}
        >
          Home
        </a>
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("projects");
          }}
        >
          {t('projects')}
        </a>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
        >
          {t('about')}
        </a>
        <a
          href="#footer"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("footer");
          }}
        >
          {t('contact')}
        </a>
      </div>
      <LanguageSelector />
    </nav>
  );
};

export default Navbar;
