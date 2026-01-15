import Banner from "./banner/Banner";
import Main from "./mainMenu/Main";
import Adress from "./visitRestaurant/Adress";
import Interior from "./modern interior/Interior";
import Flavors from "./flavors/Flavors";

const Home = () => {
  return (
    <div>
      <Banner />
      <Flavors/>
      <Main />
      <Interior />
      <Adress />
    </div>
  );
};

export default Home;
