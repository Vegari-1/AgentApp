import { ReactElement } from "react";
import classes from "./IconButton.module.css";

interface IconButtonProps {
  icon: ReactElement;
  onClick: () => void;
  boxShadow?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  boxShadow = false,
}) => {
  return (
    <button
      className={classes["icon-button"]}
      style={boxShadow ? styles.button : {}}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

const styles = {
  button: {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
};

export default IconButton;
