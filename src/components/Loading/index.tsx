// REACT DEFAULTS

// STYLES
import styles from './Loading.module.scss'
import Logo from '../../assets/images/lendsqr.png'

type Props = {
  text?: string
}

const Loading = ({ text }: Props) => {
  return (
    <section className={styles.Loading}>
      {text ? (
        <h1 className={styles.loadingText}>{text}</h1>
      ) : (
        <img className={styles.LoadingImg} alt='logo' src={Logo} />
      )}
    </section>
  )
}

export default Loading
