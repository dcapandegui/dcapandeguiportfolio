import "../styles/Projects.css";
import ImageSwitcher from "../components/ImageFadeLoop";
import { projectsData } from "../components/projectsData";
import { useTranslation } from "react-i18next";

interface Projects{
  link: string,
  name: string,
  fullscreen: string,
  mobile: string,
  description: string
}

const Projects = () => {

  const {t} = useTranslation();

  return (
    <section id="projects">
    <div className="projectContainer">

    {projectsData.map((project: Projects, index) => (
        <div className="projectCard" key={index}>

          <div style={{display: 'flex', justifyContent:'center', alignItems:'center', width:'100%'}}>
          <ImageSwitcher 
            image1={project.fullscreen}
            image2={project.mobile}
          ></ImageSwitcher>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center', width:'100%'}}>
            <h1>{project.name}</h1>
            <p className="projectCardP">{t('project_description')}</p>
            <div style={{ display: "flex", gap: "10px" }}>
              <div className="projectDemoButton" onClick={()=>{ window.open(project.link, '_blank') }}> 💻​ {t('link_demo')} </div>
            </div>
          </div>

        </div>
    ))}

    </div>
    </section>
  );
};

export default Projects;
