// COMPONENTS
import TopNav from '../../components/Topnav'
import SideNav from '../../components/SideNav'
import UserList from '../UserList'

// STYLES
import styles from './Dashboard.module.scss'

const Dashboard = () => {
  return (
    <section className={styles.dashboard}>
      <TopNav />
      <div className={styles.dashboardContainer}>
        <SideNav />

        <main className={styles.dashboardMain}>
          <UserList />
        </main>
      </div>
    </section>
  )
}

export default Dashboard
