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
  ingredients?: {
    ru: string[];
    en: string[];
    kg: string[];
  };
};

export const itemsCategory: Record<string, Item[]> = {
  Desserts: [
    {
      id: "Desserts-1",
      name: "Cake",
      nameRu: "Торт",
      nameKg: "Торт",
      price: "$12",
      ingredients: {
        ru: ["Мука", "Яйца", "Сахар", "Молоко", "Ваниль", "Ягоды"],
        en: ["Flour", "Eggs", "Sugar", "Milk", "Vanilla", "Berries"],
        kg: ["Ун", "Жумуртка", "Кант", "Сүт", "Ваниль", "Жемиштер"],
      },
      imageUrl:
        "https://www.tasteofhome.com/wp-content/uploads/2025/07/30-Summer-Desserts-That-Are-No-Bake-and-Oh-So-Easy_TOHcom23_27515_P2_MD_03_22_6b.jpg",
      description:
        "Нежный бисквит с воздушным кремом, свежими ягодами и лёгким ванильным ароматом, идеально подходит для вечернего чаепития или праздника.",
      descriptionEn:
        "Delicate biscuit with airy cream, fresh berries and light vanilla aroma, ideal for an evening tea party or a holiday.",
      descriptionKG:
        "Аба каймак, жаңы мөмөлөр жана жеңил ваниль жыты бар назик губка торт, кечки чай же майрам үчүн идеалдуу.",
    },
    {
      id: "Desserts-2",
      name: "Ice Cream",
      nameKg: "Балмуздактар",
      nameRu: "Мороженное",
      price: "$8",
      ingredients: {
        ru: [
          "Молоко",
          "Сливки",
          "Сахар",
          "Ваниль",
          "Фрукты",
          "Шоколадная крошка",
        ],
        en: ["Milk", "Cream", "Sugar", "Vanilla", "Fruits", "Chocolate chips"],
        kg: [
          "Сүт",
          "Каймак",
          "Кант",
          "Ваниль",
          "Жемиштер",
          "Шоколад тиштүүлөрү",
        ],
      },
      imageUrl:
        "https://www.allrecipes.com/thmb/SI6dn__pfJb9G5eBpYAqkyGCLxQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50050-five-minute-ice-cream-DDMFS-4x3-076-fbf49ca6248e4dceb3f43a4f02823dd9.jpg",
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
      ingredients: {
        ru: ["Мука", "Яблоки", "Сахар", "Корица", "Масло", "Яйцо"],
        en: ["Flour", "Apples", "Sugar", "Cinnamon", "Butter", "Egg"],
        kg: ["Ун", "Алма", "Кант", "Дарчин", "Май", "Жумуртка"],
      },
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ0itvaiT2og0-bkiFM6ERf6hQtKrMPY_3XA&s",
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
      ingredients: {
        ru: [
          "Сливочный сыр",
          "Сахар",
          "Яйца",
          "Песочное печенье",
          "Масло",
          "Клубника",
        ],
        en: [
          "Cream cheese",
          "Sugar",
          "Eggs",
          "Shortbread",
          "Butter",
          "Strawberry",
        ],
        kg: [
          "Каймак сыр",
          "Кант",
          "Жумуртка",
          "Песок печенье",
          "Май",
          "Кулпунай",
        ],
      },
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6hAsDaBNIbLCf6bSe-WyjNc9BkBnTwGS9bw&s",
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
      ingredients: {
        ru: ["Шоколад", "Мука", "Яйца", "Сахар", "Орехи", "Масло"],
        en: ["Chocolate", "Flour", "Eggs", "Sugar", "Nuts", "Butter"],
        kg: ["Шоколад", "Ун", "Жумуртка", "Кант", "Жаңгак", "Май"],
      },
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScpfrLwLJC2ALDmfksLU8bOzxNQOsapJGeVg&s",
      description:
        "Шоколадный брауни с орехами, карамельной прослойкой и насыщенным вкусом какао, подаётся тёплым с взбитыми сливками или мороженым.",
      descriptionEn:
        "Chocolate brownie with nuts, caramel layer, and rich cocoa flavor, served warm with whipped cream or ice cream.",
      descriptionKG:
        "Жаңгагы бар шоколаддуу брауни, карамель катмары жана куурулган какаонун терең даамы менен, жылуу абалда каймак же балмуздак менен берилет.",
    },
    {
      id: "Desserts-6",
      name: "Tiramisu",
      nameRu: "Тирамису",
      nameKg: "Тирамису",
      price: "$11",
      ingredients: {
        ru: [
          "Маскарпоне",
          "Кофе",
          "Яйца",
          "Сахар",
          "Какао",
          "Печенье Савоярди",
        ],
        en: [
          "Mascarpone",
          "Coffee",
          "Eggs",
          "Sugar",
          "Cocoa",
          "Savoiardi biscuits",
        ],
        kg: [
          "Маскарпоне",
          "Кофе",
          "Жумуртка",
          "Кант",
          "Какао",
          "Савоярди печенье",
        ],
      },
      imageUrl:
        "https://www.giallozafferano.com/images/260-26067/Tiramisu_1200x800.jpg",
      description:
        "Классический итальянский десерт с кофейной пропиткой и нежным кремом.",
      descriptionEn:
        "Classic Italian dessert with coffee-soaked biscuits and delicate cream.",
      descriptionKG:
        "Кофе сиңирилген печенье жана назик креми бар италиялык десерт.",
    },
    {
      id: "Desserts-7",
      name: "Macarons",
      nameRu: "Макаруны",
      nameKg: "Макарон",
      price: "$9",
      ingredients: {
        ru: ["Миндальная мука", "Белки", "Сахар", "Начинка"],
        en: ["Almond flour", "Egg whites", "Sugar", "Filling"],
        kg: ["Бадам ун", "Жумуртканын агын", "Кант", "Толтуруучу"],
      },
      imageUrl:
        "https://cdn11.bigcommerce.com/s-778f3/images/stencil/1280x1280/products/44/2091/Salted-Macarons__49128__74213.1560219907.jpg?c=2",
      description: "Французские миндальные пирожные с нежной начинкой.",
      descriptionEn: "French almond cookies with delicate filling.",
      descriptionKG: "Назик толтурулган француз миндаль таттуулары.",
    },
    {
      id: "Desserts-8",
      name: "Panna Cotta",
      nameRu: "Панна котта",
      nameKg: "Панна котта",
      price: "$10",
      ingredients: {
        ru: ["Сливки", "Сахар", "Ваниль", "Желатин", "Ягоды"],
        en: ["Cream", "Sugar", "Vanilla", "Gelatin", "Berries"],
        kg: ["Каймак", "Кант", "Ваниль", "Желатин", "Жемиштер"],
      },
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8AcfKOQPI02uLyhezAzY_sjMBEuWUaBx9Gg&s",
      description: "Итальянский сливочный десерт с ягодным соусом.",
      descriptionEn: "Italian creamy dessert with berry sauce.",
      descriptionKG: "Жемиш соусу менен италиялык каймактуу десерт.",
    },
  ],
  HotDrinks: [
    {
      id: "HotDrinks-1",
      name: "Coffee",
      nameRu: "Кофе",
      nameKg: "Кофелер",
      price: "$5",
      ingredients: {
        ru: ["Кофейные зёрна", "Вода", "Сахар", "Молоко", "Корица"],
        en: ["Coffee beans", "Water", "Sugar", "Milk", "Cinnamon"],
        kg: ["Кофе уруктары", "Суу", "Кант", "Сүт", "Дарчин"],
      },
      imageUrl:
        "https://www.folgerscoffee.com/folgers/articles/35%20Types%20of%20Coffee/5250/image-thumb__5250__responsive_1534_JPEG/Hero-mobile-80percent-1534x1227.a16103c4.jpg",
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
      ingredients: {
        ru: ["Чайные листья", "Вода", "Лимон", "Мёд", "Мята"],
        en: ["Tea leaves", "Water", "Lemon", "Honey", "Mint"],
        kg: ["Чай жалбырактары", "Суу", "Лимон", "Бал", "Жалбыз"],
      },
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVcGBIHBqBDMQT-ZchW91RcItcY3bxStKYyw&s",
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
      ingredients: {
        ru: ["Какао", "Молоко", "Сахар", "Сливки", "Ваниль"],
        en: ["Cocoa", "Milk", "Sugar", "Cream", "Vanilla"],
        kg: ["Какао", "Сүт", "Кант", "Каймак", "Ваниль"],
      },
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrv9L2FzzaJd_nBbhkU3p7rODxdj0xro_ugw&s",
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
      ingredients: {
        ru: ["Эспрессо", "Молоко", "Ванильный сироп", "Сахар", "Сливки"],
        en: ["Espresso", "Milk", "Vanilla syrup", "Sugar", "Cream"],
        kg: ["Эспрессо", "Сүт", "Ваниль сиропу", "Кант", "Каймак"],
      },
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMmaj03HyBL8eC5g-4uJXvA_XZq_N02p8R2w&s",
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
      ingredients: {
        ru: ["Эспрессо", "Молоко", "Сахар", "Какао-порошок", "Корица"],
        en: ["Espresso", "Milk", "Sugar", "Cocoa powder", "Cinnamon"],
        kg: ["Эспрессо", "Сүт", "Кант", "Какао порошок", "Дарчин"],
      },
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6y3cT-dExLa-dqr59LUuztGugET709U7DxQ&s",
      description:
        "Капучино с воздушной молочной пенкой, сбалансированным вкусом и ароматом, подаётся с корицей или шоколадной крошкой по желанию.",
      descriptionEn:
        "Cappuccino with airy milk foam, balanced flavor and aroma, served with cinnamon or chocolate chips upon request.",
      descriptionKG:
        "Капучино аба менен толтурулган сүт көбүгү, тең салмактуу даамы жана жыты менен, каалаган учурда дарчин же шоколад тортчосу менен берилет.",
    },
    {
      id: "HotDrinks-6",
      name: "Americano",
      nameRu: "Американо",
      nameKg: "Американо",
      price: "$4",
      ingredients: {
        ru: ["Эспрессо", "Вода"],
        en: ["Espresso", "Water"],
        kg: ["Эспрессо", "Суу"],
      },
      imageUrl:
        "https://procofe.by/application/files/cache/thumbnails/kofe-i-kofejnye-zerna-1320x880-2aae60c0de5ef176c938a1ebee1decdd.jpg",
      description: "Лёгкий и ароматный кофе без молока.",
      descriptionEn: "Light and aromatic coffee without milk.",
      descriptionKG: "Сүтсүз жеңил жана жыттуу кофе.",
    },
    {
      id: "HotDrinks-7",
      name: "Matcha Latte",
      nameRu: "Матча латте",
      nameKg: "Матча латте",
      price: "$6",
      ingredients: {
        ru: ["Матча", "Молоко", "Сахар"],
        en: ["Matcha", "Milk", "Sugar"],
        kg: ["Матча", "Сүт", "Кант"],
      },
      imageUrl:
        "https://static.tildacdn.com/tild3265-3638-4364-b933-333631656338/little_roy_coffee_in.jpg",
      description: "Японский зелёный чай с молоком.",
      descriptionEn: "Japanese green tea with milk.",
      descriptionKG: "Сүт кошулган жапон жашыл чайы.",
    },
    {
      id: "HotDrinks-8",
      name: "Espresso",
      nameRu: "Эспрессо",
      nameKg: "Эспрессо",
      price: "$3",
      ingredients: {
        ru: ["Кофе", "Вода"],
        en: ["Coffee", "Water"],
        kg: ["Кофе", "Суу"],
      },
      imageUrl:
        "https://www.sharmispassions.com/wp-content/uploads/2012/07/espresso-coffee-recipe04-500x500.jpg",
      description: "Крепкий концентрированный кофе.",
      descriptionEn: "Strong concentrated coffee.",
      descriptionKG: "Күчтүү концентрацияланган кофе.",
    },
  ],
  ColdDrinks: [
    {
      id: "ColdDrinks-1",
      name: "Soda",
      nameRu: "Сода",
      nameKg: "Сода",
      price: "$3",
      ingredients: {
        ru: ["Вода", "Сахар", "Газ", "Ароматизатор", "Лимонная кислота"],
        en: ["Water", "Sugar", "Carbonation", "Flavoring", "Citric acid"],
        kg: ["Суу", "Кант", "Газ", "Даам берүүчү", "Лимон кислотасы"],
      },
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUn7-_CXjQ-3pil-SUBMpI_OeVW2FfnLIZrw&s",
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
      ingredients: {
        ru: ["Апельсин", "Яблоко", "Гранат", "Вода", "Сахар"],
        en: ["Orange", "Apple", "Pomegranate", "Water", "Sugar"],
        kg: ["Апельсин", "Алма", "Анар", "Суу", "Кант"],
      },
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKlnKBT4NPVatELDa6vMn3QqwvvYHDFLzEuQ&s",
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
      ingredients: {
        ru: ["Молоко", "Мороженое", "Сахар", "Ваниль", "Сливки"],
        en: ["Milk", "Ice cream", "Sugar", "Vanilla", "Cream"],
        kg: ["Сүт", "Балмуздак", "Кант", "Ваниль", "Каймак"],
      },
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3hS2o-RKmvJnuo4o9PrED_agl21tt9_dylw&s",
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
      ingredients: {
        ru: ["Чай", "Вода", "Лимон", "Мята", "Сахар", "Лёд"],
        en: ["Tea", "Water", "Lemon", "Mint", "Sugar", "Ice"],
        kg: ["Чай", "Суу", "Лимон", "Жалбыз", "Кант", "Муз"],
      },
      price: "$4",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiULPLLae-P0AFdjE8YHUXlpeLninpzkPj7Q&s",
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
      ingredients: {
        ru: ["Лимон", "Вода", "Сахар", "Мята", "Лёд"],
        en: ["Lemon", "Water", "Sugar", "Mint", "Ice"],
        kg: ["Лимон", "Суу", "Кант", "Жалбыз", "Муз"],
      },
      price: "$4",
      imageUrl:
        "https://myincrediblerecipes.com/wp-content/uploads/2023/02/set-2-Lemonade-15-scaled.jpg",
      description:
        "Домашний лимонад с мятой, лимонным соком и лёгкой сладостью, подаётся со льдом и отлично утоляет жажду.",
      descriptionEn:
        "Homemade lemonade with mint, lemon juice and a touch of sweetness, served over ice and a perfect thirst quencher.",
      descriptionKG:
        "Үйдө жасалган жалбыз, лимон ширеси жана бир аз таттуу лимонад, муз үстүндө берилип, суусаганды кандырат.",
    },
    {
      id: "ColdDrinks-6",
      name: "Mojito",
      nameRu: "Мохито",
      nameKg: "Мохито",
      price: "$6",
      ingredients: {
        ru: ["Лайм", "Мята", "Сахар", "Газированная вода", "Лёд"],
        en: ["Lime", "Mint", "Sugar", "Sparkling water", "Ice"],
        kg: ["Лайм", "Жалбыз", "Кант", "Газдалган суу", "Муз"],
      },
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx7rkUKDhsMqgdHwKDnfJjlwKoyWf84ZnrQg&s",
      description: "Освежающий мятно-лаймовый напиток.",
      descriptionEn: "Refreshing mint-lime drink.",
      descriptionKG: "Жалбыз жана лайм кошулган сергитүүчү суусундук.",
    },
    {
      id: "ColdDrinks-7",
      name: "Smoothie",
      nameRu: "Смузи",
      nameKg: "Смузи",
      price: "$6",
      ingredients: {
        ru: ["Фрукты", "Йогурт", "Мёд"],
        en: ["Fruits", "Yogurt", "Honey"],
        kg: ["Жемиштер", "Йогурт", "Бал"],
      },
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp93aU6swyIcyJW-a8KIrY-Dz2vSmqCtAMA&s",
      description: "Густой фруктовый напиток.",
      descriptionEn: "Thick fruit drink.",
      descriptionKG: "Коюу жемиш суусундугу.",
    },
    {
      id: "ColdDrinks-8",
      name: "Cold Brew",
      nameRu: "Холодный кофе",
      nameKg: "Муздак кофе",
      price: "$5",
      ingredients: {
        ru: ["Кофе", "Вода", "Лёд"],
        en: ["Coffee", "Water", "Ice"],
        kg: ["Кофе", "Суу", "Муз"],
      },
      imageUrl:
        "https://fedandfit.com/wp-content/uploads/2022/02/230322_how-to-make-cold-brew-38.jpg",
      description: "Кофе холодной экстракции.",
      descriptionEn: "Cold extracted coffee.",
      descriptionKG: "Муздак ыкма менен даярдалган кофе.",
    },
  ],
  NationalFoods: [
    {
      id: "NationalFoods-1",
      name: "Plov",
      nameRu: "Плов",
      nameKg: "АШ",
      price: "$15",
      ingredients: {
        ru: ["Рис", "Мясо", "Морковь", "Лук", "Масло", "Специи"],
        en: ["Rice", "Meat", "Carrot", "Onion", "Oil", "Spices"],
        kg: ["Күрүч", "Эт", "Сабиз", "Пияз", "Май", "Татымалдар"],
      },
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyLh3vcLRVNVCJf3NaEDCOix0JF2gDgXN-tQ&s",
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
      ingredients: {
        ru: ["Мясо", "Лапша", "Лук", "Бульон", "Соль", "Перец"],
        en: ["Meat", "Noodles", "Onion", "Broth", "Salt", "Pepper"],
        kg: ["Эт", "Кесме", "Пияз", "Сорпо", "Туз", "Калемпир"],
      },
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4EVV3Yg3qyBrCdg8awQgUvZw3k8T480xLg&s",
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
      ingredients: {
        ru: ["Лапша", "Мясо", "Перец", "Помидор", "Лук", "Специи"],
        en: ["Noodles", "Meat", "Pepper", "Tomato", "Onion", "Spices"],
        kg: ["Кесме", "Эт", "Калемпир", "Помидор", "Пияз", "Татымалдар"],
      },
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0wKNuhDkmmW6vUVeGxu3VUUgc9cWgko_FDg&s",

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
      ingredients: {
        ru: ["Тесто", "Говядина", "Лук", "Специи", "Масло", "Зелень"],
        en: ["Dough", "Beef", "Onion", "Spices", "Oil", "Herbs"],
        kg: ["Камыр", "Уй эти", "Пияз", "Татымалдар", "Май", "Жашылча"],
      },
      imageUrl: "https://ilovekg.com/images/food/manty.webp",
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
      ingredients: {
        ru: ["Мясо", "Картофель", "Морковь", "Лук", "Зелень", "Специи"],
        en: ["Meat", "Potato", "Carrot", "Onion", "Herbs", "Spices"],
        kg: ["Эт", "Картошка", "Сабиз", "Пияз", "Жашылча", "Татымалдар"],
      },
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYROvhf8Wc3BEGWZ0bG2n4kherEcFfmRssAw&s",
      description:
        "Ароматный мясной суп с картофелем, морковью и зеленью, насыщенный бульон согревает и насыщает в холодный день.",
      descriptionEn:
        "A fragrant meat soup with potatoes, carrots and herbs, the rich broth warms and satisfies on a cold day.",
      descriptionKG:
        "Картошка, сабиз жана чөптөр кошулган жыпар жыттуу эт шорпо, бай шорпо суук күнү жылытып, тойгузат.",
    },
    {
      id: "NationalFoods-6",
      name: "Samsy",
      nameRu: "Самсы",
      nameKg: "Самсы",
      price: "$6",
      ingredients: {
        ru: ["Тесто", "Мясо", "Лук", "Специи"],
        en: ["Dough", "Meat", "Onion", "Spices"],
        kg: ["Камыр", "Эт", "Пияз", "Татымалдар"],
      },
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_NsJyeIjebZCRDzNPZCCQSveafC03AkOQPQ&s",
      description: "Выпечка с сочной мясной начинкой.",
      descriptionEn: "Baked pastry with juicy meat filling.",
      descriptionKG: "Эт салынган ширелүү камыр тамак.",
    },
    {
      id: "NationalFoods-7",
      name: "Kuurdak",
      nameRu: "Куурдак",
      nameKg: "Куурдак",
      price: "$16",
      ingredients: {
        ru: ["Мясо", "Лук", "Картофель", "Специи"],
        en: ["Meat", "Onion", "Potato", "Spices"],
        kg: ["Эт", "Пияз", "Картошка", "Татымалдар"],
      },
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSABtlefHeIlx1GNNvQgrde55Y1wZgIc-RVuA&s",
      description: "Жареное мясное блюдо по-кыргызски.",
      descriptionEn: "Kyrgyz-style fried meat dish.",
      descriptionKG: "Кыргызча куурулган эт тамагы.",
    },
    {
      id: "NationalFoods-8",
      name: "Boorsok",
      nameRu: "Боорсок",
      nameKg: "Боорсок",
      price: "$5",
      ingredients: {
        ru: ["Тесто", "Масло", "Сахар"],
        en: ["Dough", "Oil", "Sugar"],
        kg: ["Камыр", "Май", "Кант"],
      },
      imageUrl: "https://xcook.info/wp-content/uploads/2019/10/boorsok-6.jpg",
      description: "Жареные кусочки теста.",
      descriptionEn: "Fried dough pieces.",
      descriptionKG: "Куурулган камыр кесимдери.",
    },
  ],
  EasternCuisine: [
    {
      id: "EasternCuisine-1",
      name: "Sushi",
      nameRu: "Суши",
      nameKg: "Суши",
      ingredients: {
        ru: ["Рис", "Рыба", "Нори", "Огурец", "Авокадо", "Соевый соус"],
        en: ["Rice", "Fish", "Nori", "Cucumber", "Avocado", "Soy sauce"],
        kg: ["Күрүч", "Балык", "Нори", "Бадыраң", "Авокадо", "Соя соусу"],
      },
      price: "$20",
      imageUrl:
        "https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt6542458a3d1e8c6f/664cbc3d213dc5f7fd48a20e/origin-of-sushi-hero.jpeg?q=70&width=3840&auto=webp",
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
      ingredients: {
        ru: ["Лапша", "Бульон", "Мясо", "Яйцо", "Лук", "Специи"],
        en: ["Noodles", "Broth", "Meat", "Egg", "Onion", "Spices"],
        kg: ["Кесме", "Сорпо", "Эт", "Жумуртка", "Пияз", "Татымалдар"],
      },
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHGnbGrS1t5krpwaPqypVr9KtN_IZn2xCHcA&s",
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
      ingredients: {
        ru: ["Овощи", "Креветки", "Тесто", "Масло", "Соус"],
        en: ["Vegetables", "Shrimp", "Batter", "Oil", "Sauce"],
        kg: ["Жашылчалар", "Креветка", "Камыр", "Май", "Соус"],
      },
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnqrsA9j12ZGn6NXAg6cVbFLHXgTieYs_IhQ&s",
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
      ingredients: {
        ru: ["Тесто", "Свинина", "Капуста", "Лук", "Специи"],
        en: ["Dough", "Pork", "Cabbage", "Onion", "Spices"],
        kg: ["Камыр", "Чочко эти", "Капуста", "Пияз", "Татымалдар"],
      },
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwnOlM3Su_rIqgaIEoYSIoeVOhSXIi9lQlFw&s",
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
      ingredients: {
        ru: [
          "Курица",
          "Соус терияки",
          "Соевый соус",
          "Имбирь",
          "Чеснок",
          "Сахар",
        ],
        en: [
          "Chicken",
          "Teriyaki sauce",
          "Soy sauce",
          "Ginger",
          "Garlic",
          "Sugar",
        ],
        kg: [
          "Тоок эти",
          "Терияки соусу",
          "Соя соусу",
          "Имбирь",
          "Сарымсак",
          "Кант",
        ],
      },
      imageUrl:
        "https://www.onceuponachef.com/images/2024/01/chicken-teriyaki-1200x1553.jpg",
      description:
        "Курица в сладком терияки соусе, обжаренная до золотистой корочки, подаётся с рисом и овощами.",
      descriptionEn:
        "Chicken in sweet teriyaki sauce, fried until golden brown, served with rice and vegetables.",
      descriptionKG:
        "Соя соусу, ашкөк жана ысык май менен кызмат кылган эт менен куурулган жапон чүчпара.",
    },
    {
      id: "EasternCuisine-6",
      name: "Udon",
      nameRu: "Удон",
      nameKg: "Удон",
      price: "$13",
      ingredients: {
        ru: ["Удон лапша", "Курица", "Соус терияки", "Лук", "Морковь", "Перец"],
        en: [
          "Udon noodles",
          "Chicken",
          "Teriyaki sauce",
          "Onion",
          "Carrot",
          "Pepper",
        ],
        kg: [
          "Удон кесме",
          "Тоок эти",
          "Терияки соусу",
          "Пияз",
          "Сабиз",
          "Калемпир",
        ],
      },
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPVHY78BGYOJZ04ZcM8fdyVQGIPTuHeAdO8w&s",
      description: "Японская лапша в бульоне.",
      descriptionEn: "Japanese noodle soup.",
      descriptionKG: "Жапон кесме шорпосу.",
    },
    {
      id: "EasternCuisine-7",
      name: "Pho",
      nameRu: "Фо",
      nameKg: "Фо",
      price: "$14",
      ingredients: {
        ru: ["Лапша", "Бульон", "Мясо", "Яйцо", "Лук", "Специи"],
        en: ["Noodles", "Broth", "Meat", "Egg", "Onion", "Spices"],
        kg: ["Кесме", "Сорпо", "Эт", "Жумуртка", "Пияз", "Татымалдар"],
      },
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjNLKCXTYrji8Au1NJUPxQW-d-xGfTebVIzg&s",
      description: "Вьетнамский ароматный суп.",
      descriptionEn: "Vietnamese aromatic soup.",
      descriptionKG: "Вьетнам жыттуу шорпосу.",
    },
    {
      id: "EasternCuisine-8",
      name: "Kimchi",
      nameRu: "Кимчи",
      nameKg: "Кимчи",
      price: "$7",
      ingredients: {
        ru: ["Капуста", "Чеснок", "Перец чили", "Имбирь", "Соль"],
        en: ["Cabbage", "Garlic", "Chili pepper", "Ginger", "Salt"],
        kg: ["Капуста", "Сарымсак", "Чили калемпир", "Имбирь", "Туз"],
      },
      imageUrl:
        "https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg",
      description: "Острая корейская закуска.",
      descriptionEn: "Spicy Korean side dish.",
      descriptionKG: "Кореянын ачуу закускасы.",
    },
  ],
  FastFoods: [
    {
      id: "FastFoods-1",
      name: "Burger",
      nameRu: "Бургер",
      nameKg: "Бургер",
      price: "$9",
      ingredients: {
        ru: ["Булочка", "Говядина", "Сыр", "Салат", "Помидор", "Соус"],
        en: ["Bun", "Beef", "Cheese", "Lettuce", "Tomato", "Sauce"],
        kg: ["Бургер нан", "Уй эти", "Сыр", "Салат", "Помидор", "Соус"],
      },
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0cFleHkr83XTp-0AALLRqiAOs7nZxme-OVQ&s",
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
      ingredients: {
        ru: ["Картофель", "Масло", "Соль"],
        en: ["Potatoes", "Oil", "Salt"],
        kg: ["Картошка", "Май", "Туз"],
      },
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW2kIchoEqM1E6wfKrDJKVM1dMzOZ_rNPIXA&s",
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
      ingredients: {
        ru: ["Булочка", "Сосиска", "Кетчуп", "Горчица", "Лук"],
        en: ["Bun", "Sausage", "Ketchup", "Mustard", "Onion"],
        kg: ["Хот-дог нан", "Сосиска", "Кетчуп", "Горчица", "Пияз"],
      },
      imageUrl:
        "https://www.seriouseats.com/thmb/QJZXQHDXBfTiUSKstQ1uskJc31g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SEA-best-grilled-hot-dogs-recipe-hero-02-9d245c0d43874a3da13a7228682b0dce.jpg",
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
      ingredients: {
        ru: ["Курица", "Мука", "Масло", "Специи"],
        en: ["Chicken", "Flour", "Oil", "Spices"],
        kg: ["Тоок эти", "Ун", "Май", "Татымалдар"],
      },
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7VbdpVBGTFJRpozTfVSve99hf-P0iShtTMg&s",
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
      ingredients: {
        ru: ["Лук", "Мука", "Масло", "Соль", "Специи"],
        en: ["Onion", "Flour", "Oil", "Salt", "Spices"],
        kg: ["Пияз", "Ун", "Май", "Туз", "Татымалдар"],
      },
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw2fHb0wlhXh4LBqGzePW3l5nVHsgxoeKSdQ&s",
      description:
        "Луковые кольца в хрустящей корочке, обжаренные до золотистого цвета, подаются с соусом и зеленью.",
      descriptionEn:
        "Onion rings in a crispy crust, fried until golden brown, served with sauce and herbs.",
      descriptionKG:
        "Кытырак кабыктагы пияз шакекчелери, алтын түскө чейин куурулган, соус жана чөптөр менен кызмат кылган.",
    },
    {
      id: "FastFoods-6",
      name: "Pizza Slice",
      nameRu: "Кусок пиццы",
      nameKg: "Пицца",
      price: "$5",
      ingredients: {
        ru: ["Тесто", "Сыр", "Томатный соус", "Колбаса", "Грибы", "Оливки"],
        en: [
          "Dough",
          "Cheese",
          "Tomato sauce",
          "Sausage",
          "Mushrooms",
          "Olives",
        ],
        kg: ["Камыр", "Сыр", "Томат соусу", "Колбаса", "Козу карын", "Зайтун"],
      },
      imageUrl:
        "https://newdilpasand.com/wp-content/uploads/2022/03/Pizza-Slice.jpg",
      description: "Классический кусок пиццы.",
      descriptionEn: "Classic pizza slice.",
      descriptionKG: "Классикалык пицца кесими.",
    },
    {
      id: "FastFoods-7",
      name: "Wrap",
      nameRu: "Ролл",
      nameKg: "Ролл",
      price: "$7",
      ingredients: {
        ru: ["Лаваш", "Курица", "Салат", "Помидор", "Сыр", "Соус"],
        en: ["Lavash", "Chicken", "Lettuce", "Tomato", "Cheese", "Sauce"],
        kg: ["Лаваш", "Тоок эти", "Салат", "Помидор", "Сыр", "Соус"],
      },
      imageUrl:
        "https://img.iamcook.ru/2025/upl/recipes/cat/u-e3926ca4b177bff6660e719816ecc94a.jpg",
      description: "Лёгкий и сытный ролл.",
      descriptionEn: "Light and filling wrap.",
      descriptionKG: "Жеңил жана тойгузуучу ролл.",
    },
    {
      id: "FastFoods-8",
      name: "Cheese Sticks",
      nameRu: "Сырные палочки",
      nameKg: "Сыр таякчалары",
      price: "$6",
      ingredients: {
        ru: ["Сыр", "Мука", "Яйцо", "Сухари", "Масло"],
        en: ["Cheese", "Flour", "Egg", "Breadcrumbs", "Oil"],
        kg: ["Сыр", "Ун", "Жумуртка", "Нан күкүмдөрү", "Май"],
      },
      imageUrl:
        "https://wellnessmama.com/wp-content/uploads/mozzarella-sticks-500x500.jpg",
      description: "Хрустящие палочки из сыра.",
      descriptionEn: "Crispy cheese sticks.",
      descriptionKG: "Кытырак сыр таякчалары.",
    },
  ],
};
