import { ReactComponent as JobOfferIcon } from "../../../assets/svg/job-offer.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GridCardModel from "../../../models/GridCardModel";
import { UserDataPayload } from "../../../models/slices/auth";
import { RootState } from "../../../store/store";
import GridCard from "../../atoms/GridCard/GridCard";
import ApiKeyForm from "../../molecules/ApiKeyForm/ApiKeyForm";
import CompanyRegisterForm from "../../molecules/CompanyRegisterForm/CompanyRegisterForm";
import Layout from "../Layout/Layout";

import classes from "./ProfilePane.module.css";
import TextIconButton from "../../atoms/TextIconButton/TextIconButton";

const ProfilePane: React.FC = () => {
  const navigate = useNavigate();
  const userData: UserDataPayload = useSelector(
    (state: RootState) => state.auth.userData
  );
  const userInfoData: GridCardModel[] = [
    { label: "Username", value: userData.username },
    { label: "Name", value: userData.name },
    { label: "Surname", value: userData.surname },
  ];

  const onCompanyClickHandler = () => {
    navigate("/company/" + userData.companyId);
  };

  return (
    <Layout>
      <div className={classes["content-wrapper"]}>
        <div className={classes["left-wrapper"]}>
          <GridCard title={"Profile information"} content={userInfoData} />
          <ApiKeyForm />
        </div>
        {userData.companyId && (
          <div className={classes["company-link"]}>
            <TextIconButton
              text="Visit your Company"
              icon={<JobOfferIcon height={25} width={25} />}
              onClick={onCompanyClickHandler}
            />
          </div>
        )}
        {!userData.companyId && <CompanyRegisterForm />}
      </div>
    </Layout>
  );
};

export default ProfilePane;
