import { ReactElement } from "react";

import classes from "./SidebarItem.module.css";

interface SidebatItemProps {
  text: string;
  icon: ReactElement;
}

const SidebarItem: React.FC<SidebatItemProps> = ({ text, icon }) => {
  return (
    <div className={classes["side-bar-item"]}>
      <div className={classes["side-bar-item-icon"]}>{icon}</div>
      <span>{text}</span>
    </div>
  );
};

export default SidebarItem;
