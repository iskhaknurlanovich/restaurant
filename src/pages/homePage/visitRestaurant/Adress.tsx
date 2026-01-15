import { RiInstagramFill } from "react-icons/ri";
import scss from "./Adress.module.scss";
import { FaArrowRight } from "react-icons/fa";
import { BiLogoTelegram, BiPhoneCall } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";

const Adress = () => {
  const data = [
    {
      timeWork: "Mon-Thu: 10:00 am - 01:00 am",
    },
    {
      timeWork: "Fri-Sun: 10:00 am - 02:00 am",
    },
  ];

  return (
    <div className={scss.adress} id="contact-us">
      <div className="container">
        <div className={scss.content}>
          <div className={scss.leftClass}>
            <div className={scss.top}>
              <img src="/blowLeft.svg" alt="" />
              <h2 className="subtitle">Visit Restaurant</h2>
            </div>
            <h1>Join Us for Happy Hours</h1>
            <div className={scss.neighborhood}>
              <h3>Your neighborhood</h3>
              <p>225$.Lake Ave.Suite 1150 Pasadena,CA 911101</p>
            </div>
            <div className={scss.timeWork}>
              <h3>Opening hours:</h3>
              {data?.map((item: any, idx: number) => (
                <p key={idx}>{item.timeWork}</p>
              ))}
            </div>
            <div className={scss.giftButton}>
              <span className={`${scss.line} ${scss.topLine}`}></span>
              <span className={`${scss.line} ${scss.bottomLine}`}></span>
              <button>
                PURCHASE GIFT CARD <FaArrowRight fontSize={10} />
              </button>
            </div>
          </div>
          <div className={scss.mapInfo}>
            <h2>Contact Info</h2>
            <p>
              <BiPhoneCall className={scss.icon} />
              +771219900
            </p>
            <p>
              <MdOutlineMail className={scss.icon} />
              motionweb312@gmail.com
            </p>
            <div className={scss.mapIcon}>
              <div className={scss.messangers}>
                <BiLogoTelegram className={scss.icon} />
                <RiInstagramFill className={scss.icon} />
              </div>
              <a href="https://go.2gis.com/5Y7vZ" target="blank">
                <img src="/map.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adress;
