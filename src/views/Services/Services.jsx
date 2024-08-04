import ServiceCard from '../../component/ServiceCard/ServiceCard'
import Title from '../../component/Title/Title'
import styles from './Services.module.css'
import crossfit from '../../assets/crossfit.jpg'
import musculacion from '../../assets/musculacion.jpg'
import zumba from '../../assets/zumba.jpg'
import entrenamiento from '../../assets/entrenamiento-personalizado.jpg'

export default function Services() {
    const crossfitDescription = 'Programa de entrenamiento intenso que combina levantamiento de pesas, gimnasia y ejercicios cardiovasculares en circuitos variados.'
    const musculacionDescription =' Entrenamiento de fuerza que utiliza pesas y máquinas para desarrollar y fortalecer los músculos.'
    const zumbaDescription ='Clase de fitness que mezcla ritmos latinos y movimientos de baile con ejercicios cardiovasculares para un entrenamiento divertido.'
    const entrenamientoDescription ='Sesiones individuales con un entrenador que diseñan un plan de ejercicios adaptado a tus necesidades y objetivos.'

  return (
    <div className={styles.servicesContainer}>
        <Title title='LOS SERVICIOS QUE OFRECEMOS'></Title>
        <div className={styles.servicesCardsContainer}>
          <ServiceCard title='CROSSFIT' description={crossfitDescription} img={crossfit}/>
          <ServiceCard title='MUSCULACIÓN' description={musculacionDescription} img={musculacion}/>
          <ServiceCard title='ZUMBA' description={zumbaDescription} img={zumba}/>
          <ServiceCard title='ENTRENAMIENTO PERSONALIZADO' description={entrenamientoDescription} img={entrenamiento}/>
        </div>
    </div>
  )
}
