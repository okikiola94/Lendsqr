

//STYLES
import SideNav from "../../components/SideNav";
import TopNav from "../../components/Topnav";
import UserId from "../../components/UserID";
import styles from "./UserDetails.module.scss";



const UserDetails = () => {
  

  return (
    <section className={styles.dashboard}>
      <TopNav />
      <div className={styles.dashboardContainer}>
        <SideNav />

        <main className={styles.dashboardMain}>
          <UserId />
        </main>
      </div>
    </section>
  );
};

export default UserDetails;
