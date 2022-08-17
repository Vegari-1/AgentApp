import { useParams } from "react-router-dom";
import ReviewForm from "../../components/molecules/ReviewForm/ReviewForm";
import CompanyPane from "../../components/organisms/CompanyPane/CompanyPane";

const AddCompanyReviewPage: React.FC = () => {
  const { id } = useParams();
  const type = window.location.href.split("/").at(-2)!;

  return (
    <CompanyPane companyId={id!}>
      <ReviewForm type={type} />
    </CompanyPane>
  );
};

export default AddCompanyReviewPage;
