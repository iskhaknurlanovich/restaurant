"use client";
import React, { useState } from "react";
import scss from "./BestSellers.module.scss";

const images = [
  "/Frame 19.svg",
  "/Frame 421.svg",
  "/Frame 20.svg",
  "/Frame 422.svg",
  "/Frame 421.svg",
];

const BestSellers = () => {
  const [index, setIndex] = useState(2);

  const next = () => {
    if (index < images.length - 2) {
      setIndex(index + 1);
    }
  };

  return (
    <div className={scss.best__sellers}>
      <div className="container">
        <div className={scss.best__sellers__block}>
          <div className={scss.items__block}>
            <div className={scss.best__sellers__item}>
              <img src="/blowLeft.svg" alt="img" />
              <h1>Best Sellers</h1>
            </div>
            <h1>You Only Reserve Exception</h1>
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
              
              {images.map((src, i) => (
                <div className={scss.slide} key={i}>
                  <img src={src} alt="img" />
                </div>
              ))}
            </div>

            <button className={scss.arrow} onClick={next}>
              <img src="/Frame 38.svg" alt="next" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
