"use client";
import { FC, useState } from "react";
import scss from "./Menu.module.scss";
import Switch from "@/src/shared/ui/switchside/Switch";
import { Item } from "@/src/shared/ui/menuSlider/Slider";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const itemsCategory: Record<string, Item[]> = {
  Desserts: [
    {
      name: "Cake",
      price: "$12",
      ingredients: ["Мука", "Яйца", "Сахар", "Молоко", "Ваниль", "Ягоды"],
      imageUrl:
        "https://www.tasteofhome.com/wp-content/uploads/2025/07/30-Summer-Desserts-That-Are-No-Bake-and-Oh-So-Easy_TOHcom23_27515_P2_MD_03_22_6b.jpg",
    },
    {
      name: "Ice Cream",
      price: "$8",
      ingredients: [
        "Молоко",
        "Сливки",
        "Сахар",
        "Ваниль",
        "Фрукты",
        "Шоколадная крошка",
      ],
      imageUrl:
        "https://www.tasteofhome.com/wp-content/uploads/2025/07/30-Summer-Desserts-That-Are-No-Bake-and-Oh-So-Easy_TOHcom23_27515_P2_MD_03_22_6b.jpg",
    },
    {
      name: "Pie",
      price: "$10",
      ingredients: ["Мука", "Яблоки", "Сахар", "Корица", "Масло", "Яйцо"],
      imageUrl:
        "https://www.tasteofhome.com/wp-content/uploads/2025/07/30-Summer-Desserts-That-Are-No-Bake-and-Oh-So-Easy_TOHcom23_27515_P2_MD_03_22_6b.jpg",
    },
    {
      name: "Cheesecake",
      price: "$11",
      ingredients: [
        "Сливочный сыр",
        "Сахар",
        "Яйца",
        "Песочное печенье",
        "Масло",
        "Клубника",
      ],
      imageUrl:
        "https://www.tasteofhome.com/wp-content/uploads/2025/07/30-Summer-Desserts-That-Are-No-Bake-and-Oh-So-Easy_TOHcom23_27515_P2_MD_03_22_6b.jpg",
    },
    {
      name: "Brownie",
      price: "$9",
      ingredients: ["Шоколад", "Мука", "Яйца", "Сахар", "Орехи", "Масло"],
      imageUrl:
        "https://www.tasteofhome.com/wp-content/uploads/2025/07/30-Summer-Desserts-That-Are-No-Bake-and-Oh-So-Easy_TOHcom23_27515_P2_MD_03_22_6b.jpg",
    },
  ],
  HotDrinks: [
    {
      name: "Coffee",
      price: "$5",
      ingredients: ["Кофейные зёрна", "Вода", "Сахар", "Молоко", "Корица"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh1nGlJLvsS3HkT5DAdVXMf3RMtNyVICBTEg&s",
    },
    {
      name: "Tea",
      price: "$4",
      ingredients: ["Чайные листья", "Вода", "Лимон", "Мёд", "Мята"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh1nGlJLvsS3HkT5DAdVXMf3RMtNyVICBTEg&s",
    },
    {
      name: "Hot Chocolate",
      price: "$6",
      ingredients: ["Какао", "Молоко", "Сахар", "Сливки", "Ваниль"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh1nGlJLvsS3HkT5DAdVXMf3RMtNyVICBTEg&s",
    },
    {
      name: "Latte",
      price: "$6",
      ingredients: ["Эспрессо", "Молоко", "Ванильный сироп", "Сахар", "Сливки"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh1nGlJLvsS3HkT5DAdVXMf3RMtNyVICBTEg&s",
    },
    {
      name: "Cappuccino",
      price: "$5",
      ingredients: ["Эспрессо", "Молоко", "Сахар", "Какао-порошок", "Корица"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh1nGlJLvsS3HkT5DAdVXMf3RMtNyVICBTEg&s",
    },
  ],
  ColdDrinks: [
    {
      name: "Soda",
      price: "$3",
      ingredients: ["Вода", "Сахар", "Газ", "Ароматизатор", "Лимонная кислота"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUn7-_CXjQ-3pil-SUBMpI_OeVW2FfnLIZrw&s",
    },
    {
      name: "Juice",
      price: "$4",
      ingredients: ["Апельсин", "Яблоко", "Гранат", "Вода", "Сахар"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUn7-_CXjQ-3pil-SUBMpI_OeVW2FfnLIZrw&s",
    },
    {
      name: "Milkshake",
      price: "$5",
      ingredients: ["Молоко", "Мороженое", "Сахар", "Ваниль", "Сливки"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUn7-_CXjQ-3pil-SUBMpI_OeVW2FfnLIZrw&s",
    },
    {
      name: "Iced Tea",
      price: "$4",
      ingredients: ["Чай", "Вода", "Лимон", "Мята", "Сахар", "Лёд"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUn7-_CXjQ-3pil-SUBMpI_OeVW2FfnLIZrw&s",
    },
    {
      name: "Lemonade",
      price: "$4",
      ingredients: ["Лимон", "Вода", "Сахар", "Мята", "Лёд"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUn7-_CXjQ-3pil-SUBMpI_OeVW2FfnLIZrw&s",
    },
  ],
  NationalFoods: [
    {
      name: "Plov",
      price: "$15",
      ingredients: ["Рис", "Мясо", "Морковь", "Лук", "Масло", "Специи"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwneP6Rg-m8nMKIsLkZGOjWHDREWUUgn6mw&s",
    },
    {
      name: "Beshbarmak",
      price: "$18",
      ingredients: ["Мясо", "Лапша", "Лук", "Бульон", "Соль", "Перец"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwneP6Rg-m8nMKIsLkZGOjWHDREWUUgn6mw&s",
    },
    {
      name: "Lagman",
      price: "$14",
      ingredients: ["Лапша", "Мясо", "Перец", "Помидор", "Лук", "Специи"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwneP6Rg-m8nMKIsLkZGOjWHDREWUUgn6mw&s",
    },
    {
      name: "Manty",
      price: "$13",
      ingredients: ["Тесто", "Говядина", "Лук", "Специи", "Масло", "Зелень"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwneP6Rg-m8nMKIsLkZGOjWHDREWUUgn6mw&s",
    },
    {
      name: "Shorpo",
      price: "$12",
      ingredients: ["Мясо", "Картофель", "Морковь", "Лук", "Зелень", "Специи"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwneP6Rg-m8nMKIsLkZGOjWHDREWUUgn6mw&s",
    },
  ],
  EasternCuisine: [
    {
      name: "Sushi",
      price: "$20",
      ingredients: ["Рис", "Рыба", "Нори", "Огурец", "Авокадо", "Соевый соус"],
      imageUrl:
        "https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt6542458a3d1e8c6f/664cbc3d213dc5f7fd48a20e/origin-of-sushi-hero.jpeg?q=70&width=3840&auto=webp",
    },
    {
      name: "Ramen",
      price: "$14",
      ingredients: ["Лапша", "Бульон", "Мясо", "Яйцо", "Лук", "Специи"],
      imageUrl:
        "https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt6542458a3d1e8c6f/664cbc3d213dc5f7fd48a20e/origin-of-sushi-hero.jpeg?q=70&width=3840&auto=webp",
    },
    {
      name: "Tempura",
      price: "$13",
      ingredients: ["Креветки", "Овощи", "Мука", "Яйцо", "Масло", "Соус"],
      imageUrl:
        "https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt6542458a3d1e8c6f/664cbc3d213dc5f7fd48a20e/origin-of-sushi-hero.jpeg?q=70&width=3840&auto=webp",
    },
    {
      name: "Gyoza",
      price: "$10",
      ingredients: [
        "Тесто",
        "Свинина",
        "Лук",
        "Чеснок",
        "Имбирь",
        "Соевый соус",
      ],
      imageUrl:
        "https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt6542458a3d1e8c6f/664cbc3d213dc5f7fd48a20e/origin-of-sushi-hero.jpeg?q=70&width=3840&auto=webp",
    },
    {
      name: "Teriyaki Chicken",
      price: "$16",
      ingredients: [
        "Курица",
        "Соевый соус",
        "Сахар",
        "Имбирь",
        "Чеснок",
        "Рис",
      ],
      imageUrl:
        "https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt6542458a3d1e8c6f/664cbc3d213dc5f7fd48a20e/origin-of-sushi-hero.jpeg?q=70&width=3840&auto=webp",
    },
  ],
  FastFoods: [
    {
      name: "Burger",
      price: "$9",
      ingredients: [
        "Булка",
        "Говяжья котлета",
        "Сыр",
        "Помидор",
        "Огурец",
        "Соус",
      ],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0cFleHkr83XTp-0AALLRqiAOs7nZxme-OVQ&s",
    },
    {
      name: "Fries",
      price: "$4",
      ingredients: ["Картофель", "Масло", "Соль", "Перец", "Соус"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0cFleHkr83XTp-0AALLRqiAOs7nZxme-OVQ&s",
    },
    {
      name: "Hot Dog",
      price: "$6",
      ingredients: ["Булка", "Сосиска", "Горчица", "Кетчуп", "Лук", "Огурец"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0cFleHkr83XTp-0AALLRqiAOs7nZxme-OVQ&s",
    },
    {
      name: "Chicken Nuggets",
      price: "$7",
      ingredients: ["Курица", "Мука", "Яйцо", "Сухари", "Масло", "Соус"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0cFleHkr83XTp-0AALLRqiAOs7nZxme-OVQ&s",
    },
    {
      name: "Onion Rings",
      price: "$5",
      ingredients: ["Лук", "Мука", "Яйцо", "Сухари", "Масло", "Соус"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0cFleHkr83XTp-0AALLRqiAOs7nZxme-OVQ&s",
    },
  ],
};

const Menu: FC = () => {
  const [activeCategory, setActiveCategory] = useState("Desserts");
  const [isAnimating, setIsAnimating] = useState(false);

  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    if (category === activeCategory) return;
    setActiveCategory(category);
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 200);
  };
  return (
    <div className={scss.menu}>
      <button onClick={() => router.back()} className={scss.backBtn}>
        <FaArrowLeft fontSize={12} />
        back
      </button>
      <Switch
        handleCategoryClick={handleCategoryClick}
        itemsCategory={itemsCategory}
        activeCategory={activeCategory}
      />

      <div className={scss.sliderContainer}>
        <ul
          className={`${scss.menuList} ${
            isAnimating ? scss.slideIn : scss.visible
          }`}
        >
          {itemsCategory[activeCategory]?.map((item, idx) => (
            <li key={idx}>
              <div className={scss.menuCard}>
                <img src={item.imageUrl} alt="" />
                <div className={scss.menuTitle}>
                  <div className={scss.info}>
                    <span className={scss.header}>{item.name}</span>
                    <p className={scss.description}>
                      {item.ingredients?.join(", ")}
                    </p>
                  </div>
                  <span className={scss.price}>{item.price}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
