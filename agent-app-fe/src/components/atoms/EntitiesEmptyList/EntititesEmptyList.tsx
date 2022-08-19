import classes from "./EntitiesEmptyList.module.css";

interface EntititesEmptyListProps {
  entities: string;
  company?: boolean;
}

const EntititesEmptyList: React.FC<EntititesEmptyListProps> = ({
  entities,
  company,
}) => {
  const noEntities = `Currently there are no ${entities}${
    company ? " for this company" : ""
  }`;

  return (
    <div className={classes["empty-entity-list"]}>
      <div className={classes["empty-entity-image"]} />
      <div className={classes["empty-entity-text"]}>{noEntities}</div>
    </div>
  );
};

export default EntititesEmptyList;
