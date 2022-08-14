import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HeaderItemModel from "../../../models/HeaderItemModel";
import { UserDataPayload } from "../../../models/slices/auth";
import { RootState } from "../../../store/store";
import Header from "../../molecules/Header/Header";
import Layout from "../Layout/Layout";

import classes from "./CompanyPane.module.css";

interface CompanyPaneProps {
  children?: React.ReactNode;
}

const CompanyPane: React.FC<CompanyPaneProps> = ({ children }) => {
  const userData: UserDataPayload = useSelector(
    (state: RootState) => state.auth.userData
  );

  const { id } = useParams();
  const rootUrl: string = "/company/" + id;

  const headerItems: HeaderItemModel[] = [
    { text: "About", link: rootUrl },
    { text: "Job offers", link: rootUrl + "/job-offer" },
    { text: "Comments", link: rootUrl + "/comment" },
    { text: "Interviews", link: rootUrl + "/interview" },
    { text: "Salaries", link: rootUrl + "/salary" },
  ];

  return (
    <Layout>
      <Header
        menuItems={headerItems}
        fullName={userData.name + " " + userData.surname}
      />
      <div className={classes["profile-wrapper"]}>{children}</div>
    </Layout>
  );
};

export default CompanyPane;
