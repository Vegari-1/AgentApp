import classes from "./SidebarHeader.module.css";

const SidebarHeader: React.FC = () => {
  return (
    <div className={classes["side-bar-header-wrapper"]}>
      <div className={classes["logo"]} />
      <span className={classes["logo-title"]}>Agent App</span>
    </div>
  );
};

export default SidebarHeader;
