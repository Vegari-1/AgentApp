import React from "react";
import GhostButton from "../../atoms/GhostButton/GhostButton";
import classes from "./AuthOverlay.module.css";

interface AuthOverlayProps {
  overlayClass: string;
  header: string;
  text: string;
  buttonText: string;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const AuthOverlay: React.FC<AuthOverlayProps> = ({
  overlayClass,
  header,
  text,
  buttonText,
  onClickHandler,
}) => {
  return (
    <div className={`${classes["overlay-panel"]} ${classes[overlayClass]}`}>
      <h1>{header}</h1>
      <p>{text}</p>
      <GhostButton text={buttonText} onClickHandler={onClickHandler} />
    </div>
  );
};

export default AuthOverlay;
