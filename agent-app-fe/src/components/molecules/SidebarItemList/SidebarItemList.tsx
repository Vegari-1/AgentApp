import SidebarItem from "../../atoms/SidebarItem/SidebarItem";
import { ReactComponent as JobOfferIcon } from "../../../assets/svg/job-offer.svg";
import { ReactComponent as ProfileIcon } from "../../../assets/svg/profile.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/svg/logout.svg";

const SidebarItemList: React.FC = () => {
  return (
    <div>
      <SidebarItem
        text="Profile"
        icon={<ProfileIcon height={25} width={25} />}
      />
      <SidebarItem
        text="Companies"
        icon={<JobOfferIcon height={25} width={25} />}
      />
      <SidebarItem text="Logout" icon={<LogoutIcon height={25} width={25} />} />
    </div>
  );
};

export default SidebarItemList;
