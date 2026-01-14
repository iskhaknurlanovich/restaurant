import { FC } from "react";
import Banner from "./banner/Banner";
import Interior from "../interior/Interior";

const Home: FC = () => {
  return (
    <div>
      <Banner />
      <Interior />
    </div>
  );
};

export default Home;
