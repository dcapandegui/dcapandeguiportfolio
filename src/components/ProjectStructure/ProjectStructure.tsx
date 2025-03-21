import { useState } from "react";
import "./ProjectStructure.css";
import { useTranslation } from "react-i18next";

const ProjectStructure = ({ structure }: { structure: string[] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const {t} = useTranslation();

  return (
    <div
      className="project-structure-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-button">
        <svg
          className="project-icon"
          width="25"
          height="25"
          viewBox="0 0 18 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.2 1.75H8.1L6.3 0H1.8C0.81 0 0 0.7875 0 1.75V12.25C0 13.2125 0.81 14 1.8 14H15.165L18 9.1875V3.5C18 2.5375 17.19 1.75 16.2 1.75Z"
            fill="#FFA000"
          />
          <path
            d="M16.2 2H1.8C0.81 2 0 2.77143 0 3.71429V12.2857C0 13.2286 0.81 14 1.8 14H16.2C17.19 14 18 13.2286 18 12.2857V3.71429C18 2.77143 17.19 2 16.2 2Z"
            fill="#FFCA28"
          />
        </svg>
      {isHovered && (
        <div className="dropdown">
          <ul>
            <li>📁 src</li>
            {structure.map((item, index) => (
              <li className="sub-item" key={index}> {item} </li>
            ))}
          </ul>
        </div>
      )}
        <p className="project-text">{t('folder_structure')}</p>
      </div>

    </div>  
  );
};

export default ProjectStructure;