import "./topnav.scss";
import Logo from "./images/lendsqr.png";
import Img from "./images/img.png";

import { AiFillCaretDown, AiOutlineSearch } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
const TopNav = () => {
  return (
    <div className="Nav_container">
        <ul className="Nav_wrapper">
      <img src={Logo} alt="logo"/>
      <div className="input_wrapper">
        <input type="search" placeholder="search for anything" />
        <button>
          <AiOutlineSearch/>
        </button>
      </div>
      <div className="doc_container">
        <a href="#" className="docs" >Docs</a>
        <IoIosNotificationsOutline className="alert"/>
        <div className="account_holder">
          <img src={Img} alt="img" className="user_img"/>
          <div className="name_flex">
            <p>Adedeji</p>
            <AiFillCaretDown />
          </div>
        </div>
      </div>
      </ul>
    </div>
  );
};
export default TopNav;
