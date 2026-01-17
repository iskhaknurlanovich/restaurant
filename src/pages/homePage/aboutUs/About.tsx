// "use client";
import React from "react";
import scss from "./About.module.scss";
import Us from "../../../assets/images/Frame 15.png";
import Us1 from "../../../assets/images/Frame 16.png";
import Image from "next/image";

const About = () => {
  return (
    <div className={scss.about} id="about-us">
      <div className="container">
        <div className={scss.about__block}>
          <div className={scss.about__block__item}>
            <div className={scss.top}>
              <img src="/blowLeft.svg" alt="img" />
              <h4 className="subtitle">About</h4>
            </div>
            <h1>
              A Journey Throught <br />
              Cafesio Flavors
            </h1>
            <Image width={528} height={303} src={Us.src} alt="About Us" />
          </div>
          <div className={scss.about__block__item1}>
            <p>
              Try dishes that will open up new tastes for you and delight your{" "}
              eyes with their appearance. Here you will find a cozy atmosphere,
              excellent service and attention to each guest. Book a table now
              and enjoy a unique experience of taste discovery!
            </p>
            <Image width={528} height={303} src={Us1.src} alt="About Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
