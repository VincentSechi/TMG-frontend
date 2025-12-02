import React from "react";
import styles from "@/app/styles/layout/_globalLayout.module.scss";
const GlobalLayout = ({children}) => {
  return <div className={styles.globalLayout}>{children}</div>;
};

export default GlobalLayout;
