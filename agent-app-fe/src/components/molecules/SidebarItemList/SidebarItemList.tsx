import SidebarItem from "../../atoms/SidebarItem/SidebarItem";
import { ReactComponent as JobOfferIcon } from "../../../assets/svg/job-offer.svg";
import { ReactComponent as ProfileIcon } from "../../../assets/svg/profile.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/svg/logout.svg";
import { useNavigate } from "react-router-dom";
import { UserDataPayload } from "../../../models/slices/auth";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { Fragment, useEffect, useState } from "react";

const SidebarItemList: React.FC = () => {
  // da li je validno da ovde bude if sta ce biti prikazano kao lista u sidebaru u zavisnosti od role?
  const navigate = useNavigate();
  const userData: UserDataPayload = useSelector(
    (state: RootState) => state.auth.userData
  );

  const [selected, setSelected] = useState(
    window.location.href.split("/").at(-1)!
  );

  const clickHandler = (value: string) => {
    setSelected(value);
  };

  useEffect(() => {
    navigate("/" + selected);
  }, [selected]);

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
      <SidebarItem
        text="Logout"
        value="logout"
        selected={selected}
        icon={<LogoutIcon height={25} width={25} />}
        onClick={logoutHandler}
      />
    </div>
  );
};

export default SidebarItemList;
