import React, { useContext } from "react";
import styles from "./MainPage.module.scss";
import { MainContext } from "../../../context/MainContext";
import TodoContainer from "../../TodoContainer/TodoContainer";
// import {
//   BrowserRouter as Router,
//   Link,
//   Route,
//   useRouteMatch,
// } from "react-router-dom";
import UserCard from "../../UserCard/UserCard";
import UserDialog from "../../UserDialog/UserDialog";
import Categories from "../../Categories/Categories";

const MainPage = () => {
  const { isLoggedIn } = useContext(MainContext);

  return (
    <div className={styles.mainPage}>
      <header>
        <div className={styles.pageTitle}>Main Page</div>
      </header>
      <div className={styles.innerFrame}>
        {!isLoggedIn ? (
          <UserDialog />
        ) : (
          <>
            <div className={styles.leftFrame}>
              <UserCard />
              <Categories />
            </div>
            <div className={styles.container}>
              <TodoContainer />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MainPage;
