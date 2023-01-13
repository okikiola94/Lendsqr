// REACT DEFAULTS
import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'

// COMPONETS
import UserListCard from '../../components/UserListCard'
import { MdFilterList } from 'react-icons/md'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import UserInfoRow from '../../components/UserInfoRow'

// IMAGES
import Users from '../../assets/images/CardListIcons/users.png'
import ActiveUsers from '../../assets/images/CardListIcons/activeUsers.png'
import Loan from '../../assets/images/CardListIcons/loan.png'
import Savings from '../../assets/images/CardListIcons/savings.png'

// STYLES
import styles from './UserList.module.scss'
import { useNavigate } from "react-router-dom";


type User = {
  id: number;
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  userStatus: string;
  lastActiveDate?: string;
  firstname?: string;
  lastname?: string;
};

const UserList = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const BASE_URL = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`;
  const [itemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const formatDate = (date: string | number | Date): string => {
    const newDate = new Date(date);
    const onlyDate = newDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });

    const onlyTime = newDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "numeric",
      hour12: true,
    });

    return onlyDate + "   " + onlyTime;
  };

  const getUserDetails = async (): Promise<void> => {
    try {
      const response = await axios.get(BASE_URL, {
        headers: {
          Accept: "application/json",
        },
      });

      setUserList(response.data);
      console.log("RESPONSE:", response.data);
    } catch (e) {
      const error = e as AxiosError;
      // Need to handle this error

      console.error("ERROR", error);
    }
  };

 useEffect(() => {
    getUserDetails();
  }, []);

  const totalItems = userList.length;
  const totalPages = Math.ceil(totalItems / itemPerPage);

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = userList.slice(indexOfFirstItem, indexOfLastItem);
  const Pagination = (): JSX.Element => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className={styles.Pagination}>
        {currentPage !== 1 && (
          <button className={styles.UserInfoButton} onClick={(): void => handlePageChange(currentPage - 1)}>
            <FaChevronLeft/>
          </button>
        )}
        {pageNumbers.map((number) => (
          <button 
            key={number}
            onClick={(): void => handlePageChange(number)}
            className={currentPage === number ? styles.active : ""}
          >
            {number}
          </button>
        ))}
        {currentPage !== totalPages && (
          <button onClick={(): void => handlePageChange(currentPage + 1)}>
            <FaChevronRight/>
          </button>
        )}
      </div>
    );
  };
  
  return (
    <section className={styles.userList}>
      <h1 className={styles.dashboardTitle}>Users</h1>
      <div className={styles.userListCards}>
        <UserListCard img={Users} cardText={'Users'} cardNumbers={'2,453'} />
        <UserListCard
          img={ActiveUsers}
          cardText={'Active Users'}
          cardNumbers={'2,453'}
        />
        <UserListCard
          img={Loan}
          cardText={'Users with Loans'}
          cardNumbers={'12,453'}
        />
        <UserListCard
          img={Savings}
          cardText={'Users with Savings'}
          cardNumbers={'10,2453'}
        />
      </div>
      <div className={styles.UserInfoTable}>

      <div className={styles.UserInfoHeadings}>
          <div className={styles.UserInfoTitles}>
            <h4 className={styles.userBankTitle}>
              <span>Organization</span>
              <MdFilterList />
            </h4>
            <h4 className={styles.userNameTitle}>
              <span>Username</span>
              <MdFilterList />
            </h4>
            <h4 className={styles.userEmail}>
              <span>Email</span>
              <MdFilterList />
            </h4>
            <h4 className={styles.userPhoneNumberTitle}>
              <span>Phone number</span>
              <MdFilterList />
            </h4>
            <h4 className={styles.userDateJoined}>
              <span>Date joined</span>
              <MdFilterList />
            </h4>
            <h4 className={styles.userStatus}>
              <span>Status</span>
              <MdFilterList />
            </h4>
            <h4 className={styles.userOptions}>
               <span></span>
            </h4>
          </div>
        </div>
  
        <div>
          {currentItems.map(user => {
            return (
              <div  onClick={() => navigate ("/userdetails/" + user.id)}>
              <UserInfoRow 
                key={user.id} 
                userBank={user.orgName}
                userName={user.userName}
                userEmail={user.email}
                userPhoneNumber={user.phoneNumber}
                userDateJoined={formatDate(user?.createdAt)}
                userStatus={"Inactive"}
                
        
              />
              </div>

            )
          })}
        </div>
        <div className={styles.UserPagination}>
        <div>
        Showing Page {currentPage} Out of {totalPages}
      </div>
  
      <Pagination />
      </div>
      </div>
     

    </section>
  );
        }  
        export default UserList;


