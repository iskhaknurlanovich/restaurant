"use client";
import { FC, useState } from "react";
import scss from "./Slider.module.scss";
import { useRouter } from "next/navigation";

export type Item = {
  id: string;
  name: string;
  price: string;
  description?: string;
  imageUrl?: string;
  ingredients?: string[];
};

const itemsCategory: Record<string, Item[]> = {
  Desserts: [
    {
      id: "Desserts-1",
      name: "Cake",
      price: "$12",
      description:
        "Нежный бисквит с воздушным кремом, свежими ягодами и лёгким ванильным ароматом, идеально подходит для вечернего чаепития или праздника.",
    },
    {
      id: "Desserts-2",
      name: "Ice Cream",
      price: "$8",
      description:
        "Классическое мороженое с насыщенным ванильным вкусом, украшенное шоколадной крошкой и фруктами, освежает в жаркий день и радует детей.",
    },
    {
      id: "Desserts-3",
      name: "Pie",
      price: "$10",
      description:
        "Домашний пирог с сочными яблоками, корицей и хрустящей корочкой, подаётся тёплым с шариком мороженого для полного наслаждения.",
    },
    {
      id: "Desserts-4",
      name: "Cheesecake",
      price: "$11",
      description:
        "Сливочный чизкейк на песочной основе с клубничным соусом, мягкой текстурой и лёгкой кислинкой, идеально сочетается с кофе.",
    },
    {
      id: "Desserts-5",
      name: "Brownie",
      price: "$9",
      description:
        "Шоколадный брауни с орехами, карамельной прослойкой и насыщенным вкусом какао, подаётся тёплым с взбитыми сливками или мороженым.",
    },
  ],
  HotDrinks: [
    {
      id: "HotDrinks-1",
      name: "Coffee",
      price: "$5",
      description:
        "Ароматный свежесваренный кофе из отборных зёрен, с насыщенным вкусом и лёгкой горчинкой, бодрит и согревает утром.",
    },
    {
      id: "HotDrinks-2",
      name: "Tea",
      price: "$4",
      description:
        "Чёрный или зелёный чай по выбору, с добавлением лимона, мяты или мёда, идеально подходит для расслабления и беседы.",
    },
    {
      id: "HotDrinks-3",
      name: "Hot Chocolate",
      price: "$6",
      description:
        "Горячий шоколад с молочной пенкой, насыщенным вкусом какао и лёгкой сладостью, особенно популярен в холодное время года.",
    },
    {
      id: "HotDrinks-4",
      name: "Latte",
      price: "$6",
      description:
        "Мягкий латте с ванильным сиропом, бархатной текстурой и нежной молочной пенкой, отлично сочетается с десертами и выпечкой.",
    },
    {
      id: "HotDrinks-5",
      name: "Cappuccino",
      price: "$5",
      description:
        "Капучино с воздушной молочной пенкой, сбалансированным вкусом и ароматом, подаётся с корицей или шоколадной крошкой по желанию.",
    },
  ],
  ColdDrinks: [
    {
      id: "ColdDrinks-1",
      name: "Soda",
      price: "$3",
      description:
        "Газированный освежающий напиток с фруктовым вкусом, идеально утоляет жажду и подходит к любому блюду в жаркую погоду.",
    },
    {
      id: "ColdDrinks-2",
      name: "Juice",
      price: "$4",
      description:
        "Свежевыжатый фруктовый сок из апельсинов, яблок или граната, богат витаминами и идеально подходит для завтрака или перекуса.",
    },
    {
      id: "ColdDrinks-3",
      name: "Milkshake",
      price: "$5",
      description:
        "Молочный коктейль с ванилью, клубникой или шоколадом, густой и сладкий, подаётся с взбитыми сливками и трубочкой.",
    },
    {
      id: "ColdDrinks-4",
      name: "Iced Tea",
      price: "$4",
      description:
        "Холодный чай с лимоном и мятой, освежает и бодрит, идеально подходит для летнего дня и лёгкого перекуса.",
    },
    {
      id: "ColdDrinks-5",
      name: "Lemonade",
      price: "$4",
      description:
        "Домашний лимонад с мятой, лимонным соком и лёгкой сладостью, подаётся со льдом и отлично утоляет жажду.",
    },
  ],
  NationalFoods: [
    {
      id: "NationalFoods-1",
      name: "Plov",
      price: "$15",
      description:
        "Традиционный узбекский плов с ароматным рисом, сочным мясом, морковью и специями, подаётся горячим с салатом.",
    },
    {
      id: "NationalFoods-2",
      name: "Beshbarmak",
      price: "$18",
      description:
        "Казахское блюдо из отварного мяса и лапши, подаётся с бульоном и луком, идеально для семейного ужина.",
    },
    {
      id: "NationalFoods-3",
      name: "Lagman",
      price: "$14",
      description:
        "Уйгурская лапша с мясом, овощами и ароматным соусом, насыщенное блюдо с восточным вкусом и пряностями.",
    },
    {
      id: "NationalFoods-4",
      name: "Manty",
      price: "$13",
      description:
        "Пышные паровые манты с говядиной, луком и специями, подаются с соусом и зеленью, популярны в Центральной Азии.",
    },
    {
      id: "NationalFoods-5",
      name: "Shorpo",
      price: "$12",
      description:
        "Ароматный мясной суп с картофелем, морковью и зеленью, насыщенный бульон согревает и насыщает в холодный день.",
    },
  ],
  EasternCuisine: [
    {
      id: "EasternCuisine-1",
      name: "Sushi",
      price: "$20",
      description:
        "Ассорти роллов и суши с рыбой, овощами и рисом, подаётся с соевым соусом, васаби и маринованным имбирём.",
    },
    {
      id: "EasternCuisine-2",
      name: "Ramen",
      price: "$14",
      description:
        "Японский суп с лапшой, мясом, яйцом и овощами, насыщенный бульон и пряности создают неповторимый вкус.",
    },
    {
      id: "EasternCuisine-3",
      name: "Tempura",
      price: "$13",
      description:
        "Овощи и креветки в хрустящей панировке, обжаренные до золотистой корочки, подаются с соусом и рисом.",
    },
    {
      id: "EasternCuisine-4",
      name: "Gyoza",
      price: "$10",
      description:
        "Жареные японские пельмени с мясной начинкой, подаются с соевым соусом, зеленью и острым маслом.",
    },
    {
      id: "EasternCuisine-5",
      name: "Teriyaki Chicken",
      price: "$16",
      description:
        "Курица в сладком терияки соусе, обжаренная до золотистой корочки, подаётся с рисом и овощами.",
    },
  ],
  FastFoods: [
    {
      id: "FastFoods-1",
      name: "Burger",
      price: "$9",
      description:
        "Классический бургер с сочной котлетой, сыром, овощами и соусом, подаётся в мягкой булке с кунжутом.",
    },
    {
      id: "FastFoods-2",
      name: "Fries",
      price: "$4",
      description:
        "Хрустящий картофель фри, обжаренный до золотистой корочки, подаётся с кетчупом или сырным соусом.",
    },
    {
      id: "FastFoods-3",
      name: "Hot Dog",
      price: "$6",
      description:
        "Сосиска в булке с соусами, овощами и горчицей, популярный перекус для быстрого обеда или прогулки.",
    },
    {
      id: "FastFoods-4",
      name: "Chicken Nuggets",
      price: "$7",
      description:
        "Кусочки курицы в хрустящей панировке, подаются с соусом барбекю или сырным, любимы детьми и взрослыми.",
    },
    {
      id: "FastFoods-5",
      name: "Onion Rings",
      price: "$5",
      description:
        "Луковые кольца в хрустящей корочке, обжаренные до золотистого цвета, подаются с соусом и зеленью.",
    },
  ],
};

const Slider: FC<{ onClick?: any }> = ({ onClick }) => {
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
