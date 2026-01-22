"use client";
import { FC, useState } from "react";
import scss from "./Header.module.scss";
import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { GoX } from "react-icons/go";

const Header: FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const [lang, setLang] = useState("EN");
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
            <p onClick={() => scrollToSection("contact-us")}>Contacts</p>
          </nav>
          <div className={scss.search}>
            <BiSearch className={scss.icon} />
            <input type="text" placeholder="Search" />
          </div>
          <select value={lang} onChange={(e) => setLang(e.target.value)}>
            <option value={"EN"}>EN</option>
            <option value={"RU"}>RU</option>
            <option value={"KG"}>KG</option>
          </select>
          <div className={scss.burgerMenu} onClick={() => setSidebar(!sidebar)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <aside
          className={scss.sidebar}
          style={{
            right: sidebar ? "0" : "-400px",
          }}
        >
          <h1
            className="logo"
            onClick={() => {
              router.push("/");
              setSidebar(false);
            }}
          >
            Restaurant
            <GoX className={scss.icon} onClick={() => setSidebar(false)} />
          </h1>
          <nav>
            <p
              onClick={() => {
                scrollToSection("interior");
                setSidebar(false);
              }}
            >
              Interior
            </p>
            <p
              onClick={() => {
                scrollToSection("about-us");
                setSidebar(false);
              }}
            >
              About Us
            </p>
            <p
              onClick={() => {
                router.push("/menu");
                setSidebar(false);
              }}
            >
              Menu
            </p>
            <p
              onClick={() => {
                scrollToSection("contact-us");
                setSidebar(false);
              }}
            >
              Contacts
            </p>
            <div className={scss.switchLang}>
              <p
                className={`${lang === "EN" ? scss.active : ""}`}
                onClick={() => setLang("EN")}
              >
                EN
              </p>
              <p
                className={`${lang === "RU" ? scss.active : ""}`}
                onClick={() => setLang("RU")}
              >
                RU
              </p>
              <p
                className={`${lang === "KG" ? scss.active : ""}`}
                onClick={() => setLang("KG")}
              >
                KG
              </p>
            </div>
          </nav>
        </aside>
      </div>
    </header>
  );
};

export default Header;
