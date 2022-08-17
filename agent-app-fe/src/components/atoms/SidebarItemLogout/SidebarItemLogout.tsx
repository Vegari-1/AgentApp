import { ReactElement } from "react";

import classes from "./SidebarItemLogout.module.css";

interface SidebarItemLogoutProps {
  text: string;
  icon: ReactElement;
  value: string;
  selected: string;
  onClick: (value: string) => void;
}

const SidebarItemLogout: React.FC<SidebarItemLogoutProps> = ({
  text,
  icon,
  value,
  selected,
  onClick,
}) => {
  return (
    <div
      className={`${classes["side-bar-item"]} ${
        value === selected && classes["side-bar-item-active"]
      }`}
      onClick={() => onClick(value)}
    >
      <div className={classes["side-bar-item-icon"]}>{icon}</div>
      <span>{text}</span>
    </div>
  );
};

export default SidebarItemLogout;
