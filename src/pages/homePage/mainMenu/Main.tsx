"use client";
import { FC, useState, useEffect } from "react";
import scss from "./Main.module.scss";
import Slider from "@/src/shared/ui/menuSlider/Slider";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

const Main: FC = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { t } = useTranslation("mainMenu");

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 400);
      }
    };

    handleResize();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const handleSliderClick = () => {
    if (isMobile) {
      router.push("/menu");
    }
  };

  return (
    <section className={scss.main}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.top}>
            <img src="/image/blowLeft.svg" alt="" />
            <h1 className="subtitle">{t("mainTitle")}</h1>
            <img src="/image/blowRight.svg" alt="" />
          </div>
          <div className={scss.block}>
            <h1>{t("title")}</h1>
            <Slider onClick={handleSliderClick} />
            <div className={scss.fullMenuBtn}>
              <span className={`${scss.line} ${scss.topLine}`}></span>
              <span className={`${scss.line} ${scss.bottomLine}`}></span>
              <button onClick={() => router.push("/menu")}>
                {t("btnText")} <FaArrowRight fontSize={10} />
              </button>
            </div>
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
