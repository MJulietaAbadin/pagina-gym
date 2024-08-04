import styles from './HomeCard.module.css'

export default function HomeCard() {
  return (
    <div className={styles.homeCardContainer}>
      <div className={styles.homeCardContent}>
          <h1>TRANSFORMA TU VIDA <span className={styles.highlight}>COMIENZA HOY.</span></h1>
          <p>Reserva tu sesión de entrenamiento con nuestros expertos y comienza tu transformación.</p>
          <button>Regístrate</button>
      </div>
    </div>
  )
}
