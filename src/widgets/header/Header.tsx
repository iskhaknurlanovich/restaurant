"use client";
import { FC, useState } from "react";
import scss from "./Header.module.scss";
import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { GoX } from "react-icons/go";
import { useTranslation } from "react-i18next";

const Header: FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const [lang, setLang] = useState("en");
  const { i18n, t } = useTranslation("header");

  const router = useRouter();
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleChangeLang = (e: any) => {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
  };
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <h1 className="logo" onClick={() => router.push("/")}>
            Restaurant
          </h1>
          <nav>
            <p onClick={() => scrollToSection("interior")}>{t("p1")}</p>
            <p onClick={() => scrollToSection("about-us")}>{t("p2")}</p>
            <p onClick={() => router.push("/menu")}>{t("p3")}</p>
            <p onClick={() => scrollToSection("contact-us")}>{t("p4")}</p>
          </nav>
          <div className={scss.search}>
            <BiSearch className={scss.icon} />
            <input type="text" placeholder={t("search")} />
          </div>
          <select onChange={handleChangeLang}>
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="kg">KG</option>
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
          <h1 className="logo">
            <p
              onClick={() => {
                router.push("/");
                setSidebar(false);
              }}
            >
              Restaurant
            </p>
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
                className={`${lang === "en" ? scss.active : ""}`}
                onClick={() => {
                  setLang("en");
                  i18n.changeLanguage("en");
                }}
              >
                EN
              </p>
              <p
                className={`${lang === "ru" ? scss.active : ""}`}
                onClick={() => {
                  setLang("ru");
                  i18n.changeLanguage("ru");
                }}
              >
                RU
              </p>
              <p
                className={`${lang === "kg" ? scss.active : ""}`}
                onClick={() => {
                  setLang("kg");
                  i18n.changeLanguage("kg");
                }}
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
