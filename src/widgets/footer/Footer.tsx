"use client";
import { FC } from "react";
import scss from "./Footer.module.scss";
import { RiTelegram2Fill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { useRouter } from "next/navigation";

const Footer: FC = () => {
  const router = useRouter();
  return (
    <footer className={scss.footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.mainFooter}>
            <h2 className="logo">Restaurant</h2>
            <nav>
              <a onClick={() => router.push("#")}>Interior</a>
              <a onClick={() => router.push("#")}>About us</a>
              <a onClick={() => router.push("#")}>Menu</a>
              <a onClick={() => router.push("#")}>Contacts</a>
            </nav>
            <div className={scss.icons}>
              <RiTelegram2Fill className={scss.icon} />
              <RiInstagramFill className={scss.icon} />
            </div>
          </div>
          <hr />
          <p className={scss.info}>c 2023 Motion Study LLC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
