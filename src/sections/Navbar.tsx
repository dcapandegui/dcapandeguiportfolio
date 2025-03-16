import { useSidebar } from "../contexts/SidebarContext";
import NavbarSidebar from "../components/NavbarSidebar";
import LanguageSelector from "../components/LanguageSelector/LanguageSelector";
import "../styles/Navbar.css";

const Navbar = () => {
  const { openSidebar } = useSidebar();

  const handleOpenSidebar = () => {
    openSidebar(<NavbarSidebar />);
  };

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
          Projects
        </a>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
        >
          About
        </a>
        <a
          href="#footer"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("footer");
          }}
        >
          Contact
        </a>
      </div>
      <LanguageSelector />
      <div className="navbar-toggle" onClick={handleOpenSidebar}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
