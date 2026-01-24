"use client";
import { FC, useState } from "react";
import scss from "./Menu.module.scss";
import { Item } from "@/src/shared/ui/menuSlider/Slider";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

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
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Ice_Cream_dessert_02.jpg/330px-Ice_Cream_dessert_02.jpg",
    },
    {
      id: "Desserts-3",
      name: "Pie",
      price: "$10",
      ingredients: ["Мука", "Яблоки", "Сахар", "Корица", "Масло", "Яйцо"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ0itvaiT2og0-bkiFM6ERf6hQtKrMPY_3XA&s",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6hAsDaBNIbLCf6bSe-WyjNc9BkBnTwGS9bw&s",
    },
    {
      id: "Desserts-5",
      name: "Brownie",
      price: "$9",
      ingredients: ["Шоколад", "Мука", "Яйца", "Сахар", "Орехи", "Масло"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScpfrLwLJC2ALDmfksLU8bOzxNQOsapJGeVg&s",
    },
  ],
  HotDrinks: [
    {
      id: "HotDrinks-1",
      name: "Coffee",
      price: "$5",
      ingredients: ["Кофейные зёрна", "Вода", "Сахар", "Молоко", "Корица"],
      imageUrl:
        "https://www.folgerscoffee.com/folgers/articles/35%20Types%20of%20Coffee/5250/image-thumb__5250__responsive_1534_JPEG/Hero-mobile-80percent-1534x1227.a16103c4.jpg",
    },
    {
      id: "HotDrinks-2",
      name: "Tea",
      price: "$4",
      ingredients: ["Чайные листья", "Вода", "Лимон", "Мёд", "Мята"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVcGBIHBqBDMQT-ZchW91RcItcY3bxStKYyw&s",
    },
    {
      id: "HotDrinks-3",
      name: "Hot Chocolate",
      price: "$6",
      ingredients: ["Какао", "Молоко", "Сахар", "Сливки", "Ваниль"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrv9L2FzzaJd_nBbhkU3p7rODxdj0xro_ugw&s",
    },
    {
      id: "HotDrinks-4",
      name: "Latte",
      price: "$6",
      ingredients: ["Эспрессо", "Молоко", "Ванильный сироп", "Сахар", "Сливки"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMmaj03HyBL8eC5g-4uJXvA_XZq_N02p8R2w&s",
    },
    {
      id: "HotDrinks-5",
      name: "Cappuccino",
      price: "$5",
      ingredients: ["Эспрессо", "Молоко", "Сахар", "Какао-порошок", "Корица"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6y3cT-dExLa-dqr59LUuztGugET709U7DxQ&s",
    },
  ],
  ColdDrinks: [
    {
      id: "ColdDrinks-1",
      name: "Soda",
      price: "$3",
      ingredients: ["Вода", "Сахар", "Газ", "Ароматизатор", "Лимонная кислота"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUn7-_CXjQ-3pil-SUBMpI_OeVW2FfnLIZrw&s",
    },
    {
      id: "ColdDrinks-2",
      name: "Juice",
      price: "$4",
      ingredients: ["Апельсин", "Яблоко", "Гранат", "Вода", "Сахар"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKlnKBT4NPVatELDa6vMn3QqwvvYHDFLzEuQ&s",
    },
    {
      id: "ColdDrinks-3",
      name: "Milkshake",
      price: "$5",
      ingredients: ["Молоко", "Мороженое", "Сахар", "Ваниль", "Сливки"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3hS2o-RKmvJnuo4o9PrED_agl21tt9_dylw&s",
    },
    {
      id: "ColdDrinks-4",
      name: "Iced Tea",
      price: "$4",
      ingredients: ["Чай", "Вода", "Лимон", "Мята", "Сахар", "Лёд"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiULPLLae-P0AFdjE8YHUXlpeLninpzkPj7Q&s",
    },
    {
      id: "ColdDrinks-5",
      name: "Lemonade",
      price: "$4",
      ingredients: ["Лимон", "Вода", "Сахар", "Мята", "Лёд"],
      imageUrl:
        "https://myincrediblerecipes.com/wp-content/uploads/2023/02/set-2-Lemonade-15-scaled.jpg",
    },
  ],
  NationalFoods: [
    {
      id: "NationalFoods-1",
      name: "Plov",
      price: "$15",
      ingredients: ["Рис", "Мясо", "Морковь", "Лук", "Масло", "Специи"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyLh3vcLRVNVCJf3NaEDCOix0JF2gDgXN-tQ&s",
    },
    {
      id: "NationalFoods-2",
      name: "Beshbarmak",
      price: "$18",
      ingredients: ["Мясо", "Лапша", "Лук", "Бульон", "Соль", "Перец"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4EVV3Yg3qyBrCdg8awQgUvZw3k8T480xLg&s",
    },
    {
      id: "NationalFoods-3",
      name: "Lagman",
      price: "$14",
      ingredients: ["Лапша", "Мясо", "Перец", "Помидор", "Лук", "Специи"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0wKNuhDkmmW6vUVeGxu3VUUgc9cWgko_FDg&s",
    },
    {
      id: "NationalFoods-4",
      name: "Manty",
      price: "$13",
      ingredients: ["Тесто", "Говядина", "Лук", "Специи", "Масло", "Зелень"],
      imageUrl: "https://ilovekg.com/images/food/manty.webp",
    },
    {
      id: "NationalFoods-5",
      name: "Shorpo",
      price: "$12",
      ingredients: ["Мясо", "Картофель", "Морковь", "Лук", "Зелень", "Специи"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYROvhf8Wc3BEGWZ0bG2n4kherEcFfmRssAw&s",
    },
  ],
  EasternCuisine: [
    {
      id: "EasternCuisine-1",
      name: "Sushi",
      price: "$20",
      ingredients: ["Рис", "Рыба", "Нори", "Огурец", "Авокадо", "Соевый соус"],
      imageUrl:
        "https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt6542458a3d1e8c6f/664cbc3d213dc5f7fd48a20e/origin-of-sushi-hero.jpeg?q=70&width=3840&auto=webp",
    },
    {
      id: "EasternCuisine-2",
      name: "Ramen",
      price: "$14",
      ingredients: ["Лапша", "Бульон", "Мясо", "Яйцо", "Лук", "Специи"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHGnbGrS1t5krpwaPqypVr9KtN_IZn2xCHcA&s",
    },
    {
      id: "EasternCuisine-3",
      name: "Tempura",
      price: "$13",
      ingredients: ["Креветки", "Овощи", "Мука", "Яйцо", "Масло", "Соус"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnqrsA9j12ZGn6NXAg6cVbFLHXgTieYs_IhQ&s",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwnOlM3Su_rIqgaIEoYSIoeVOhSXIi9lQlFw&s",
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
        "https://www.onceuponachef.com/images/2024/01/chicken-teriyaki-1200x1553.jpg",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW2kIchoEqM1E6wfKrDJKVM1dMzOZ_rNPIXA&s",
    },
    {
      id: "FastFoods-3",
      name: "Hot Dog",
      price: "$6",
      ingredients: ["Булка", "Сосиска", "Горчица", "Кетчуп", "Лук", "Огурец"],
      imageUrl:
        "https://www.seriouseats.com/thmb/QJZXQHDXBfTiUSKstQ1uskJc31g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SEA-best-grilled-hot-dogs-recipe-hero-02-9d245c0d43874a3da13a7228682b0dce.jpg",
    },
    {
      id: "FastFoods-4",
      name: "Chicken Nuggets",
      price: "$7",
      ingredients: ["Курица", "Мука", "Яйцо", "Сухари", "Масло", "Соус"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7VbdpVBGTFJRpozTfVSve99hf-P0iShtTMg&s",
    },
    {
      id: "FastFoods-5",
      name: "Onion Rings",
      nameRu: "Луковые кольца",
      nameKg: "Пияз шакекчеси",
      price: "$5",
      ingredients: ["Лук", "Мука", "Яйцо", "Сухари", "Масло", "Соус"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw2fHb0wlhXh4LBqGzePW3l5nVHsgxoeKSdQ&s",
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
        <FaArrowLeft />
      </button>
      <div className={scss.top}>
        <img src="/image/blowLeft.svg" alt="" />
        <h1 className="subtitle">Menu</h1>
      </div>
      <div className={scss.sidebar}>´
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
                  <span className={scss.header}>{item.name}</span>
                  <p className={scss.description}>
                    {item.ingredients?.join(", ")}
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
