import { useSelector } from "react-redux";
import GridCardModel from "../../../models/GridCardModel";
import { UserDataPayload } from "../../../models/slices/auth";
import { RootState } from "../../../store/store";
import GridCard from "../../atoms/GridCard/GridCard";
import ApiKeyForm from "../../molecules/ApiKeyForm/ApiKeyForm";
import CompanyRegisterForm from "../../molecules/CompanyRegisterForm/CompanyRegisterForm";
import Header from "../../molecules/Header/Header";
import Layout from "../Layout/Layout";

import classes from "./ProfilePane.module.css";

const ProfilePane: React.FC = () => {
  const userData: UserDataPayload = useSelector(
    (state: RootState) => state.auth.userData
  );
  const userInfoData: GridCardModel[] = [
    { label: "Username", value: userData.username },
    { label: "Name", value: userData.name },
    { label: "Surname", value: userData.surname },
  ];

  return (
    <Layout>
      <Header fullName={userData.name + " " + userData.surname} />
      <div className={classes["profile-wrapper"]}>
        <div className={classes["left-wrapper"]}>
          <GridCard title={"Profile information"} content={userInfoData} />
          <ApiKeyForm />
        </div>
        <CompanyRegisterForm />
      </div>
      {/* da li ima kompaniju ili ne, ako ima, link do nje, ako nema, dugme kreiraj kompaniju */}
    </Layout>
  );
};

export default ProfilePane;
