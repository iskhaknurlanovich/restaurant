import React, { FC } from "react";
import scss from "./Switch.module.scss";
import { Item } from "../menuSlider/Slider";

interface IProps {
  handleCategoryClick: (category: string) => void;
  activeCategory: string;
  itemsCategory: Record<string, Item[]>;
}

const Switch: FC<IProps> = ({
  handleCategoryClick,
  activeCategory,
  itemsCategory,
}) => {
  return (
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
  );
};

export default Switch;
