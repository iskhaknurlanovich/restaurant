"use client";
import scss from "./About.module.scss";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("about");
  return (
    <div className={scss.about} id="about-us">
      <div className="container">
        <div className={scss.about__block}>
          <div className={scss.about__block__item}>
            <div className={scss.title}>
              <div className={scss.top}>
                <img src="/image/blowLeft.svg" alt="img" />
                <h4 className="subtitle">{t("about")}</h4>
              </div>
              <h1>{t("title")}</h1>
            </div>
            <p>{t("subtitle")}</p>
          </div>
          <div className={scss.about__block__item1}>
            <img src="/image/Frame 15.png" alt="" />
            <img src="/image/Frame 16.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
