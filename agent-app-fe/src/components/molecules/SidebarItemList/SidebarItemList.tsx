import SidebarItem from "../../atoms/SidebarItem/SidebarItem";
import { ReactComponent as JobOfferIcon } from "../../../assets/svg/job-offer.svg";
import { ReactComponent as ProfileIcon } from "../../../assets/svg/profile.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/svg/logout.svg";
import { useNavigate } from "react-router-dom";
import { UserDataPayload } from "../../../models/slices/auth";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { Fragment } from "react";

const SidebarItemList: React.FC = () => {
  // da li je validno da ovde bude if sta ce biti prikazano kao lista u sidebaru u zavisnosti od role?
  const navigate = useNavigate();
  const userData: UserDataPayload = useSelector(
    (state: RootState) => state.auth.userData
  );

  const profileHandler = () => {
    navigate("/profile");
  };

  const companiesHandler = () => {
    navigate("/companies");
  };

  const requestsHandler = () => {
    navigate("/admin");
  };

  const logoutHandler = () => {
    sessionStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <div>
      {userData.role === "ROLE_USER" && (
        <Fragment>
          <SidebarItem
            text="Profile"
            icon={<ProfileIcon height={25} width={25} />}
            onClickHandler={profileHandler}
          />
          <SidebarItem
            text="Companies"
            icon={<JobOfferIcon height={25} width={25} />}
            onClickHandler={companiesHandler}
          />
        </Fragment>
      )}
      {userData.role === "ROLE_ADMIN" && (
        <SidebarItem
          text="Company requests"
          icon={<JobOfferIcon height={25} width={25} />}
          onClickHandler={requestsHandler}
        />
      )}
      <SidebarItem
        text="Logout"
        icon={<LogoutIcon height={25} width={25} />}
        onClickHandler={logoutHandler}
      />
    </div>
  );
};

export default SidebarItemList;
