import SidebarItem from "../../atoms/SidebarItem/SidebarItem";
import { ReactComponent as JobOfferIcon } from "../../../assets/svg/job-offer.svg";
import { ReactComponent as ProfileIcon } from "../../../assets/svg/profile.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/svg/logout.svg";
import { useNavigate } from "react-router-dom";

const SidebarItemList: React.FC = () => {
  const navigate = useNavigate();

  const profileHandler = () => {
    navigate("/profile");
  };

  const companiesHandler = () => {
    navigate("/companies");
  };

  const logoutHandler = () => {
    sessionStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <div>
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
      <SidebarItem
        text="Logout"
        icon={<LogoutIcon height={25} width={25} />}
        onClickHandler={logoutHandler}
      />
    </div>
  );
};

export default SidebarItemList;
