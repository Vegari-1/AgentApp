import { ReactElement } from "react";

import classes from "./TextIconButton.module.css";

interface TextIconButtonProps {
  text: string;
  icon: ReactElement;
  onClick: () => void;
}

const TextIconButton: React.FC<TextIconButtonProps> = ({
  text,
  icon,
  onClick,
}) => {
  return (
    <div className={classes["side-bar-item"]} onClick={onClick}>
      <div className={classes["side-bar-item-icon"]}>{icon}</div>
      <span>{text}</span>
    </div>
  );
};

export default TextIconButton;
