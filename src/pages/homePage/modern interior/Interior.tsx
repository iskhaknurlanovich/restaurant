import scss from "./Interior.module.scss";

const Interior = () => {
  return (
    <section className={scss.interior} id="interior">
      <div className="container">
        <div className={scss.content}>
          <div className={scss.top}>
            <img src="/blowLeft.svg" alt="" />
            <h1 className="subtitle">Modern Interior</h1>
            <img src="/blowRight.svg" alt="" />
          </div>
          <div className={scss.carousel}>
            <img className={scss.img1} src="/img1.svg" alt="" />
            <img className={scss.img2} src="/img2.svg" alt="" />
            <img className={scss.img3} src="/img3.svg" alt="" />
            <img className={scss.img4} src="/img4.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interior;
