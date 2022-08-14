import { Fragment } from "react";
import GridCardModel from "../../../models/GridCardModel";
import classes from "./GridCard.module.css";

interface GridCardProps {
  title: string;
  content: GridCardModel[];
}

const GridCard: React.FC<GridCardProps> = ({ title, content }) => {
  return (
    <div className={classes["card-wrapper"]}>
      <h2 className={classes["card-title"]}>{title}</h2>
      <div className={classes["content-wrapper"]}>
        {content.map((contentItem) => (
          <Fragment key={contentItem.label}>
            <span>{contentItem.label}:</span>
            <span className={classes["content-row-value"]}>
              {contentItem.value}
            </span>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default GridCard;
