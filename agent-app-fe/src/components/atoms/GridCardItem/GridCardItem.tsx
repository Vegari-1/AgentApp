import classes from "./GridCardItem.module.css";

interface GridCardItemProps {
  name: string;
  value: string;
}

const GridCardItem: React.FC<GridCardItemProps> = ({ name, value }) => {
  return (
    <div className={classes["grid-item-wrapper"]}>
      <span className={classes["grid-item"]}>{name}</span>
      <span className={`${classes["grid-item"]} ${classes["grid-item-bold"]}`}>
        {value}
      </span>
    </div>
  );
};

export default GridCardItem;
