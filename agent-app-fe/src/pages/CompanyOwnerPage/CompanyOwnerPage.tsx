import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CompanyForm from "../../components/molecules/CompanyForm/CompanyForm";
import ProfilePane from "../../components/organisms/ProfilePane/ProfilePane";
import { UserDataPayload } from "../../models/slices/auth";
import { RootState } from "../../store/store";

const CompanyOwnerPage: React.FC = () => {
  const userData: UserDataPayload = useSelector(
    (state: RootState) => state.auth.userData
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (userData.companyId) {
      navigate("/company/" + userData.companyId);
    }
  });
  return (
    <ProfilePane>
      <CompanyForm isRegister />
    </ProfilePane>
  );
};

export default CompanyOwnerPage;
