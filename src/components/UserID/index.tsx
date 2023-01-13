import axios, { AxiosError, AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaArrowLeft, FaUser } from "react-icons/fa";
import { MdStarOutline } from "react-icons/md";
import { TbCurrencyNaira } from "react-icons/tb";
import { useNavigate, useParams } from "react-router-dom";

//STYLES
import styles from "./UserId.module.scss";

type User = {
  id: string;
  userName: string;
  orgName:string;
  email: string;
  phone: string;
  bankAccount: string;
  bankName: string;
  accountBalance: number;
  firstName: string;
  lastName: string;
  gender: string;
  profile: Profile;
  education: Education;
  guarantor:Guarantor;
  socials:Socials;
  accountNumber: string;
  loanRepayment: number;
};

type Profile = {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  currency: string;
  avatar: string;
  gender: string;
  bvn: number;
  address: string;
};

type Education={
  level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: []
}

type Guarantor= {
  firstName: string;
  lastName: string;
  phoneNumber:number;
  gender: string;
  address: string;
}

type Socials= {
  facebook: string;
  instagram: string;
  twitter:string;
}

const UserId = () => {
  const [userDetails, setUserDetails] = useState<User>({} as User);
  const { id } = useParams<{ id: string }>();
  const BASE_URL =
    `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/` + id;
  const navigate = useNavigate();
  const profile = userDetails.profile;

  const getUserDetails = async (): Promise<void> => {
    try {
      const response = await axios.get<User>(BASE_URL, {
        headers: {
          Accept: "application/json",
        },
      });

      setUserDetails(response.data);
      console.log("RESPONSE:", response.data);
    } catch (e) {
      const error = e as AxiosError;
      console.error("ERROR", error);
    }
  };
  useEffect(() => {
    getUserDetails();
    console.log(userDetails);
  }, []);

  
  return (
    <div className={styles.UserId}>
      <div>
        <p
          onClick={() => navigate("/dashboard")}
          className={styles.UserIdRedirect}
        >
          <FaArrowLeft /> Back to Users
        </p>
        <div className={styles.UserIdTitleFlex}>
          <h6 className={styles.UserIdTitle}>User Details</h6>
          <span className={styles.UserIdActionSpan}>
            <h6 className={styles.UserIdActionBlacklistButton}>
              BLACKLIST USER
            </h6>
            <h6 className={styles.UserIdActionActivateButton}>ACTIVATE USER</h6>
          </span>
        </div>

        <div className={styles.UserIdCard}>
          <div className={styles.UserIdCardContent}>
            <div className={styles.UserIdAvatar}>
              {/* <div>{userDetails.profile.avatar}</div> */}
            </div>
            <div className={styles.UserIdIdentityWrap}>
              <h6 className={styles.UserIdName}>{userDetails.userName}</h6>
              <p className={styles.UserIdId}>{userDetails.orgName}</p>
            </div>
            <span className={styles.UserIdLine}></span>
            <span className={styles.UserIdTierContainer}>
              <p className={styles.UserIdTier}>User&apos;s Tier</p>
              <p className={styles.UserIdTierRating}>
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </p>
            </span>
            <span className={styles.UserIdLine}></span>
            <div className={styles.UserIdandInfo}>
              <h5 className={styles.UserIdandBalance}>
                {userDetails.accountBalance}
              </h5>
              <p className={styles.UserIdandAcct}>
                {userDetails.accountNumber}
              </p>
            </div>
          </div>
          <nav className={styles.UserIdSubHeading}>
            <p
              className={styles.UserIdHeading}
              id={styles.UserIdHeadingUnderline}
            >
              General Details
            </p>
            <p className={styles.UserIdHeading}>Documents</p>
            <p className={styles.UserIdHeading}>Bank Details</p>
            <p className={styles.UserIdHeading}>Loans</p>
            <p className={styles.UserIdHeading}>Savings</p>
            <p className={styles.UserIdHeading}>App and System</p>
          </nav>
        </div>

        <div className={styles.UserIdInformation}>
          <div className={styles.UserIdInformationContent}>
            <div className={styles.UserIdPersonalInfo}>
              <h5 className={styles.UserIdPersonalInfoHead}>
                Personal Information
              </h5>
              <div className={styles.UserIdPersonalInfoContent}>
                <span className={styles.UserIdInfo}>
                  <p className={styles.UserIdInfoLabel}>FULL NAME</p>
                  <h6 className={styles.UserIdInfoInput}>
                    {userDetails.profile.firstName} {userDetails.profile.lastName}
                  </h6>
                </span>
                <span className={styles.UserIdInfo}>
                  <p className={styles.UserIdInfoLabel}>Phone Number</p>
                  <h6 className={styles.UserIdInfoInput}>{userDetails.profile.phoneNumber}</h6>
                </span>
                <span className={styles.UserIdInfo}>
                  <p className={styles.UserIdInfoLabel}>Email Address</p>
                  <h6 className={styles.UserIdInfoInput}>{userDetails.email}</h6>
                </span>
                <span className={styles.UserIdInfo}>
                  <p className={styles.UserIdInfoLabel}>Bvn</p>
                  <h6 className={styles.UserIdInfoInput}>{userDetails.profile.bvn}</h6>
                </span>
                <span className={styles.UserIdInfo}>
                  <p className={styles.UserIdInfoLabel}>Gender</p>
                  <h6 className={styles.UserIdInfoInput}>{userDetails.profile.gender}</h6>
                </span>
                <span className={styles.UserIdInfo}>
                  <p className={styles.UserIdInfoLabel}>Marital status</p>
                  <h6 className={styles.UserIdInfoInput}>Single</h6>
                </span>
                <span className={styles.UserIdInfo}>
                  <p className={styles.UserIdInfoLabel}>Children</p>
                  <h6 className={styles.UserIdInfoInput}>None</h6>
                </span>
                <span className={styles.UserIdInfo}>
                  <p className={styles.UserIdInfoLabel}>Type of residence</p>
                  <h6 className={styles.UserIdInfoInput}>
                    Parent&apos;s Apartment
                  </h6>
                </span>
              </div>
            </div>
            <hr className={styles.UserIdHorizontalLine} />
            <div className={styles.UserIdPersonalInfo2}>
              <h5 className={styles.UserIdPersonalInfoHead}>
                Education and Employment
              </h5>
              <div className={styles.UserIdPersonalInfoContent}>
                <span className={styles.UserIdInfo}>
                  <p className={styles.UserIdInfoLabel}>level of education</p>
                  <h6 className={styles.UserIdInfoInput}>{userDetails.education.level}</h6>
                </span>
                <span className={styles.UserIdInfo}>
                  <p className={styles.UserIdInfoLabel}>employment status</p>
                  <h6 className={styles.UserIdInfoInput}>{userDetails.education.employmentStatus}</h6>
                </span>
                <span className={styles.UserIdInfo}>
                  <p className={styles.UserIdInfoLabel}>sector of employment</p>
                  <h6 className={styles.UserIdInfoInput}>{userDetails.education.sector}</h6>
                </span>
                <span className={styles.UserIdInfo}>
                  <p className={styles.UserIdInfoLabel}>
                    Duration of employment
                  </p>
                  <h6 className={styles.UserIdInfoInput}>{userDetails.education.duration}</h6>
                </span>
                <span className={styles.UserIdInfo}>
                  <p className={styles.UserIdInfoLabel}>office email</p>
                  <h6 className={styles.UserIdInfoInput}>{userDetails.education.officeEmail}</h6>
                </span>
                <span className={styles.UserIdInfo}>
                  <p className={styles.UserIdInfoLabel}>Monthly income</p>
                  <h6 className={styles.UserIdInfoInput}>
                  {userDetails.education.monthlyIncome}
                  </h6>
                </span>
                <span className={styles.UserIdInfo}>
                  <p className={styles.UserIdInfoLabel}>loan repayment</p>
                  <h6 className={styles.UserIdInfoInput}>{userDetails.loanRepayment}
</h6>
                </span>
              </div>
            </div>
            <hr className={styles.UserIdHorizontalLine} />
            <div className={styles.UserIdPersonalInfo}>
              <h5 className={styles.UserIdPersonalInfoHead}>Socials</h5>
              <div className={styles.UserIdPersonalInfoContent}>
                <span className={styles.UserIdInfo}>
                  <p className={styles.UserIdInfoLabel}>Twitter</p>
                  <h6 className={styles.UserIdInfoInput}>{userDetails.socials.twitter}</h6>
                </span>
                <span className={styles.UserIdInfo}>
                  <p className={styles.UserIdInfoLabel}>Facebook</p>
                  <h6 className={styles.UserIdInfoInput}>{userDetails.socials.facebook}</h6>
                </span>
                <span className={styles.UserIdInfo}>
                  <p className={styles.UserIdInfoLabel}>Instagram</p>
                  <h6 className={styles.UserIdInfoInput}>{userDetails.socials.instagram}</h6>
                </span>
              </div>
            </div>
            <hr className={styles.UserIdHorizontalLine} />
            <div className={styles.UserIdPersonalInfo}>
              <h5 className={styles.UserIdPersonalInfoHead}>Guarantor</h5>
              <div className={styles.UserIdPersonalInfoContent}>
                <span className={styles.UserIdInfo}>
                  <p className={styles.UserIdInfoLabel}>full Name</p>
                  <h6 className={styles.UserIdInfoInput}>{userDetails.guarantor.firstName} {userDetails.guarantor.lastName}</h6>
                </span>
                <span className={styles.UserIdInfo}>
                  <p className={styles.UserIdInfoLabel}>Phone Number</p>
                  <h6 className={styles.UserIdInfoInput}>{userDetails.guarantor.phoneNumber}</h6>
                </span>
                <span className={styles.UserIdInfo}>
                  <p className={styles.UserIdInfoLabel}> Address</p>
                  <h6 className={styles.UserIdInfoInput}>{userDetails.guarantor.address}</h6>
                </span>
                <span className={styles.UserIdInfo}>
                  <p className={styles.UserIdInfoLabel}> Gender</p>
                  <h6 className={styles.UserIdInfoInput}>{userDetails.guarantor.gender}</h6>
                </span>
                <span className={styles.UserIdInfo}>
                  <p className={styles.UserIdInfoLabel}>Relationship</p>
                  <h6 className={styles.UserDetailsInfoInput}>Sister</h6>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserId;
