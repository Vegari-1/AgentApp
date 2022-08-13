import classes from "./GhostButton.module.css";

interface GhostButtonProps {
  text: string;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const GhostButton: React.FC<GhostButtonProps> = ({ text, onClickHandler }) => {
  return (
    <button className={classes["ghost-button"]} onClick={onClickHandler}>
      {text}
    </button>
  );
};

export default GhostButton;
