import styles from './UserListCard.module.scss'

type CardProps = {
  img: string
  cardText: string
  cardNumbers: string
}

const UserListCard = ({ img, cardText, cardNumbers }: CardProps) => {
  return (
    <div className={styles.userListCard}>
      <div className={styles.cardImg}>
        <img src={img} alt='card_image' />
      </div>
      <h2 className={styles.cardTitle}>{cardText}</h2>
      <p className={styles.cardCaption}>{cardNumbers}</p>
    </div>
  )
}

export default UserListCard
