"use client";
import { useState } from "react";
import scss from "./Banner.module.scss";
import { FaArrowRight } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";

const Banner = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={scss.banner}>
      <div className={scss.backgroundImg}>
        <img src="/banner.svg" alt="" />
      </div>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.title}>
            <div className={scss.top}>
              <img src="/blowLeft.svg" alt="" />
              <h3 className="subtitle">Delicios</h3>
              <img src="/blowRight.svg" alt="" />
            </div>
            <h1>Italian Cuisine</h1>
            <p>
              Classic steak & delicious with delightfully unexpected twists. The
              Restaurants sunny decor was inspired by the diners
            </p>
            <div className={scss.reserveBtn}>
              <span className={`${scss.line} ${scss.topLine}`}></span>
              <span className={`${scss.line} ${scss.bottomLine}`}></span>
              <button onClick={() => setOpen(!open)}>
                Reserve Your Table <FaArrowRight fontSize={10} />
              </button>
            </div>
          </div>

          {open && (
            <div
              className={scss.modal}
              style={{
                transition: "1s",
                transform: open ? "translateX(200px)" : "translateX(-200px)",
              }}
            >
              <div className={scss.modalBlock}>
                <div className={scss.modalName}>
                  <span>
                    <IoPersonSharp />
                  </span>
                  <h1 style={{ color: "black", fontSize: "20px" }}>NAME</h1>
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className={scss.modalPhone}>
                  <span>
                    <FaPhoneFlip />
                  </span>
                  <h1 style={{ color: "black", fontSize: "20px" }}>PHONE</h1>
                  <input type="text" placeholder="Your Phone Number" />
                </div>
                <button onClick={() => setOpen(!open)}>Сontact</button>
              </div>
            </div>
          )}

          <div className={scss.bottomGroup}>
            <div className={scss.location}>
              <h5>Location</h5>
              <div className={scss.line}></div>
              <CiLocationOn className={scss.icon} />
              <p>Rua da moeda 1g,1200-275,Portugal</p>
            </div>

            <div className={scss.hotline}>
              <p>Hotline</p>
              <div className={scss.line}></div>
              <FaPhoneFlip className={scss.icon} />
              <p>+771219900</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
