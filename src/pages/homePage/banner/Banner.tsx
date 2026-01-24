"use client";
import { useState } from "react";
import scss from "./Banner.module.scss";
import { FaArrowRight } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneFlip } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation("banner");
  return (
    <div className={scss.banner}>
      <div className={scss.backgroundImg}>
        <img src="/image/banner.svg" alt="" />
      </div>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.title}>
            <div className={scss.top}>
              <img src="/image/blowLeft.svg" alt="" />
              <h3 className="subtitle">{t("delicios")}</h3>
              <img src="/image/blowRight.svg" alt="" />
            </div>
            <h1>{t("title")}</h1>
            <p>{t("description")} </p>
            <div className={scss.reserveBtn}>
              <span className={`${scss.line} ${scss.topLine}`}></span>
              <span className={`${scss.line} ${scss.bottomLine}`}></span>
              <button onClick={() => setOpen(!open)}>
                {t("btn")} <FaArrowRight fontSize={10} />
              </button>
            </div>
          </div>

          <div className={scss.bottomGroup}>
            <div className={scss.location}>
              <h5>{t("location.text")}</h5>
              <div className={scss.line}></div>
              <CiLocationOn className={scss.icon} />
              <p>{t("location.info")}</p>
            </div>

            <div className={scss.hotline}>
              <h5>{t("hotline.text")}</h5>
              <div className={scss.line}></div>
              <FaPhoneFlip className={scss.icon} />
              <p>{t("hotline.info")}</p>
            </div>
          </div>
          <div
            className={scss.modal}
            style={{
              right: open ? "0" : "-400px",
            }}
          >
            <div className={scss.modalName}>
              <img src="/image/Group 2.svg" alt="" />
              <div className={scss.inputField}>
                <p>{t("modal.name.text")}</p>
                <input type="text" placeholder={t("modal.name.input")} />
              </div>
            </div>
            <div className={scss.modalPhone}>
              <img src="/image/Group 1.svg" alt="" />
              <div className={scss.inputField}>
                <p>{t("modal.phone.text")}</p>
                <input type="number" placeholder={t("modal.phone.input")} />
              </div>
            </div>
            <button onClick={() => setOpen(!open)}>{t("modal.textBtn")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
