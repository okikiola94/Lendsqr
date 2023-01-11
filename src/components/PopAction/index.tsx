import { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";

//STYLES
import styles from "./PopUp.module.scss";

interface User {
    id: string;
}


const DeletePopup = (props: { exit: MouseEventHandler<HTMLAnchorElement> | undefined; }) => {
const navigate=useNavigate();

    return (
        <div>
            <div className={styles.PopUp} id="mySidebar">
                <a href="javascript:void(0)" className="closebtn" onClick={props.exit}>
                    &times;
                </a>
                <div className="KEBAB-menu">
                    <div className="vIWV-USER-side">
                        <li onClick={() => navigate("/userdetails")}>View Details </li>
                    </div>
                    <div className="Edit-user-side">
                        <li onClick={() => navigate("/admin/userlist")}>Blacklist User </li>
                    </div>
                    <div className="Archive-User-side">
                        <li onClick={() => navigate("/admin/archive")}>Activate User</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeletePopup;
