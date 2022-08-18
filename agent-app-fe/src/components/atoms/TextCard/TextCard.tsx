import ReviewModel from "../../../models/ReviewModel";
import classes from "./TextCard.module.css";
import { ReactComponent as AuthorIcon } from "../../../assets/svg/author.svg";
import { ReactComponent as DateIcon } from "../../../assets/svg/date.svg";

interface TextCardProps {
  review: ReviewModel;
}

const TextCard: React.FC<TextCardProps> = ({ review }) => {
  return (
    <div className={classes["card-wrapper"]}>
      {review.text}
      <div className={classes["card-footer"]}>
        <div className={classes["left"]}>
          <DateIcon width={25} height={25} />
          <span className={classes["separator"]}>
            {new Date(review.timestamp).toDateString()}
          </span>
        </div>
        <div className={classes["right"]}>
          <AuthorIcon width={25} height={25} />
          <span className={classes["separator"]}>{review.author.username}</span>
        </div>
      </div>
    </div>
  );
};

export default TextCard;
