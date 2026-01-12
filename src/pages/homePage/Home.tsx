import { FC } from "react";
import scss from "./Home.module.scss";

const Home: FC = () => {
  return (
    <section className={scss.Home}>
      <div className="container">
        <div className={scss.content}>Home</div>
      </div>
    </section>
  );
};

export default Home;
