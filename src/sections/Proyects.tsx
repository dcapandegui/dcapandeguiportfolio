import "../styles/Proyects.css"
import ProjectStructure from "../components/ProyectStructure/ProyectStructure"
import TestImg from "../assets/projects/test.png"

const Proyects = () => {
  return (
    <section id='projects' className='proyectContainer'>
      
      <div >
        <div className="proyectCard">

          <img className="proyectCardImg" src={TestImg} alt="" />

          <div>
            <h3>Ecommerce - MarketPlace</h3>
            <p className="proyectCardP">
            Construí mi proyecto de ecommerce en ReactJS utilizando componentes reutilizables para gestionar productos, carritos de compra y el proceso de pago. Implementé Redux para manejar el estado global y Firebase para la autenticación y base de datos.
            </p>
            <div style={{display:'flex', gap:'10px'}}>
              <ProjectStructure />
              <div className="projectDemoButton"> 💻​ Live Demo</div>
            </div>
          </div>

        </div>
      </div>

      <div >
        <h3>Ecommerce - MarketPlace</h3>
        <div className="proyectCard">

          <img className="proyectCardImg" src={TestImg} alt="" />

          <div>
            <p className="proyectCardP">
            Construí mi proyecto de ecommerce en ReactJS utilizando componentes reutilizables para gestionar productos, carritos de compra y el proceso de pago. Implementé Redux para manejar el estado global y Firebase para la autenticación y base de datos.
            </p>
            <div style={{display:'flex', gap:'10px'}}>
              <ProjectStructure />
              <div className="projectDemoButton"> 💻​ Live Demo</div>
            </div>
          </div>

        </div>
      </div>

      <div >
        <h3>Ecommerce - MarketPlace</h3>
        <div className="proyectCard">

          <img className="proyectCardImg" src={TestImg} alt="" />

          <div>
            <p className="proyectCardP">
            Construí mi proyecto de ecommerce en ReactJS utilizando componentes reutilizables para gestionar productos, carritos de compra y el proceso de pago. Implementé Redux para manejar el estado global y Firebase para la autenticación y base de datos.
            </p>
            <div style={{display:'flex', gap:'10px'}}>
              <ProjectStructure />
              <div className="projectDemoButton"> 💻​ Live Demo</div>
            </div>
          </div>

        </div>
      </div>
      
    </section>
  )
}

export default Proyects