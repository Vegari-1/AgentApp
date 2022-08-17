import Layout from "../Layout/Layout";

import classes from "./ProfilePane.module.css";
import HeaderItemModel from "../../../models/HeaderItemModel";

interface ProfilePaneProps {
  children?: React.ReactElement;
}

const ProfilePane: React.FC<ProfilePaneProps> = ({ children }) => {
  const rootUrl: string = "/profile";
  const headerItems: HeaderItemModel[] = [
    { text: "About", link: rootUrl },
    { text: "My company", link: rootUrl + "/company" },
    { text: "Dislinkt", link: rootUrl + "/dislinkt" },
  ];

  return (
    <Layout headerItems={headerItems}>
      <div className={classes["content-wrapper"]}>{children}</div>
    </Layout>
  );
};

export default ProfilePane;
