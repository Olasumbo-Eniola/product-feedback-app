import React, { useState } from "react";
import style from "./index.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas);

export default function SideNav() {
  const [currentTag, setCurrentTag] = useState(0);
  const tagList = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
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
          {tagList.map((el, index) => (
            <button
              className={
                currentTag == index ? style.active + " " + style.tag : style.tag
              }
              type="button"
              key={index}
              onClick={() => setCurrentTag(index)}
            >
              {el}
            </button>
          ))}
        </div>
      </div>
      <div className={style.box2}>
        <div className={style.header}>
          <h3>Roadmap</h3>
          <div className={style.roadmap}>
            <div className={style.row}>
              <p className={style.dot}>
                <FontAwesomeIcon icon={["fas", "circle"]} color="#f49f85" />
              </p>
              <p className={style.text}>Planned</p>
              <p className={style.count}>3</p>
            </div>
            <div className={style.row}>
              {" "}
              <p className={style.dot}>
                <FontAwesomeIcon icon={["fas", "circle"]} color="#ad1fea" />
              </p>
              <p className={style.text}>In progress</p>
              <p className={style.count}>3</p>
            </div>
            <div className={style.row}>
              {" "}
              <p className={style.dot}>
                <FontAwesomeIcon icon={["fas", "circle"]} color="62BCFA" />
              </p>
              <p className={style.text}>Live</p>
              <p className={style.count}>3</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
