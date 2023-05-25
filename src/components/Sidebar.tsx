import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://source.unsplash.com/random/?texture-metal/"
        alt=""
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/allysonabreu.png" alt="" />

        <strong>Allyson Abreu</strong>
        <span>BackEnd Develop/Data Scientist</span>
      </div>
    </aside>
  );
}
