import { FC } from "react";
import scss from "./Main.module.scss";
import Slider from "@/src/shared/ui/menuSlider/Slider";

const Main: FC = () => {
  return (
    <section className={scss.main}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.top}>
            <img src="/blowLeft.svg" alt="" />
            <h1 className="subtitle">Main Menu</h1>
            <img src="/blowRight.svg" alt="" />
          </div>
          <div className={scss.main}>
            <h1>Exceptional Quality. Delightfully Delicious</h1>
            <Slider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;

// <div className={scss.menuGrid}>
//             <aside className={scss.sidebar}>
//               {/* <!-- Вертикальное меню --> */}
//               <nav>
//                 <ul>
//                   <li className={scss.active}>Desserts</li>
//                   <li>Hot Drinks</li>
//                   <li>Cold Drinks</li>
//                   <li>National Foods</li>
//                   <li>Eastern cuisine</li>
//                   <li>Fast foods</li>
//                 </ul>
//               </nav>
//             </aside>

//             <header className={scss.menuHeader}>
//               <h1>
//                 Exceptional Quality.
//                 <br />
//                 Delightfully Delicious
//               </h1>
//             </header>

//             <main className={scss.menuItems}>
//               {/* <!-- Повторяющиеся карточки --> */}
//               <div className={scss.item}>
//                 <h2>
//                   Beer Brewery <span>$24</span>
//                 </h2>
//                 <p>Lorem ipsum aokstappad defaktisi...</p>
//                 <button>Order Now</button>
//               </div>
//               {/* <!-- ...другие блюда --> */}
//             </main>
//           </div>
