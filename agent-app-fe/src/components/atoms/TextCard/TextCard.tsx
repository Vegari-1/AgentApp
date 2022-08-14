import ReviewModel from "../../../models/ReviewModel";
import classes from "./TextCard.module.css";

interface TextCardProps {
  review: ReviewModel;
}

const TextCard: React.FC<TextCardProps> = ({ review }) => {
  return (
    <div className={classes["card-wrapper"]}>
      {review.text}
      <div className={classes["card-footer"]}>
        <div className={classes["left"]}>{review.timestamp.toDateString()}</div>
        <div className={classes["right"]}>{review.author.username}</div>
      </div>
    </div>
  );
};

export default TextCard;
