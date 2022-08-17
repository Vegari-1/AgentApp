import { useParams } from "react-router-dom";
import CompanyForm from "../../components/molecules/CompanyForm/CompanyForm";
import CompanyPane from "../../components/organisms/CompanyPane/CompanyPane";

const EditCompanyPage: React.FC = () => {
  const { id } = useParams();

  return (
    <CompanyPane companyId={id!}>
      <CompanyForm />
    </CompanyPane>
  );
};

export default EditCompanyPage;
