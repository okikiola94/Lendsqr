// COMPONENTS
import { useState } from 'react'
import { TbDotsVertical } from 'react-icons/tb'
import DeletePopup from '../PopAction'

// STYLES
import styles from './UserInfoRow.module.scss'

type UserInfo = {
  userBank: string
  userName: string
  userEmail: string
  userPhoneNumber: string
  userDateJoined: string
  userStatus: string
}

const UserInfoRow = ({
  userBank,
  userName,
  userEmail,
  userPhoneNumber,
  userDateJoined,
  userStatus,
}: UserInfo) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className={styles.UserInfo}>
      <p className={styles.userBank}>{userBank}</p>
      <p className={styles.userName}>{userName}</p>
      <p className={styles.userEmail}>{userEmail}</p>
      <p className={styles.userPhoneNumber}>{userPhoneNumber}</p>
      <p className={styles.userDateJoined}>{userDateJoined}</p>
      <p className={styles.userStatus}>{userStatus}</p>
      <p className={styles.userOptions}>
        <TbDotsVertical onClick={() => {
                        setIsNavExpanded(!isNavExpanded);
                      }}/>
      </p>

      {isNavExpanded && <DeletePopup exit={() => setIsNavExpanded(false)} />}
    </div>
  )
}

export default UserInfoRow
