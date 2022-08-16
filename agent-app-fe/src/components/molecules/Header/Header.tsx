import classes from "./Header.module.css";
import { Fragment } from "react";
import HeaderItem from "../../atoms/HeaderItem/HeaderItem";
import HeaderItemModel from "../../../models/HeaderItemModel";
import { UserDataPayload } from "../../../models/slices/auth";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

interface HeaderProps {
  menuItems?: HeaderItemModel[];
}

const Header: React.FC<HeaderProps> = ({ menuItems }) => {
  const userData: UserDataPayload = useSelector(
    (state: RootState) => state.auth.userData
  );

  return (
    <Fragment>
      <div className={classes["header-wrapper"]}>
        <div className={classes["header-menu"]}>
          {menuItems?.map((menuItem) => (
            <HeaderItem
              key={menuItem.text}
              text={menuItem.text}
              link={menuItem.link}
            />
          ))}
        </div>
        <div className={classes["header-title"]}>
          {`${userData.name} ${userData.surname}`}
        </div>
      </div>
      <hr className={classes["header-separator"]} />
    </Fragment>
  );
};

export default Header;
