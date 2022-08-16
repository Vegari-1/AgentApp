import HeaderItemModel from "../../../models/HeaderItemModel";
import Header from "../../molecules/Header/Header";
import Sidebar from "../../molecules/Sidebar/Sidebar";
import classes from "./Layout.module.css";

interface LayoutProps {
  headerItems?: HeaderItemModel[];
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ headerItems, children }) => {
  return (
    <div className={classes["container"]}>
      <div className={classes["sidebar"]}>
        <Sidebar />
      </div>
      <div className={classes["central-panel"]}>
        <Header menuItems={headerItems} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
