import { FC } from "react";
import scss from "./Button.module.scss";

const Button: FC = () => {
  return <button className={scss.Button}>click</button>;
};

export default Button;
