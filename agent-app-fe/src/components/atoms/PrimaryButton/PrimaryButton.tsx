import classes from "./PrimaryButton.module.css";

interface PrimaryButtonProps {
  text: string;
  onClickHandler: () => void;
  isSubmit?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  onClickHandler,
  isSubmit,
}) => {
  return (
    <button
      className={classes["primary-button"]}
      onClick={onClickHandler}
      type={isSubmit ? "submit" : "button"}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
