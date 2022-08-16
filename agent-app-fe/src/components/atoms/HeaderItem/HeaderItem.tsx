import { NavLink } from "react-router-dom";
import classes from "./HeaderItem.module.css";

interface HeaderItemProps {
  text: string;
  link: string;
}

const HeaderItem: React.FC<HeaderItemProps> = ({ text, link }) => {
  const activeStyle = {
    textDecoration: "underline",
  };

  return (
    <div className={classes["header-item"]}>
      <NavLink
        end
        to={link}
        style={({ isActive }) => (isActive ? activeStyle : {})}
        className={classes["header-link"]}
      >
        {text}
      </NavLink>
    </div>
  );
};

export default HeaderItem;
