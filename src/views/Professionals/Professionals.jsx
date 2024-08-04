import entrenador1 from '../../assets/entrenador1.jpg'
import entrenador2 from '../../assets/entrenador2.jpg'
import entrenador3 from '../../assets/entrenador3.jpg'
import entrenador4 from '../../assets/entrenador4.jpg'
import Title from '../../component/Title/Title'
import styles from './Professionals.module.css'
import ProfessionalCard from '../../component/ProfessionalCard/ProfessionalCard'

export default function Professionals() {
    const davidDescription = 'Experto en CrossFit, combina ejercicios intensos con levantamiento de pesas para mejorar tu fuerza y resistencia.'
    const javierDescription = 'Especialista en musculación, enfocado en el desarrollo muscular y técnicas avanzadas para optimizar tus entrenamientos.'
    const alejandroDescription = 'Entrenador personal que crea planes de ejercicios personalizados para ayudarte a alcanzar tus metas físicas.'
    const carlosDescription = 'Instructor de Zumba que mezcla ritmos latinos con ejercicios cardiovasculares para un entrenamiento divertido y enérgico.'
  return (
    <div className={styles.professionalsContainer}>
        <Title title='NUESTROS ENTRENADORES'/>
        <div className={styles.professionalCardContainer}>
            <ProfessionalCard name='David Martínez' description={davidDescription} img={entrenador1}/>
            <ProfessionalCard name='Javier Gómez' description={javierDescription} img={entrenador2}/>
            <ProfessionalCard name='Alejandro Ruiz' description={alejandroDescription} img={entrenador3}/>
            <ProfessionalCard name='Carlos Fernández' description={carlosDescription} img={entrenador4}/>
        </div>
    </div>
  )
}
