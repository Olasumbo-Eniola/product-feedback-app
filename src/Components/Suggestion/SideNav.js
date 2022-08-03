import style from "./index.module.scss";

export default function SideNav() {
  return (
    <nav className={style.sideNav}>
      <div className={style.gradientBox}>
        <div className={style.gradientBoxContent}>
          <h3>Frontend mentor</h3>
          <p>Feedback board</p>
        </div>
      </div>
      <div className={style.box}>
        <div className={style.tags}>
          <button className={style.tag + " " + style.active}>All</button>
          <button className={style.tag}>UI</button>
          <button className={style.tag}>Entertainment</button>
        </div>
      </div>
      <div className={style.box2} >
        <div className={style.header}>
            <h3>Roadmap</h3>
        </div>
      </div>
    </nav>
  );
}
