"use client";
import { useState } from "react";
import scss from "./Slider.module.scss";
import { useRouter } from "next/navigation";
const categories = [
  "Desserts",
  "Hot Drinks",
  "Cold Drinks",
  "National Foods",
  "Eastern cuisine",
  "Fast foods",
];
const itemsCategory: any = {
  Desserts: ["Cake", "Ice Cream", "Pie"],
  "Hot Drinks": ["Coffee", "Tea", "Hot Chocolate"],
  "Cold Drinks": ["Soda", "Juice", "Milkshake"],
  "National Foods": ["Plov", "Beshbarmak"],
  "Eastern cuisine": ["Sushi", "Ramen"],
  "Fast foods": ["Burger", "Fries"],
};

const Slider = () => {
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
    <div className={scss.menuSlider}>
      <aside className={scss.sidebar}>
        {categories.map((item) => (
          <button
            key={item}
            className={item === activeCategory ? scss.active : ""}
            onClick={() => handleCategoryClick(item)}
          >
            {item}
          </button>
        ))}
      </aside>

      <div className={scss.sliderContainer}>
        {oldCategory && isAnimating && (
          <ul className={`${scss.menuList} ${scss.slideOut}`}>
            {itemsCategory[oldCategory].map((item: any, idx: number) => (
              <div key={idx}>
                <li>{item.name}</li>
                <li>{item.discription}</li>
              </div>
            ))}
          </ul>
        )}

        <ul
          className={`${scss.menuList} ${
            isAnimating ? scss.slideIn : scss.visible
          }`}
        >
          {itemsCategory[activeCategory].map((item: any) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {/* <div className={scss.menuCard}>
          <div className={scss.menuHeader}>
            <span className={scss.title}>Beer Brewery</span>
            <span className={scss.dots}></span>
            <span className={scss.price}>$24</span>
          </div>
          <p className={scss.description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            explicabo possimus nesciunt delectus adipisci distinctio cum ex
            voluptas quidem esse.
          </p>
          <a onClick={() => router.push("#")} className={scss.orderNow}>
            Order Now
          </a>
        </div> */}
      </div>
    </div>
  );
};
export default Slider;
