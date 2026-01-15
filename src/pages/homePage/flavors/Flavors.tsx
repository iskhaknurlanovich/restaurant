// "use client";
import React from "react";
import scss from "./Flavors.module.scss";
import Us from "../../../assets/images/Frame 15.png";
import Us1 from "../../../assets/images/Frame 16.png";
import Image from "next/image";

const Flavors = () => {
  return (
    <div className={scss.flavors}>
      <div className="container">
        <div className={scss.flavors__block}>
          <div className={scss.flavors__block__item}>
            <h4>About</h4>
            <h1>
              A Journey Throught <br />
              Cafesio Flavors
            </h1>
            <Image width={300} height={300} src={Us.src} alt="About Us" />
          </div>
          <div className={scss.flavors__block__item1}>
            <p>
              Try dishes that will open up new tastes for you and delight your{" "}
              <br /> eyes with their appearance. Here you will find a cozy{" "}
              <br /> atmosphere, excellent service and attention to each guest.{" "}
              <br /> Book a table now and enjoy a unique experience of taste{" "}
              <br /> discovery!
            </p>
            <Image width={400} height={300} src={Us1.src} alt="About Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flavors;
