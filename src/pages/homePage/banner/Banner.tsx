"use client";
import React from "react";
import scss from "./Banner.module.scss";
import bannerImage from "../../../assets/images/for.jpg";
import { FaArrowRight } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneFlip } from "react-icons/fa6";

const Banner = () => {
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
            The Restaurant's sunny decor was inspired by the diners
          </p>
          <div className={scss.reserveBtn}>
            <span className={`${scss.line} ${scss.topLine}`}></span>
            <span className={`${scss.line} ${scss.bottomLine}`}></span>
            <button>
              Reserve Your Table <FaArrowRight fontSize={10} />
            </button>
          </div>
        </div>

        <div className={scss.text__block}>
          <div className={scss.foottext}>
            <h1>Location</h1>
            <p>_______</p>
            <span>
              <CiLocationOn />
            </span>
            <p>Rua da moeda 1g,1200-275,Portugal</p>
          </div>

          <div className={scss.text2}>
            <p>Hotline</p>
            <p>_______</p>
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
