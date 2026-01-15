import { FC } from "react";
import scss from "./Menu.module.scss";

const Menu: FC = () => {
  return (
    <section className={scss.Menu}>
      <div className="container">
        <div className={scss.content}>Menu</div>
      </div>
    </section>
  );
};

export default Menu;
