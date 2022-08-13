import Sidebar from "../../molecules/Sidebar/Sidebar";
import classes from "./Layout.module.css";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={classes["container"]}>
      <div className={classes["sidebar"]}>
        <Sidebar />
      </div>
      <div className={classes["central-panel"]}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
