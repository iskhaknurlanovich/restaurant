"use client";
import { useTranslation } from "react-i18next";
import scss from "./Interior.module.scss";

const Interior = () => {
  const { t } = useTranslation("mainMenu");
  return (
    <section className={scss.interior} id="interior">
      <div className={scss.content}>
        <div className={scss.top}>
          <img src="/image/blowLeft.svg" alt="" />
          <h1 className="subtitle">{t("interior")}</h1>
          <img src="/image/blowRight.svg" alt="" />
        </div>
        <div className={scss.carousel}>
          <img className={scss.img1} src="/image/img1.svg" alt="" />
          <img className={scss.img2} src="/image/img2.svg" alt="" />
          <img className={scss.img3} src="/image/img3.svg" alt="" />
          <img className={scss.img4} src="/image/img4.svg" alt="" />
          <img className={scss.img01} src="/image/img1.svg" alt="" />
          <img className={scss.img02} src="/image/img2.svg" alt="" />
          <img className={scss.img03} src="/image/img3.svg" alt="" />
          <img className={scss.img04} src="/image/img4.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Interior;
