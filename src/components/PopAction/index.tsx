import { MouseEventHandler } from "react";
import { BsEye } from "react-icons/bs";
import { BiUserCheck, BiUserX } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

//STYLES
import styles from "./PopUp.module.scss";

interface User {
  id: string;
}

const DeletePopup = (props: {
  exit: MouseEventHandler<HTMLAnchorElement> | undefined;
}) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.PopUp} id="mySidebar">
        <a href="javascript:void(0)" className={styles.PopUpClosebtn} onClick={props.exit}>
          &times;
        </a>
        <div className={styles.PopUPKebabMmenu}>
          <li
            // onClick={() => navigate("/userdetails/" + user.id)}
            className={styles.PopUplistItem}
          ><BsEye/>
            View Details{" "}
          </li>
          <li
            onClick={() => navigate("")}
            className={styles.PopUplistItem}
          ><BiUserX/>
            Blacklist User{" "}
          </li>
          <li
            onClick={() => navigate("")}
            className={styles.PopUplistItem}
          ><BiUserCheck/>
            Activate User
          </li>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
