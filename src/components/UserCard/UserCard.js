import React, { useContext } from "react";
import styles from "./UserCard.module.scss";
import { MainContext } from "../../context/MainContext";
import profilePic from "../../assets/profilePicture.svg";
import LogoutButton from "../LogoutButton/LogoutButton";

const UserCard = () => {
  const { userData, userLogOut } = useContext(MainContext);
  return (
    <div className={styles.card}>
      <div className={styles.userWrapper}>
        <img src={profilePic} alt="" className={styles.profilePic} />
        <div className={styles.userNameContainer}>
          <p>{userData.name}</p>
          <p>{userData.surname}</p>
        </div>
      </div>
      <LogoutButton userLogOut={userLogOut} />
    </div>
  );
};

export default UserCard;
