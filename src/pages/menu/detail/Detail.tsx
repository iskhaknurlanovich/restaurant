"use client";
import { FC } from "react";
import scss from "./Detail.module.scss";
import { useParams, useRouter } from "next/navigation";
import { Item } from "@/src/shared/ui/menuSlider/Slider";
import { FaArrowLeft } from "react-icons/fa";

const Detail: FC = () => {
  const { id }: any = useParams();
  const router = useRouter();
  const itemsCategory: Record<string, Item[]> = {
    Desserts: [
      {
        id: "Desserts-1",
        name: "Cake",
        price: "$12",
        ingredients: ["Мука", "Яйца", "Сахар", "Молоко", "Ваниль", "Ягоды"],
        imageUrl:
          "https://www.tasteofhome.com/wp-content/uploads/2025/07/30-Summer-Desserts-That-Are-No-Bake-and-Oh-So-Easy_TOHcom23_27515_P2_MD_03_22_6b.jpg",
      },
      {
        id: "Desserts-2",
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
        id: "Desserts-3",
        name: "Pie",
        price: "$10",
        ingredients: ["Мука", "Яблоки", "Сахар", "Корица", "Масло", "Яйцо"],
        imageUrl:
          "https://www.tasteofhome.com/wp-content/uploads/2025/07/30-Summer-Desserts-That-Are-No-Bake-and-Oh-So-Easy_TOHcom23_27515_P2_MD_03_22_6b.jpg",
      },
      {
        id: "Desserts-4",
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
        id: "Desserts-5",
        name: "Brownie",
        price: "$9",
        ingredients: ["Шоколад", "Мука", "Яйца", "Сахар", "Орехи", "Масло"],
        imageUrl:
          "https://www.tasteofhome.com/wp-content/uploads/2025/07/30-Summer-Desserts-That-Are-No-Bake-and-Oh-So-Easy_TOHcom23_27515_P2_MD_03_22_6b.jpg",
      },
    ],
    HotDrinks: [
      {
        id: "HotDrinks-1",
        name: "Coffee",
        price: "$5",
        ingredients: ["Кофейные зёрна", "Вода", "Сахар", "Молоко", "Корица"],
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh1nGlJLvsS3HkT5DAdVXMf3RMtNyVICBTEg&s",
      },
      {
        id: "HotDrinks-2",
        name: "Tea",
        price: "$4",
        ingredients: ["Чайные листья", "Вода", "Лимон", "Мёд", "Мята"],
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh1nGlJLvsS3HkT5DAdVXMf3RMtNyVICBTEg&s",
      },
      {
        id: "HotDrinks-3",
        name: "Hot Chocolate",
        price: "$6",
        ingredients: ["Какао", "Молоко", "Сахар", "Сливки", "Ваниль"],
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh1nGlJLvsS3HkT5DAdVXMf3RMtNyVICBTEg&s",
      },
      {
        id: "HotDrinks-4",
        name: "Latte",
        price: "$6",
        ingredients: [
          "Эспрессо",
          "Молоко",
          "Ванильный сироп",
          "Сахар",
          "Сливки",
        ],
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh1nGlJLvsS3HkT5DAdVXMf3RMtNyVICBTEg&s",
      },
      {
        id: "HotDrinks-5",
        name: "Cappuccino",
        price: "$5",
        ingredients: ["Эспрессо", "Молоко", "Сахар", "Какао-порошок", "Корица"],
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh1nGlJLvsS3HkT5DAdVXMf3RMtNyVICBTEg&s",
      },
    ],
    ColdDrinks: [
      {
        id: "ColdDrinks-1",
        name: "Soda",
        price: "$3",
        ingredients: [
          "Вода",
          "Сахар",
          "Газ",
          "Ароматизатор",
          "Лимонная кислота",
        ],
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUn7-_CXjQ-3pil-SUBMpI_OeVW2FfnLIZrw&s",
      },
      {
        id: "ColdDrinks-2",
        name: "Juice",
        price: "$4",
        ingredients: ["Апельсин", "Яблоко", "Гранат", "Вода", "Сахар"],
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUn7-_CXjQ-3pil-SUBMpI_OeVW2FfnLIZrw&s",
      },
      {
        id: "ColdDrinks-3",
        name: "Milkshake",
        price: "$5",
        ingredients: ["Молоко", "Мороженое", "Сахар", "Ваниль", "Сливки"],
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUn7-_CXjQ-3pil-SUBMpI_OeVW2FfnLIZrw&s",
      },
      {
        id: "ColdDrinks-4",
        name: "Iced Tea",
        price: "$4",
        ingredients: ["Чай", "Вода", "Лимон", "Мята", "Сахар", "Лёд"],
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUn7-_CXjQ-3pil-SUBMpI_OeVW2FfnLIZrw&s",
      },
      {
        id: "ColdDrinks-5",
        name: "Lemonade",
        price: "$4",
        ingredients: ["Лимон", "Вода", "Сахар", "Мята", "Лёд"],
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUn7-_CXjQ-3pil-SUBMpI_OeVW2FfnLIZrw&s",
      },
    ],
    NationalFoods: [
      {
        id: "NationalFoods-1",
        name: "Plov",
        price: "$15",
        ingredients: ["Рис", "Мясо", "Морковь", "Лук", "Масло", "Специи"],
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwneP6Rg-m8nMKIsLkZGOjWHDREWUUgn6mw&s",
      },
      {
        id: "NationalFoods-2",
        name: "Beshbarmak",
        price: "$18",
        ingredients: ["Мясо", "Лапша", "Лук", "Бульон", "Соль", "Перец"],
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwneP6Rg-m8nMKIsLkZGOjWHDREWUUgn6mw&s",
      },
      {
        id: "NationalFoods-3",
        name: "Lagman",
        price: "$14",
        ingredients: ["Лапша", "Мясо", "Перец", "Помидор", "Лук", "Специи"],
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwneP6Rg-m8nMKIsLkZGOjWHDREWUUgn6mw&s",
      },
      {
        id: "NationalFoods-4",
        name: "Manty",
        price: "$13",
        ingredients: ["Тесто", "Говядина", "Лук", "Специи", "Масло", "Зелень"],
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwneP6Rg-m8nMKIsLkZGOjWHDREWUUgn6mw&s",
      },
      {
        id: "NationalFoods-5",
        name: "Shorpo",
        price: "$12",
        ingredients: [
          "Мясо",
          "Картофель",
          "Морковь",
          "Лук",
          "Зелень",
          "Специи",
        ],
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwneP6Rg-m8nMKIsLkZGOjWHDREWUUgn6mw&s",
      },
    ],
    EasternCuisine: [
      {
        id: "EasternCuisine-1",
        name: "Sushi",
        price: "$20",
        ingredients: [
          "Рис",
          "Рыба",
          "Нори",
          "Огурец",
          "Авокадо",
          "Соевый соус",
        ],
        imageUrl:
          "https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt6542458a3d1e8c6f/664cbc3d213dc5f7fd48a20e/origin-of-sushi-hero.jpeg?q=70&width=3840&auto=webp",
      },
      {
        id: "EasternCuisine-2",
        name: "Ramen",
        price: "$14",
        ingredients: ["Лапша", "Бульон", "Мясо", "Яйцо", "Лук", "Специи"],
        imageUrl:
          "https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt6542458a3d1e8c6f/664cbc3d213dc5f7fd48a20e/origin-of-sushi-hero.jpeg?q=70&width=3840&auto=webp",
      },
      {
        id: "EasternCuisine-3",
        name: "Tempura",
        price: "$13",
        ingredients: ["Креветки", "Овощи", "Мука", "Яйцо", "Масло", "Соус"],
        imageUrl:
          "https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt6542458a3d1e8c6f/664cbc3d213dc5f7fd48a20e/origin-of-sushi-hero.jpeg?q=70&width=3840&auto=webp",
      },
      {
        id: "EasternCuisine-4",
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
        id: "EasternCuisine-5",
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
        id: "FastFoods-1",
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
        id: "FastFoods-2",
        name: "Fries",
        price: "$4",
        ingredients: ["Картофель", "Масло", "Соль", "Перец", "Соус"],
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0cFleHkr83XTp-0AALLRqiAOs7nZxme-OVQ&s",
      },
      {
        id: "FastFoods-3",
        name: "Hot Dog",
        price: "$6",
        ingredients: ["Булка", "Сосиска", "Горчица", "Кетчуп", "Лук", "Огурец"],
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0cFleHkr83XTp-0AALLRqiAOs7nZxme-OVQ&s",
      },
      {
        id: "FastFoods-4",
        name: "Chicken Nuggets",
        price: "$7",
        ingredients: ["Курица", "Мука", "Яйцо", "Сухари", "Масло", "Соус"],
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0cFleHkr83XTp-0AALLRqiAOs7nZxme-OVQ&s",
      },
      {
        id: "FastFoods-5",
        name: "Onion Rings",
        price: "$5",
        ingredients: ["Лук", "Мука", "Яйцо", "Сухари", "Масло", "Соус"],
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0cFleHkr83XTp-0AALLRqiAOs7nZxme-OVQ&s",
      },
    ],
  };
  const extras: { name: string; price: string }[] = [
    { name: "Cherry", price: "$0.90" },
    { name: "Whipped Cream", price: "$0.50" },
  ];
  const drinks: { name: string; price: string }[] = [
    { name: "Coca Cola", price: "$0.90" },
    { name: "Iced Tea", price: "$1.20" },
  ];

  let currentItem: Item | null = null;
  for (const i in itemsCategory) {
    const item = itemsCategory[i].find((item) => item.id === id);
    if (item) {
      currentItem = item;
      break;
    }
  }

  const currentCategory = Object.keys(itemsCategory).find((key) =>
    itemsCategory[key].some((item) => item.id === id),
  );

  const switchData = [
    "Deserts",
    "HotDrinks",
    "ColdDrinks",
    "NationalFoods",
    "EasternCuisine",
    "FastFoods",
  ];
  return (
    <section className={scss.detail}>
      <div className="container">
        <div className={scss.content}>
          <button onClick={() => router.push("/menu")} className={scss.backBtn}>
            <FaArrowLeft fontSize={12} /> Menu
          </button>
          <div className={scss.sidebar}>
            {switchData.map((item) => (
              <button onClick={() => router.push("/menu")} key={item}>
                {item}
              </button>
            ))}
          </div>
          <div className={scss.leftPunct}>
            {currentItem ? (
              <div className={scss.mainProduct}>
                <div className={scss.title}>
                  <img src={currentItem.imageUrl} alt={currentItem.name} />
                  <div className={scss.productInfo}>
                    <div className={scss.class}>
                      <h1>{currentItem.name}</h1>
                      <div className={scss.ingredients}>
                        <p className={scss.description}>
                          {currentItem.ingredients?.join(", ")}
                        </p>
                      </div>
                    </div>
                    <p className={scss.price}>{currentItem.price}</p>
                  </div>
                </div>
                <div className={scss.additionaly}>
                  <span className={scss.category}>{currentCategory}</span>
                  <div className={scss.extras}>
                    <h3>Extras</h3>
                    {extras.map((item, idx) => (
                      <p key={idx}>
                        {item.name} <span>{item.price}</span>
                      </p>
                    ))}
                  </div>
                  <div className={scss.drinks}>
                    <h3>Drinks</h3>
                    {drinks.map((item, idx) => (
                      <p key={idx}>
                        {item.name} <span>{item.price}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="container">
                <p>Товар не найден</p>
              </div>
            )}
            <div className={scss.similarProducts}>
              <h1>Similar gueries</h1>
              <div className={scss.menuList}>
                {currentCategory &&
                  itemsCategory[currentCategory]
                    .filter((item) => item !== currentItem)
                    ?.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => router.push(`/menu/${item.id}`)}
                      >
                        <div className={scss.menuCard}>
                          <img src={item.imageUrl} alt="" />
                          <div className={scss.menuTitle}>
                            <div className={scss.info}>
                              <span className={scss.header}>{item.name}</span>
                              <p className={scss.description}>
                                {item.ingredients?.slice(0, 5).join(", ") +
                                  "  ..."}
                              </p>
                            </div>
                            <span className={scss.price}>{item.price}</span>
                          </div>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
