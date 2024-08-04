import styles from './ProfessionalCard.module.css'


export default function ProfessionalCard({name, description, img}) {
  return (
    <div className={styles.card}>
      <div className={styles.photo}>
        <img src={img}/>
      </div>
      <div className={styles.content}>
        <h2 className={styles.name}>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}
