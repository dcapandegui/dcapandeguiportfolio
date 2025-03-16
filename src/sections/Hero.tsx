import '../styles/Hero.css'
import portfolioPhoto from '../assets/portfolioPhoto.png'

const Hero = () => {
  return (
    <section id='hero' className='heroContainer'>

      <div>
        <div className='heroText'>
          Hi! I´m Daniel, a
        </div>
        <div className='heroText'>
          FrontEnd
        </div>
        <div className='heroText'>
          Developer
        </div>
        <div className='heroSubText'>
          Speciallized in React, but open to learn more stacks
        </div>     
      </div>
      <div style={{textAlign:'center'}}>
        <img src={portfolioPhoto} className='dcapandeguiPhoto' alt="dcapandegui-portfolio" />
      </div>


    </section>
  )
}

export default Hero