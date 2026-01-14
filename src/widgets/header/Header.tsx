"use client";

import { FC } from "react";
import Link from "next/link";
import scss from "./Header.module.scss";
import { CiSearch } from "react-icons/ci";

const Header: FC = () => {
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.blok}>
            <h1 className={scss.logo}>Restaurant</h1>

            <nav className={scss.nav}>
              <Link href="/interior">Interior</Link>
              <Link href="/about">About Us</Link>
              <Link href="/menu">Menu</Link>
              <Link href="/contacts">Contacts</Link>
            </nav>
            <div className={scss.searh}>
              <CiSearch size={24} />
            </div>

            <input type="text" placeholder="   Search" />
            <select name="language" id="language">
              <option value="en">English</option>
              <option value="ru">Русский</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
