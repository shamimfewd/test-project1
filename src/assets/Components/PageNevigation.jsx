import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Style/PageNevigation.module.css";

function PageNevigation(props) {
  return (
    <div className={styles.paginationBox}>
      <NavLink to="/">Home</NavLink>&nbsp;/&nbsp;{props.item}
    </div>
  );
}

export default PageNevigation;
