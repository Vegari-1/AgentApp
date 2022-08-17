import GridCardModel from "../../../models/GridCardModel";
import GridCardItem from "../../atoms/GridCardItem/GridCardItem";
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
          <GridCardItem
            key={contentItem.label}
            name={contentItem.label}
            value={contentItem.value}
          />
        ))}
      </div>
    </div>
  );
};

export default GridCard;
