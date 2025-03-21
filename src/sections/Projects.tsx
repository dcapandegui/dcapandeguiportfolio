import "../styles/Projects.css";
import ProjectStructure from "../components/ProjectStructure/ProjectStructure";
import CubeEffectCarousel from "../components/CubeCarousel";
import { projects as projectData } from "../assets/ecommercemarketplaceData";
import { useTranslation } from "react-i18next";

interface Projects{
  link: string,
  name: string,
  fullscreenA: string,
  fullscreenB: string,
  fullscreenC: string,
  fullscreenD: string,
  fullscreenE: string,
  mobile1: string,
  mobile2: string,
  mobile3: string,
  mobile4: string,
  mobile5: string,
  description: string,
  structure: string[]
}

const Projects = () => {

  const {t} = useTranslation();

  return (
    <section id="projects">

    <div className="projectContainer">

    {projectData.map((project: Projects, index) => (
        <div className="projectCard" key={index}>
          
          <CubeEffectCarousel
            items={[
              { src: project.fullscreenA, alt: project.name },
              { src: project.fullscreenB, alt: project.name },
              { src: project.fullscreenC, alt: project.name },
              { src: project.fullscreenD, alt: project.name },
              { src: project.fullscreenE, alt: project.name },
            ]}
            width = '200px'
          />

          <CubeEffectCarousel
            items={[
              { src: project.mobile1, alt: project.name },
              { src: project.mobile2, alt: project.name },
              { src: project.mobile3, alt: project.name },
              { src: project.mobile4, alt: project.name },
              { src: project.mobile5, alt: project.name },
            ]}
            width = '275px'
          />

          <div style={{maxWidth: '600px'}}>
            <h1>{project.name}</h1>
            <p className="projectCardP">{t('project_description')}</p>
            <div style={{ display: "flex", gap: "10px" }}>
              <ProjectStructure structure={project.structure} />
              <div className="projectDemoButton"
                onClick={()=>{
                  window.open(project.link, '_blank')
                }}
              > 💻​ {t('link_demo')} </div>
            </div>
          </div>

        </div>
      ))}

    </div>


    </section>
  );
};

export default Projects;
