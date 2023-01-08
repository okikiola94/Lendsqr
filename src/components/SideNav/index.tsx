import "./sidenav.scss";
import { IoHomeOutline } from "react-icons/io5";
import { MdHomeRepairService, MdOutlinePeopleAlt, MdOutlineSavings } from "react-icons/md";
import { AiOutlineDown } from "react-icons/ai";
import { TiGroup } from "react-icons/ti";
import { FaBriefcase, FaChartBar, FaClipboardList, FaCoins, FaRegHandshake, FaScroll, FaSlidersH, FaUserCog } from "react-icons/fa";
import { BsPersonCheckFill, BsPersonXFill } from "react-icons/bs";
import Bank from "./images/bank.png"
import Icon from "./images/icon.png"
import Loan from "./images/loan.png"
import Galaxy from "./images/galaxy.png"
import Sack from "./images/sack.png"
import Badge from "./images/badge.png"



const SideNav=()=>{
    return(
        <div className="sideNav_container">
           <ul className="Side_Nav_wrapper">
            <li className="sideNav_list">
              <MdHomeRepairService/> 
              <p className="sideNav_list_label">
                Switch Organization</p> 
                <AiOutlineDown/>
            </li>
            <li className="sideNav_list">
              <IoHomeOutline/> 
              <p className="sideNav_list_label">
                Dashboard</p> 
            </li>
            <p className="list_sub_header">CUSTOMERS</p>
            <li className="sideNav_list">
              <MdOutlinePeopleAlt/> 
              <p className="sideNav_list_label">
                Users</p> 
            </li>
            <li className="sideNav_list">
              <TiGroup/> 
              <p className="sideNav_list_label">
                Guarantors</p> 
            </li>
            <li className="sideNav_list">
             <img src={Sack} alt="sack" className="icons_img"/>
              <p className="sideNav_list_label">
                Loans</p> 
            </li>
            <li className="sideNav_list">
              <FaRegHandshake/> 
              <p className="sideNav_list_label">
                Decision Models</p> 
            </li>
            <li className="sideNav_list">
              <MdOutlineSavings/> 
              <p className="sideNav_list_label">
                Savings</p> 
            </li>
            <li className="sideNav_list">
                <img src={Loan} alt="loan" className="icons_img"/>
              <p className="sideNav_list_label">
                Loan Requests</p> 
            </li>
            <li className="sideNav_list">
               <BsPersonCheckFill/>
              <p className="sideNav_list_label">
                Whitelist</p> 
            </li>
            <li className="sideNav_list">
                <BsPersonXFill/>
              <p className="sideNav_list_label">
                Karma</p> 
            </li>
            <p className="list_sub_header">BUSINESSES</p>
            <li className="sideNav_list">
                <FaBriefcase/>
              <p className="sideNav_list_label">
                Organization</p> 
            </li>
            <li className="sideNav_list">
                <img src={Loan} alt="loan"className="icons_img" />
              <p className="sideNav_list_label">
                Loan Products</p> 
            </li>
            <li className="sideNav_list">
                <img src={Bank} alt="loan" className="icons_img"/>
              <p className="sideNav_list_label">
                Savings Products</p> 
            </li>
            <li className="sideNav_list">
                <FaCoins/>
              <p className="sideNav_list_label">
                Fees and Charges</p> 
            </li>
            <li className="sideNav_list">
                <img src={Icon} alt="icon" className="icons_img"/>
              <p className="sideNav_list_label">
                Transactions</p> 
            </li>
            <li className="sideNav_list">
                <img src={Galaxy} alt="galaxy" className="icons_img"/>
              <p className="sideNav_list_label">
                Services</p> 
            </li>
            <li className="sideNav_list">
                <FaUserCog/>
              <p className="sideNav_list_label">
                Service Account</p> 
            </li>
            <li className="sideNav_list">
                <FaScroll/>
              <p className="sideNav_list_label">
                Settlements </p> 
            </li>
            
            <li className="sideNav_list">
                <FaUserCog/>
              <p className="sideNav_list_label">
                Service Account</p> 
            </li>
            
            <li className="sideNav_list">
                <FaChartBar/>
              <p className="sideNav_list_label">
                Reports </p> 
            </li>
            <p className="list_sub_header">SETTINGS</p>

            <li className="sideNav_list">
                <FaSlidersH/>
              <p className="sideNav_list_label">
              Preferences</p> 
            </li>
            <li className="sideNav_list">
                <img src={Badge} alt="badge" className="icons_img"/>
              <p className="sideNav_list_label">
              Fees and Pricing</p> 
            </li>
            <li className="sideNav_list">
                <FaClipboardList/>
              <p className="sideNav_list_label">
              Audit Logs</p> 
            </li>
            

            </ul> 

        </div>
    )
}

export default SideNav