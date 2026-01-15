"use client";
import { FC } from "react";
import scss from "./Header.module.scss";
import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";

const Header: FC = () => {
  const router = useRouter();
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <h1 className="logo" onClick={() => router.push("/")}>
            Restaurant
          </h1>
          <nav>
            <p onClick={() => scrollToSection("interior")}>Interior</p>
            <p onClick={() => scrollToSection("about-us")}>About Us</p>
            <p onClick={() => router.push("/menu")}>Menu</p>
            <p onClick={() => scrollToSection("contact-us")}>Contact Us</p>
          </nav>
          <div className={scss.search}>
            <BiSearch className={scss.icon} />
            <input type="text" placeholder="Search" />
          </div>
          <select>
            console.log("🚀 ~ Header ~ select:", select)
            <option>EN</option>
            <option>RU</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
