import classes from "./Header.module.css";
import { Fragment } from "react";
import HeaderItem from "../../atoms/HeaderItem/HeaderItem";
import HeaderItemModel from "../../../models/HeaderItemModel";

interface HeaderProps {
  menuItems?: HeaderItemModel[];
}

const Header: React.FC<HeaderProps> = ({ menuItems }) => {
  return (
    <Fragment>
      <div className={classes["header-wrapper"]}>
        <div className={classes["header-menu"]}>
          {
            menuItems?.map((menuItem) => (
              <HeaderItem text={menuItem.text} link={menuItem.link} />
            ))
          }
        </div>
        <div className={classes["header-title"]}>Name Surname</div>
      </div>
      <hr className={classes["header-separator"]} />
    </Fragment>
  );
};

export default Header;
