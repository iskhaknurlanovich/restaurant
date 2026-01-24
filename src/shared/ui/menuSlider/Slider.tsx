"use client";
import { FC, useState } from "react";
import scss from "./Slider.module.scss";
import { useRouter } from "next/navigation";

export type Item = {
  id: string;
  name: string;
  nameRu: string;
  nameKg: string;
  price: string;
  description?: string;
  descriptionEn?: string;
  descriptionKG?: string;
  imageUrl?: string;
  ingredients?: string[];
};

const itemsCategory: Record<string, Item[]> = {
  Desserts: [
    {
      id: "Desserts-1",
      name: "Cake",
      nameRu: "Торт",
      nameKg: "Торт",
      price: "$12",
      description:
        "Нежный бисквит с воздушным кремом, свежими ягодами и лёгким ванильным ароматом, идеально подходит для вечернего чаепития или праздника.",
    },
    {
      id: "Desserts-2",
      name: "Ice Cream",
      nameKg: "Балмуздактар",
      nameRu: "Мороженное",
      price: "$8",
      description:
        "Классическое мороженое с насыщенным ванильным вкусом, украшенное шоколадной крошкой и фруктами, освежает в жаркий день и радует детей.",
      descriptionEn:
        "Classic ice cream with a rich vanilla flavor, decorated with chocolate chips and fruit, is refreshing on a hot day and a delight for children.",
      descriptionKG:
        "Классикалык ваниль даамындагы балмуздак, шоколад тиштүүлөрү жана жемиштер менен кооздолгон, ысык күндө сергитет жана балдарды кубандырат.",
    },
    {
      id: "Desserts-3",
      name: "Pie",
      nameRu: "Пирог",
      nameKg: "Торт",
      price: "$10",
      description:
        "Домашний пирог с сочными яблоками, корицей и хрустящей корочкой, подаётся тёплым с шариком мороженого для полного наслаждения.",
      descriptionEn:
        "Homemade pie with juicy apples, cinnamon and a crispy crust, served warm with a scoop of ice cream for the ultimate indulgence.",
      descriptionKG:
        "Ширели алма, корица жана кытырак кабыгы бар үй пирогу, эң сонун ырахаттануу үчүн бир кашык балмуздак менен жылуу берилет.",
    },
    {
      id: "Desserts-4",
      name: "Cheesecake",
      nameRu: "Чизкейк",
      nameKg: "Чизкейк",
      price: "$11",
      description:
        "Сливочный чизкейк на песочной основе с клубничным соусом, мягкой текстурой и лёгкой кислинкой, идеально сочетается с кофе.",
      descriptionEn:
        "A creamy cheesecake with a shortbread base and strawberry sauce, soft texture and a slight tartness, pairs perfectly with coffee.",
      descriptionKG:
        "Песоктун негизиндеги каймактуу чизкейк клубника соусу менен, жумшак текстурасы жана жеңил ачуу даамы менен, кофе менен мыкты айкалышат.",
    },
    {
      id: "Desserts-5",
      name: "Brownie",
      nameRu: "Пирожное",
      nameKg: "торттор",
      price: "$9",
      description:
        "Шоколадный брауни с орехами, карамельной прослойкой и насыщенным вкусом какао, подаётся тёплым с взбитыми сливками или мороженым.",
      descriptionEn:
        "Chocolate brownie with nuts, caramel layer, and rich cocoa flavor, served warm with whipped cream or ice cream.",
      descriptionKG:
        "Жаңгагы бар шоколаддуу брауни, карамель катмары жана куурулган какаонун терең даамы менен, жылуу абалда каймак же балмуздак менен берилет.",
    },
  ],
  HotDrinks: [
    {
      id: "HotDrinks-1",
      name: "Coffee",
      nameRu: "Кофе",
      nameKg: "Кофелер",
      price: "$5",
      description:
        "Ароматный свежесваренный кофе из отборных зёрен, с насыщенным вкусом и лёгкой горчинкой, бодрит и согревает утром.",
      descriptionEn:
        "Aromatic freshly brewed coffee from selected beans, with a rich flavor and a slight bitterness, invigorates and warms you in the morning.",
      descriptionKG:
        "Тандалган уруктан жаңыдан кайнатылган жыты жагымдуу кофе, толук даамы жана жеңил ачуу тийүүсү менен, эртең менен сергитет жана жылуу кармайт.",
    },
    {
      id: "HotDrinks-2",
      name: "Tea",
      nameRu: "чай",
      nameKg: "чайлар",
      price: "$4",
      description:
        "Чёрный или зелёный чай по выбору, с добавлением лимона, мяты или мёда, идеально подходит для расслабления и беседы.",
      descriptionEn:
        "Black or green tea of your choice, with the addition of lemon, mint, or honey, is perfect for relaxation and conversation.",
      descriptionKG:
        "Тандоого жараша кара же жашыл чай, лимон, жалбыз же бал кошулуп, эс алуу жана баарлашуу үчүн эң сонун ылайыктуу.",
    },
    {
      id: "HotDrinks-3",
      name: "Hot Chocolate",
      nameRu: "Горячий шоколад",
      nameKg: "Ысык шоколад",
      price: "$6",
      description:
        "Горячий шоколад с молочной пенкой, насыщенным вкусом какао и лёгкой сладостью, особенно популярен в холодное время года.",
      descriptionEn:
        "Hot chocolate with milk foam, a rich cocoa flavor, and a light sweetness is especially popular during the cold season.",
      descriptionKG:
        "Сүт көбүгү менен ысык шоколад, какаонун терең даамы жана жеңил таттуулугу менен, өзгөчө суук мезгилде абдан популярдуу.",
    },
    {
      id: "HotDrinks-4",
      name: "Latte",
      nameRu: "Латте",
      nameKg: "Ысык шоколад",
      price: "$6",
      description:
        "Мягкий латте с ванильным сиропом, бархатной текстурой и нежной молочной пенкой, отлично сочетается с десертами и выпечкой.",
      descriptionEn:
        "Soft latte with vanilla syrup, velvety texture, and delicate milk foam, pairs perfectly with desserts and pastries.",
      descriptionKG:
        "Ваниль сиропу менен жумшак латте, бархат текстурасы жана жумшак сүт көбүгү менен, десерттер жана бышырмалар менен мыкты айкалышат.",
    },
    {
      id: "HotDrinks-5",
      name: "Cappuccino",
      nameRu: "Капучино",
      nameKg: "Капучино",
      price: "$5",
      description:
        "Капучино с воздушной молочной пенкой, сбалансированным вкусом и ароматом, подаётся с корицей или шоколадной крошкой по желанию.",
      descriptionEn:
        "Cappuccino with airy milk foam, balanced flavor and aroma, served with cinnamon or chocolate chips upon request.",
      descriptionKG:
        "Капучино аба менен толтурулган сүт көбүгү, тең салмактуу даамы жана жыты менен, каалаган учурда дарчин же шоколад тортчосу менен берилет.",
    },
  ],
  ColdDrinks: [
    {
      id: "ColdDrinks-1",
      name: "Soda",
      nameRu: "Сода",
      nameKg: "Сода",
      price: "$3",
      description:
        "Газированный освежающий напиток с фруктовым вкусом, идеально утоляет жажду и подходит к любому блюду в жаркую погоду.",
      descriptionEn:
        "A carbonated, refreshing drink with a fruity flavor, it perfectly quenches thirst and goes well with any dish in hot weather.",
      descriptionKG:
        "Мөмө-жемиш даамы бар газдалган, сергитүүчү суусундук, ал чаңкоону эң сонун кандырат жана ысык аба ырайында каалаган тамакка жарайт.",
    },
    {
      id: "ColdDrinks-2",
      name: "Juice",
      nameRu: "Сок",
      nameKg: "Сок",
      price: "$4",
      description:
        "Свежевыжатый фруктовый сок из апельсинов, яблок или граната, богат витаминами и идеально подходит для завтрака или перекуса.",
      descriptionEn:
        "Freshly squeezed fruit juice from oranges, apples or pomegranate is rich in vitamins and is ideal for breakfast or a snack.",
      descriptionKG:
        "Апельсиндин, алманын же анардын жаңы сыгылган жемиш ширеси витаминдерге бай жана эртең мененки тамакка же закускага ылайыктуу.",
    },
    {
      id: "ColdDrinks-3",
      name: "Milkshake",
      nameRu: "Молочный коктейль",
      nameKg: "Сут Коктейл",
      price: "$5",
      description:
        "Молочный коктейль с ванилью, клубникой или шоколадом, густой и сладкий, подаётся с взбитыми сливками и трубочкой.",
      descriptionEn:
        "A milkshake with vanilla, strawberry or chocolate, thick and sweet, served with whipped cream and a straw.",
      descriptionKG:
        "Ванилин, кулпунай же шоколад кошулган сүт коктейль, коюу жана таттуу, камкаймак жана саман менен берилет.",
    },
    {
      id: "ColdDrinks-4",
      name: "Iced Tea",
      nameRu: "Холодный чай",
      nameKg: "Муз чай",

      price: "$4",
      description:
        "Холодный чай с лимоном и мятой, освежает и бодрит, идеально подходит для летнего дня и лёгкого перекуса.",
      descriptionEn:
        "Iced tea with lemon and mint, refreshing and invigorating, perfect for a summer day and a light snack",
      descriptionKG:
        "Лимон жана жалбыз кошулган муздак чай, сергитүүчү жана күчтөндүрүүчү, жайкы күн жана жеңил закуска үчүн идеалдуу.",
    },
    {
      id: "ColdDrinks-5",
      name: "Lemonade",
      nameRu: "Лимонад",
      nameKg: "Лимомад",
      price: "$4",
      description:
        "Домашний лимонад с мятой, лимонным соком и лёгкой сладостью, подаётся со льдом и отлично утоляет жажду.",
      descriptionEn:
        "Homemade lemonade with mint, lemon juice and a touch of sweetness, served over ice and a perfect thirst quencher.",
      descriptionKG:
        "Үйдө жасалган жалбыз, лимон ширеси жана бир аз таттуу лимонад, муз үстүндө берилип, суусаганды кандырат.",
    },
  ],
  NationalFoods: [
    {
      id: "NationalFoods-1",
      name: "Plov",
      nameRu: "Плов",
      nameKg: "АШ",
      price: "$15",
      description:
        "Традиционный узбекский плов с ароматным рисом, сочным мясом, морковью и специями, подаётся горячим с салатом.",
      descriptionEn:
        "Traditional Uzbek pilaf with fragrant rice, juicy meat, carrots and spices, served hot with salad",
      descriptionKG:
        "Салттуу өзбек палоосу жыпар жыттуу күрүч, ширелүү эт, сабиз жана татымалдар кошулуп, ысык салат менен берилет",
    },
    {
      id: "NationalFoods-2",
      name: "Beshbarmak",
      nameRu: "Беш Бармак",
      nameKg: "Беш Бармак",
      price: "$18",
      description:
        "Кыргызское блюдо из отварного мяса и лапши, подаётся с бульоном и луком, идеально для семейного ужина.",
      descriptionEn:
        "A Kyrgyz dish of boiled meat and noodles, served with broth and onions, perfect for a family dinner.",
      descriptionKG:
        "Бышырылган эт жана кесмеден жасалган, сорпо жана пияз кошулган кыргыз тамагы, үй-бүлөлүк кечки тамакка ылайыктуу",
    },
    {
      id: "NationalFoods-3",
      name: "Lagman",
      nameRu: "Лагман",
      nameKg: "Лагман",
      price: "$14",
      description:
        "Уйгурская лапша с мясом, овощами и ароматным соусом, насыщенное блюдо с восточным вкусом и пряностями.",
      descriptionEn:
        "Uyghur noodles with meat, vegetables and a fragrant sauce, a rich dish with oriental flavor and spices.",
      descriptionKG:
        "Уйгур кесмеси эт, жашылча жана жыпар жыттуу соус, чыгыш даамы жана татымалдары бар бай тамак.",
    },
    {
      id: "NationalFoods-4",
      name: "Manty",
      nameRu: "Манты",
      nameKg: "Манты",
      price: "$13",
      description:
        "Пышные паровые манты с говядиной, луком и специями, подаются с соусом и зеленью, популярны в Центральной Азии.",
      descriptionEn:
        "Fluffy steamed manti with beef, onions and spices, served with sauce and herbs, are popular in Central Asia.",
      descriptionKG:
        "Уй эти, пияз жана татымал кошулган, соус жана чөптөр кошулган үлпүлдөк бууланган манты Борбор Азияда популярдуу.",
    },
    {
      id: "NationalFoods-5",
      name: "Shorpo",
      nameRu: "Суп",
      nameKg: "Шорпо",
      price: "$12",
      description:
        "Ароматный мясной суп с картофелем, морковью и зеленью, насыщенный бульон согревает и насыщает в холодный день.",
      descriptionEn:
        "A fragrant meat soup with potatoes, carrots and herbs, the rich broth warms and satisfies on a cold day.",
      descriptionKG:
        "Картошка, сабиз жана чөптөр кошулган жыпар жыттуу эт шорпо, бай шорпо суук күнү жылытып, тойгузат.",
    },
  ],
  EasternCuisine: [
    {
      id: "EasternCuisine-1",
      name: "Sushi",
      nameRu: "Суши",
      nameKg: "Суши",
      price: "$20",
      description:
        "Ассорти роллов и суши с рыбой, овощами и рисом, подаётся с соевым соусом, васаби и маринованным имбирём.",
      descriptionEn:
        "An assortment of rolls and sushi with fish, vegetables and rice, served with soy sauce, wasabi and pickled ginger.",
      descriptionKG:
        "Ролдор жана балык, жашылчалар жана күрүч менен сушинин ассортименти, соя соусу, васаби жана маринаддалган имбирь.",
    },
    {
      id: "EasternCuisine-2",
      name: "Ramen",
      nameRu: "Рамен",
      nameKg: "Рамен",
      price: "$14",
      description:
        "Японский суп с лапшой, мясом, яйцом и овощами, насыщенный бульон и пряности создают неповторимый вкус.",
      descriptionEn:
        "Japanese soup with noodles, meat, egg and vegetables, rich broth and spices create a unique taste.",
      descriptionKG:
        "– Кесме, эт, жумуртка жана жашылчалар кошулган жапон шорпосу, бай сорпону жана татымалдары кайталангыс даамды жаратат.",
    },
    {
      id: "EasternCuisine-3",
      name: "Tempura",
      nameRu: "Темпура",
      nameKg: "Темпура",
      price: "$13",
      description:
        "Овощи и креветки в хрустящей панировке, обжаренные до золотистой корочки, подаются с соусом и рисом.",
      descriptionEn:
        "Vegetables and shrimp in a crispy breading, fried until golden brown, served with sauce and rice.",
      descriptionKG:
        "Кытырак нандагы жашылчалар жана креветкалар, алтын түскө чейин куурулган, соус жана күрүч менен берилет.",
    },
    {
      id: "EasternCuisine-4",
      name: "Gyoza",
      nameRu: "Гёза",
      nameKg: "Капучино",
      price: "$10",
      description:
        "Жареные японские пельмени с мясной начинкой, подаются с соевым соусом, зеленью и острым маслом.",
      descriptionEn:
        "Fried Japanese dumplings with meat filling, served with soy sauce, herbs and hot oil.",
      descriptionKG: "",
    },
    {
      id: "EasternCuisine-5",
      name: "Teriyaki Chicken",
      nameRu: "Курица Терияки",
      nameKg: "Курица Терияки",
      price: "$16",
      description:
        "Курица в сладком терияки соусе, обжаренная до золотистой корочки, подаётся с рисом и овощами.",
      descriptionEn:
        "Chicken in sweet teriyaki sauce, fried until golden brown, served with rice and vegetables.",
      descriptionKG:
        "Соя соусу, ашкөк жана ысык май менен кызмат кылган эт менен куурулган жапон чүчпара.",
    },
  ],
  FastFoods: [
    {
      id: "FastFoods-1",
      name: "Burger",
      nameRu: "Бургер",
      nameKg: "Бургер",
      price: "$9",
      description:
        "Классический бургер с сочной котлетой, сыром, овощами и соусом, подаётся в мягкой булке с кунжутом.",
      descriptionEn:
        "A classic burger with a juicy patty, cheese, vegetables and sauce, served in a soft sesame seed bun.",
      descriptionKG:
        "Классикалык бургер ширелүү пирожки, сыр, жашылчалар жана соус менен жумшак кунжут нанында берилген.",
    },
    {
      id: "FastFoods-2",
      name: "Fries",
      nameRu: "Картофельный Фри",
      nameKg: "Картошка фри",
      price: "$4",
      description:
        "Хрустящий картофель фри, обжаренный до золотистой корочки, подаётся с кетчупом или сырным соусом.",
      descriptionEn:
        "Crispy French fries, fried to a golden brown, served with ketchup or cheese sauce.",
      descriptionKG:
        "Кытырак фри, алтын күрөңгө чейин куурулган, кетчуп же сыр соусу менен берилет.",
    },
    {
      id: "FastFoods-3",
      name: "Hot Dog",
      nameRu: "Хот-Дог",
      nameKg: "Хот-Дог",
      price: "$6",
      description:
        "Сосиска в булке с соусами, овощами и горчицей, популярный перекус для быстрого обеда или прогулки.",
      descriptionEn:
        "A sausage in a bun with sauces, vegetables and mustard, a popular snack for a quick lunch or a walk.",
      descriptionKG:
        "Соустар, жашылчалар жана горчица кошулган булочкадагы колбаса, тез түшкү тамакка же сейилдөө үчүн популярдуу закуска",
    },
    {
      id: "FastFoods-4",
      name: "Chicken Nuggets",
      nameRu: "Куриные наггетсы",
      nameKg: "Тоок эти",
      price: "$7",
      description:
        "Кусочки курицы в хрустящей панировке, подаются с соусом барбекю или сырным, любимы детьми и взрослыми.",
      descriptionEn:
        "Chicken pieces in a crispy breading, served with barbecue or cheese sauce, are a favorite among children and adults.",
      descriptionKG:
        "Барбекю же сыр соусу менен берилген кытырак нандагы тооктун кесимдери балдар менен чоңдордун сүймөнчүлүгүнө ээ.",
    },
    {
      id: "FastFoods-5",
      name: "Onion Rings",
      nameRu: "Луковые кольца",
      nameKg: "Пияз шакекчелери",
      price: "$5",
      description:
        "Луковые кольца в хрустящей корочке, обжаренные до золотистого цвета, подаются с соусом и зеленью.",
      descriptionEn:
        "Onion rings in a crispy crust, fried until golden brown, served with sauce and herbs.",
      descriptionKG:
        "Кытырак кабыктагы пияз шакекчелери, алтын түскө чейин куурулган, соус жана чөптөр менен кызмат кылган.",
    },
  ],
};

const Slider: FC<{onClick: any}> = ({onClick}) => {
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
