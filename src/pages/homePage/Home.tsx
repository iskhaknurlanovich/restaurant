import Banner from "./banner/Banner";
import Main from "./mainMenu/Main";
import Adress from "./visitRestaurant/Adress";
import Interior from "./modern interior/Interior";

const Home = () => {
  return (
    <div>
      <Banner />
      <Main />
      <Interior />
      <Adress />
    </div>
  );
};

export default Home;
