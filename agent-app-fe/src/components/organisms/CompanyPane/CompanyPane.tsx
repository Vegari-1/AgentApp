import { useParams } from "react-router-dom";
import HeaderItemModel from "../../../models/HeaderItemModel";
import Layout from "../Layout/Layout";
import classes from "./CompanyPane.module.css";

interface CompanyPaneProps {
  children?: React.ReactNode;
}

const CompanyPane: React.FC<CompanyPaneProps> = ({ children }) => {
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
    <Layout headerItems={headerItems}>
      <div className={classes["content-wrapper"]}>{children}</div>
    </Layout>
  );
};

export default CompanyPane;
