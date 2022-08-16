import { useSelector } from "react-redux";
import { UserDataPayload } from "../../../models/slices/auth";
import { RootState } from "../../../store/store";
import Header from "../../molecules/Header/Header";
import Layout from "../Layout/Layout";

import classes from "./CompaniesPane.module.css";

interface CompaniesPaneProps {
  children?: React.ReactNode;
}

const CompaniesPane: React.FC<CompaniesPaneProps> = ({ children }) => {
  const userData: UserDataPayload = useSelector(
    (state: RootState) => state.auth.userData
  );

  return (
    <Layout>
      <Header fullName={userData.name + " " + userData.surname} />
      <div className={classes["wrapper"]}>{children}</div>
    </Layout>
  );
};

export default CompaniesPane;
