// REACT DEFAULTS
import { Link } from 'react-router-dom'

// COMPONENTS
import { AiFillCaretDown, AiOutlineSearch } from 'react-icons/ai'
import { IoIosNotificationsOutline } from 'react-icons/io'

// IMAGES
import Logo from './images/lendsqr.png'
import User from './images/img.png'

// STYLES
import styles from './TopNav.module.scss'

const TopNav = () => {
  return (
    <nav className={styles.Nav_container}>
      <div className={styles.navBrand}>
        <img src={Logo} alt='logo' />
      </div>

      <div className={styles.Nav_wrapper}>
        <label htmlFor='search' className={styles.input_wrapper}>
          <input
            type='search'
            className={styles.searchInput}
            placeholder='search for anything'
            id='search'
            name='search'
          />
          <button className={styles.searchIconBtn}>
            <AiOutlineSearch className={styles.searchIcon} />
          </button>
        </label>

        <div className={styles.doc_container}>
          <Link to={'/'} className={styles.docs}>
            <span>Docs</span>
          </Link>

          <IoIosNotificationsOutline className={styles.notification} />

          <div className={styles.account_holder}>
            <img src={User} alt='img' className={styles.avatar} />
            <div className={styles.name_flex}>
              <p>Adedeji</p>
              <AiFillCaretDown />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default TopNav
