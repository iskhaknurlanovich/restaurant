import scss from "./ItemCategory.module.scss";

type Props = {
  title: string;
  price: string;
  description: string;
};

export default function ItemCategory({ title, price, description }: Props) {
  return (
    <div className={scss.itemCategory}>
      <div className={scss.header}>
        <span className={scss.title}>{title}</span>
        <span className={scss.dots}></span>
        <span className={scss.price}>{price}</span>
      </div>
      <p className={scss.description}>{description}</p>
      <a href="#" className={scss.orderNow}>
        Order Now
      </a>
    </div>
  );
}
