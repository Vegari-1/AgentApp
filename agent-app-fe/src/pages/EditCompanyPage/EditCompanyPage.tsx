import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CompanyForm from "../../components/molecules/CompanyForm/CompanyForm";
import CompanyPane from "../../components/organisms/CompanyPane/CompanyPane";
import CompanyModel from "../../models/CompanyModel";
import { RootState } from "../../store/store";

const EditCompanyPage: React.FC = () => {
  const { id } = useParams();
  const company: CompanyModel = useSelector(
    (state: RootState) => state.company.activeCompany
  );

  return (
    <CompanyPane companyId={id!}>
      <CompanyForm id={+id!} company={company} />
    </CompanyPane>
  );
};

export default EditCompanyPage;
