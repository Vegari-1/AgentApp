import { useParams } from "react-router-dom";
import SalaryForm from "../../components/molecules/SalaryForm/SalaryForm";
import CompanyPane from "../../components/organisms/CompanyPane/CompanyPane";

const AddCompanySalaryPage: React.FC = () => {
  const { id } = useParams();

  return (
    <CompanyPane companyId={id!}>
      <SalaryForm />
    </CompanyPane>
  );
};

export default AddCompanySalaryPage;
