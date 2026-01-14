import { FC } from "react";
import Banner from "./banner/Banner";
import Main from "./mainMenu/Main";

const Home: FC = () => {
  return (
    <div>
      <Banner />
      <Main />
    </div>
  );
};

export default Home;
