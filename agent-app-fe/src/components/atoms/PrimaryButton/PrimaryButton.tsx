import classes from "./PrimaryButton.module.css";

interface PrimaryButtonProps {
  text: string;
  onClickHandler: () => void;
  isSubmit?: boolean;
  small?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  onClickHandler,
  isSubmit,
  small,
}) => {
  return (
    <button
      className={`${
        small ? classes["primary-button-small"] : classes["primary-button"]
      }`}
      onClick={onClickHandler}
      type={isSubmit ? "submit" : "button"}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
