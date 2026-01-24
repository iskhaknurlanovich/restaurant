"use client";
import { FC, MouseEventHandler, useState } from "react";
import scss from "./Slider.module.scss";
import { useRouter } from "next/navigation";
import { itemsCategory } from "../../backend";

interface ISliderProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Slider: FC<ISliderProps> = ({ onClick }) => {
  const [activeCategory, setActiveCategory] = useState("Desserts");
  const [oldCategory, setOldCategory] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    if (category === activeCategory) return;
    setOldCategory(activeCategory);
    setActiveCategory(category);
    setIsAnimating(true);

    setTimeout(() => {
      setOldCategory("");
      setIsAnimating(false);
    }, 400);
  };

  return (
    <div className={scss.menuSlider} onClick={onClick}>
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
        {oldCategory && isAnimating && (
          <ul className={`${scss.menuList} ${scss.slideOut}`}>
            {itemsCategory[oldCategory]?.map((item, idx) => (
              <li key={idx}>
                <div className={scss.menuCard}>
                  <div className={scss.menuHeader}>
                    <span className={scss.title}>{item.name}</span>
                    <span className={scss.dots}></span>
                    <span className={scss.price}>{item.price}</span>
                  </div>
                  <p className={scss.description}>{item.description}</p>
                  <a onClick={() => router.push("#")} className={scss.orderNow}>
                    Order Now
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}

        <ul
          className={`${scss.menuList} ${
            isAnimating ? scss.slideIn : scss.visible
          }`}
        >
          {itemsCategory[activeCategory]?.map((item, idx) => (
            <li key={idx}>
              <div className={scss.menuCard}>
                <div className={scss.menuHeader}>
                  <span className={scss.title}>{item.name}</span>
                  <span className={scss.dots}></span>
                  <span className={scss.price}>{item.price}</span>
                </div>
                <p className={scss.description}>{item.description}</p>
                <a onClick={() => router.push("#")} className={scss.orderNow}>
                  Order Now
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slider;
