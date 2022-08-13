import { Link } from "react-router-dom";
import classes from "./HeaderItem.module.css";

interface HeaderItemProps {
  text: string;
  link: string;
}

const HeaderItem: React.FC<HeaderItemProps> = ({ text, link }) => {

  return (
    <div className={classes["header-item"]}>
      <Link to={link} className={classes['header-link']}>{text}</Link>
    </div>
  );
};

export default HeaderItem;
