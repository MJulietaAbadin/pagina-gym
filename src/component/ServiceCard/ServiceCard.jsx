import styles from './ServiceCard.module.css'

export default function ServiceCard({title, description, img}) {
  return (
    <div className={styles.serviceCardContainer}>
        <img src={img}/>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}
