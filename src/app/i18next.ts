"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en_header from "@/public/locales/en/header.json";
import en_banner from "@/public/locales/en/banner.json";
import en_about from "@/public/locales/en/about.json";
import en_bestSellers from "@/public/locales/en/bestSellers.json";
import en_mainMenu from "@/public/locales/en/mainMenu.json";
import en_adress from "@/public/locales/en/adress.json";
import en_footer from "@/public/locales/en/footer.json";
import en_detail from "@/public/locales/en/detail.json";

import ru_header from "@/public/locales/ru/header.json";
import ru_banner from "@/public/locales/ru/banner.json";
import ru_about from "@/public/locales/ru/about.json";
import ru_bestSellers from "@/public/locales/ru/bestSellers.json";
import ru_mainMenu from "@/public/locales/ru/mainMenu.json";
import ru_adress from "@/public/locales/ru/adress.json";
import ru_footer from "@/public/locales/ru/footer.json";
import ru_detail from "@/public/locales/ru/detail.json";

import kg_header from "@/public/locales/kg/header.json";
import kg_banner from "@/public/locales/kg/banner.json";
import kg_about from "@/public/locales/kg/about.json";
import kg_bestSellers from "@/public/locales/kg/bestSellers.json";
import kg_mainMenu from "@/public/locales/kg/mainMenu.json";
import kg_adress from "@/public/locales/kg/adress.json";
import kg_footer from "@/public/locales/kg/footer.json";
import kg_detail from "@/public/locales/kg/detail.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  ns: [
    "header",
    "banner",
    "about",
    "bestSellers",
    "mainMenu",
    "adress",
    "footer",
    "detail",
  ],
  resources: {
    en: {
      header: en_header,
      banner: en_banner,
      about: en_about,
      bestSellers: en_bestSellers,
      mainMenu: en_mainMenu,
      adress: en_adress,
      footer: en_footer,
      detail: en_detail,
    },
    ru: {
      header: ru_header,
      banner: ru_banner,
      about: ru_about,
      bestSellers: ru_bestSellers,
      mainMenu: ru_mainMenu,
      adress: ru_adress,
      footer: ru_footer,
      detail: ru_detail,
    },
    kg: {
      header: kg_header,
      banner: kg_banner,
      about: kg_about,
      bestSellers: kg_bestSellers,
      mainMenu: kg_mainMenu,
      adress: kg_adress,
      footer: kg_footer,
      detail: kg_detail,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
