import SidebarItem from "../../atoms/SidebarItem/SidebarItem";
import { ReactComponent as JobOfferIcon } from "../../../assets/svg/job-offer.svg";
import { ReactComponent as ProfileIcon } from "../../../assets/svg/profile.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/svg/logout-danger.svg";
import { useNavigate } from "react-router-dom";
import { UserDataPayload } from "../../../models/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { Fragment } from "react";
import classes from "./SidebarItemList.module.css";
import SidebarItemLogout from "../../atoms/SidebarItemLogout/SidebarItemLogout";
import { logOut } from "../../../store/actions/auth-actions";

const SidebarItemList: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData: UserDataPayload = useSelector(
    (state: RootState) => state.auth.userData
  );

  const selected = window.location.href.split("/").at(-1)!;
  const clickHandler = (value: string) => {
    navigate("/" + value);
  };

  const logoutHandler = () => {
    dispatch(logOut());
    navigate("/auth");
  };

  return (
    <div className={classes["wrapper"]}>
      {userData.role === "ROLE_USER" && (
        <Fragment>
          <SidebarItem
            text="Profile"
            value="profile"
            selected={selected}
            icon={<ProfileIcon height={25} width={25} />}
            onClick={clickHandler}
          />
          <SidebarItem
            text="Companies"
            value="companies"
            selected={selected}
            icon={<JobOfferIcon height={25} width={25} />}
            onClick={clickHandler}
          />
        </Fragment>
      )}
      {userData.role === "ROLE_ADMIN" && (
        <SidebarItem
          text="Company requests"
          value="requests"
          selected={selected}
          icon={<JobOfferIcon height={25} width={25} />}
          onClick={clickHandler}
        />
      )}
      <div className={classes["bottom"]}>
        <SidebarItemLogout
          text="Logout"
          value="logout"
          selected={selected}
          icon={<LogoutIcon height={25} width={25} />}
          onClick={logoutHandler}
        />
      </div>
    </div>
  );
};

export default SidebarItemList;
