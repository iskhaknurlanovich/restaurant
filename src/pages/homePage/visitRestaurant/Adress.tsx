"use client";
import { RiInstagramFill } from "react-icons/ri";
import scss from "./Adress.module.scss";
import { FaArrowRight } from "react-icons/fa";
import { BiLogoTelegram, BiPhoneCall } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Adress = () => {
  const { t } = useTranslation("adress");
  const data = [
    {
      timeWork: t("time.info.firstTime"),
    },
    {
      timeWork: t("time.info.secondTime"),
    },
  ];

  return (
    <div className={scss.adress} id="contact-us">
      <div className="container">
        <div className={scss.content}>
          <div className={scss.leftClass}>
            <div className={scss.top}>
              <img src="/image/blowLeft.svg" alt="" />
              <h2 className="subtitle">{t("text")}</h2>
            </div>
            <h1>{t("title")}</h1>
            <div className={scss.neighborhood}>
              <h3>{t("adress.title")}</h3>
              <p>{t("adress.info")}</p>
            </div>
            <div className={scss.timeWork}>
              <h3>{t("time.title")}</h3>
              {data?.map((item: any, idx: number) => (
                <p key={idx}>{item.timeWork}</p>
              ))}
            </div>
            <div className={scss.giftButton}>
              <span className={`${scss.line} ${scss.topLine}`}></span>
              <span className={`${scss.line} ${scss.bottomLine}`}></span>
              <button>
                {t("btnText")} <FaArrowRight fontSize={10} />
              </button>
            </div>
          </div>
          <div className={scss.mapInfo}>
            <h2>{t("contact")}</h2>
            <p>
              <BiPhoneCall className={scss.icon} />
              +771219900
            </p>
            <p>
              <MdOutlineMail className={scss.icon} />
              motionweb312@gmail.com
            </p>
            <div className={scss.mapIcon}>
              <div className={scss.messangers}>
                <BiLogoTelegram className={scss.icon} />
                <RiInstagramFill className={scss.icon} />
              </div>
              <a href="https://go.2gis.com/5Y7vZ" target="blank">
                <img src="/image/map.svg" alt="" />
              </a>
            </div>
          </div>
          <a
            className={scss.noneMap}
            href="https://go.2gis.com/5Y7vZ"
            target="blank"
          >
            <img src="/image/map2.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Adress;
