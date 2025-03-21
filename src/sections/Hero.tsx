import '../styles/Hero.css'
import portfolioPhoto from '../assets/portfolioPhoto.png'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const {t} = useTranslation();
  
  return (
    <section id='hero' className='heroContainer'>

      <div>
        <div className='heroText'>
        {t('heroLine1')}
        </div>
        <div className='heroText'>
        {t('heroLine2')}
        </div>
        <div className='heroText'>
        {t('heroLine3')}
        </div>
        <div className='heroSubText'>
        {t('heroLine4')}
        </div>     
      </div>
      <div style={{textAlign:'center'}}>
        <img src={portfolioPhoto} className='dcapandeguiPhoto' alt="dcapandegui-portfolio" />
      </div>


    </section>
  )
}

export default Hero