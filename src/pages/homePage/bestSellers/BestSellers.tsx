"use client";
import React, { useState } from "react";
import scss from "./BestSellers.module.scss";
import { useTranslation } from "react-i18next";

const images = [
  "/image/Frame 19.svg",
  "/image/Frame 421.svg",
  "/image/Frame 20.svg",
  "/image/Frame 422.svg",
  "/image/Frame 421.svg",
  "/image/Frame 20.svg",
];

const BestSellers = () => {
  const { t } = useTranslation("bestSellers");
  const [index, setIndex] = useState(2);

  const next = () => {
    setIndex(index + 1);
  };
  const prev = () => {
    setIndex(2);
  };

  return (
    <div className={scss.best__sellers}>
      <div className="container">
        <div className={scss.best__sellers__block}>
          <div className={scss.items__block}>
            <div className={scss.top}>
              <img src="/image/blowLeft.svg" alt="img" />
              <h1>{t("bestSellers")}</h1>
            </div>
            <h1>{t("title")}</h1>
            <p>
              Each location has a menu that`s curated just for them. See what
              new at your Cafesio and You`ll find Cafesio Covent Carden moments.
            </p>
          </div>

          <div className={scss.slider}>
            <div
              className={scss.track}
              style={{ transform: `translateX(-${index * 50}%)` }}
            >
              {images.map((item, i) => (
                <div className={scss.slide} key={i}>
                  <img src={item} alt="img" />
                </div>
              ))}
            </div>
            {index > images.length - 3 ? (
              <button
                className={scss.arrow}
                onClick={prev}
                style={{
                  transform: "rotate(180deg) translate(-45%)",
                  top: "45%",
                  right: "40px",
                }}
              >
                <img src="/image/Frame 38.svg" alt="next" />
              </button>
            ) : (
              <button className={scss.arrow} onClick={next}>
                <img src="/image/Frame 38.svg" alt="next" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
