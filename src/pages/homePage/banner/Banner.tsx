"use client";
import React, { useState } from "react";
import scss from "./Banner.module.scss";
import bannerImage from "../../../assets/images/for.jpg";
import { FaArrowRight } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";

const Banner = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={scss.banner}
      style={{
        backgroundImage: `url(${bannerImage.src})`,
        height: "90vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className={scss.text}>
          <p>Delicious</p>
          <h1>Italian Cuisine</h1>
          <p>
            Classic steak & delicious with delightfully unexpected twists.
            <br />
            The Restaurants sunny decor was inspired by the diners
          </p>
          <div className={scss.reserveBtn}>
            <span className={`${scss.line} ${scss.topLine}`}></span>
            <span className={`${scss.line} ${scss.bottomLine}`}></span>
            <button onClick={() => setOpen(true)}>
              Reserve Your Table <FaArrowRight fontSize={10} />
            </button>
          </div>
        </div>

        {open && (
          <div className={scss.Modal}>
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
              <button onClick={() => setOpen(false)}>Сontact</button>
            </div>
          </div>
        )}

        <div className={scss.text__block}>
          <div className={scss.foottext}>
            <h1>Location</h1>
            <h6></h6>
            <span>
              <CiLocationOn />
            </span>
            <p>Rua da moeda 1g,1200-275,Portugal</p>
          </div>

          <div className={scss.text2}>
            <p>Hotline</p>
            <h6></h6>
            <span>
              <FaPhoneFlip />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
