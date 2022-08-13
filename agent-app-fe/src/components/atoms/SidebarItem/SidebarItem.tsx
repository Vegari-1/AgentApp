import { ReactElement } from "react";

import classes from "./SidebarItem.module.css";

interface SidebatItemProps {
  text: string;
  icon: ReactElement;
  onClickHandler?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const SidebarItem: React.FC<SidebatItemProps> = ({ text, icon, onClickHandler }) => {
  return (
    <div className={classes["side-bar-item"]} onClick={onClickHandler}>
      <div className={classes["side-bar-item-icon"]}>{icon}</div>
      <span>{text}</span>
    </div>
  );
};

export default SidebarItem;
