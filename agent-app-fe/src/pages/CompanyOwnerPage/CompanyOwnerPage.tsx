import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CompanyForm from "../../components/molecules/CompanyForm/CompanyForm";
import ProfilePane from "../../components/organisms/ProfilePane/ProfilePane";
import { UserDataPayload } from "../../models/slices/auth";
import {
  getCompanyById,
  getCompanyComments,
  getCompanyInterviews,
  getCompanyJobOffers,
  getCompanySalaries,
} from "../../store/actions/company-actions";
import { RootState } from "../../store/store";

const CompanyOwnerPage: React.FC = () => {
  const userData: UserDataPayload = useSelector(
    (state: RootState) => state.auth.userData
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (userData.companyId) {
      dispatch(getCompanyById(userData.companyId));
      // ovde za sve tabove dobaviti?
      dispatch(getCompanyJobOffers(userData.companyId));
      dispatch(getCompanyComments(userData.companyId));
      dispatch(getCompanyInterviews(userData.companyId));
      dispatch(getCompanySalaries(userData.companyId));
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
