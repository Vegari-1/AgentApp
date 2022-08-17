import { useParams } from "react-router-dom";
import JobOfferForm from "../../components/molecules/JobOfferForm/JobOfferForm";
import CompanyPane from "../../components/organisms/CompanyPane/CompanyPane";

const AddCompanyJobOfferPage: React.FC = () => {
  const { id } = useParams();

  return (
    <CompanyPane companyId={id!}>
      <JobOfferForm />
    </CompanyPane>
  );
};

export default AddCompanyJobOfferPage;
