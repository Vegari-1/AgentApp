import SidebarHeader from "../../atoms/SidebarHeader/SidebarHeader";
import SidebarItemList from "../SidebarItemList/SidebarItemList";
import classes from "./Sidebar.module.css";

const Sidebar: React.FC = () => {
  return (
    <div className={classes["side-bar"]}>
      <SidebarHeader />
      <SidebarItemList />
    </div>
  );
};

export default Sidebar;
