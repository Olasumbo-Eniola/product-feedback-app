import styles from "./index.module.scss";
import SideNav from "./SideNav";

export default function Suggestion() {
  return (
    <div className={styles.suggestion}>
      <SideNav />
      <main className={styles.main}></main>
    </div>
  );
}
