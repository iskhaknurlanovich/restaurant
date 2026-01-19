// "use client";
import React from "react";
import scss from "./About.module.scss";

const About = () => {
  return (
    <div className={scss.about} id="about-us">
      <div className="container">
        <div className={scss.about__block}>
          <div className={scss.about__block__item}>
            <div className={scss.title}>
              <div className={scss.top}>
                <img src="/blowLeft.svg" alt="img" />
                <h4 className="subtitle">About</h4>
              </div>
              <h1>
                A Journey Throught <br />
                Cafesio Flavors
              </h1>
            </div>
            <p>
              Try dishes that will open up new tastes for you and delight your{" "}
              eyes with their appearance. Here you will find a cozy atmosphere,
              excellent service and attention to each guest. Book a table now
              and enjoy a unique experience of taste discovery!
            </p>
          </div>
          <div className={scss.about__block__item1}>
            <img src="/Frame 15.png" alt="" />
            <img src="/Frame 16.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
