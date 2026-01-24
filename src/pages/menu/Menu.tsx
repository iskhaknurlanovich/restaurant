"use client";
import { FC, useState } from "react";
import scss from "./Menu.module.scss";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Item, itemsCategory } from "@/src/shared/backend";

const Menu: FC = () => {
  const [activeCategory, setActiveCategory] = useState("Desserts");
  const [isAnimating, setIsAnimating] = useState(false);
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    if (category === activeCategory) return;
    setActiveCategory(category);
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 200);
  };

  const getName = (item: Item) => {
    switch (lang) {
      case "ru":
        return item.nameRu || item.name;
      case "kg":
        return item.nameKg || item.name;
      default:
        return item.name;
    }
  };
  const getIngredients = (ingredient: any) => {
    switch (lang) {
      case "ru":
        return ingredient.ru || ingredient.en;
      case "kg":
        return ingredient.kg || ingredient.en;
      default:
        return ingredient.en;
    }
  };

  return (
    <div className={scss.menu}>
      <button onClick={() => router.back()} className={scss.backBtn}>
        <FaArrowLeft />
      </button>
      <div className={scss.top}>
        <img src="/image/blowLeft.svg" alt="" />
        <h1 className="subtitle">Menu</h1>
      </div>
      <div className={scss.sidebar}>
        {Object.keys(itemsCategory).map((item) => (
          <button
            key={item}
            className={item === activeCategory ? scss.active : ""}
            onClick={() => handleCategoryClick(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className={scss.sliderContainer}>
        <div
          className={`${scss.menuList} ${
            isAnimating ? scss.slideIn : scss.visible
          }`}
        >
          {itemsCategory[activeCategory]?.map((item, idx) => (
            <div
              className={scss.menuCard}
              key={idx}
              onClick={() => router.push(`/menu/${item.id}`)}
            >
              <img src={item.imageUrl} alt="" />
              <div className={scss.menuTitle}>
                <div className={scss.info}>
                  <span className={scss.header}>{getName(item)}</span>
                  <p className={scss.description}>
                    {getIngredients(item.ingredients)?.join(", ")}
                  </p>
                </div>
                <span className={scss.price}>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
