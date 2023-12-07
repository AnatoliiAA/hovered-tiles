import React from "react";

import styles from "./Layout.module.css";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <main className={styles.layout}>{children}</main>;
};
