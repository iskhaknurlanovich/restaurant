"use client";
import { FC, useState, useEffect } from "react";
import scss from "./Detail.module.scss";
import { useParams, useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Item, itemsCategory } from "@/src/shared/backend";

interface Extra {
  name: string;
  nameRu: string;
  nameKg: string;
  price: string;
}

interface Drink {
  name: string;
  nameRu: string;
  nameKg: string;
  price: string;
}

const Detail: FC = () => {
  const params = useParams();
  const id = (params?.id as string) || null;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const { t } = useTranslation("detail");
  const router = useRouter();

  const extras: Extra[] = [
    { name: "Cherry", nameRu: "Вишня", nameKg: "Алча", price: "$0.90" },
    {
      name: "Whipped Cream",
      nameRu: "Взбитые сливки",
      nameKg: "Камкаймак",
      price: "$0.50",
    },
  ];

  const drinks: Drink[] = [
    {
      name: "Coca Cola",
      nameRu: "Кока Кола",
      nameKg: "Кока Кола",
      price: "$0.90",
    },
    {
      name: "Iced Tea",
      nameRu: "Холодный чай",
      nameKg: "Муздак Чай",
      price: "$1.20",
    },
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
    t("categories.c1"),
    t("categories.c2"),
    t("categories.c3"),
    t("categories.c4"),
    t("categories.c5"),
    t("categories.c6"),
  ];

  const { i18n } = useTranslation();
  const lang = i18n.language;

  const getName = (
    item: string | { name: string; nameRu: string; nameKg: string },
  ): string => {
    if (typeof item === "string") return item;
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
  const getAddThings = (item: Extra | Drink): string => {
    switch (lang) {
      case "ru":
        return item.nameRu || item.name;
      case "kg":
        return item.nameKg || item.name;
      default:
        return item.name;
    }
  };

  if (!isMounted || !id) {
    return null;
  }

  return (
    <section className={scss.detail}>
      <div className="container">
        <div className={scss.content}>
          <button onClick={() => router.push("/menu")} className={scss.backBtn}>
            <FaArrowLeft fontSize={12} /> {t("btnText")}
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
                      <h1>{getName(currentItem)}</h1>
                      <div className={scss.ingredients}>
                        <p className={scss.description}>
                          {getIngredients(currentItem.ingredients)?.join(", ")}
                        </p>
                      </div>
                    </div>
                    <p className={scss.price}>{currentItem.price}</p>
                  </div>
                </div>
                <div className={scss.additionaly}>
                  <span className={scss.category}>{currentCategory}</span>
                  <div className={scss.extras}>
                    <h3>{t("extras")}</h3>
                    {extras.map((item, idx) => (
                      <p key={idx}>
                        {getAddThings(item)} <span>{item.price}</span>
                      </p>
                    ))}
                  </div>
                  <div className={scss.drinks}>
                    <h3>{t("drinks")}</h3>
                    {drinks.map((item, idx) => (
                      <p key={idx}>
                        {getAddThings(item)} <span>{item.price}</span>
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
              <h1>{t("simtext")}</h1>
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
                                {getIngredients(currentItem?.ingredients)
                                  ?.slice(0, 5)
                                  .join(", ") + "  ..."}
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
