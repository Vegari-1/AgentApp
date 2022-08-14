import { useParams } from "react-router-dom";
import CompanyPane from "../../components/organisms/CompanyPane/CompanyPane";

const CompanySalaryPage: React.FC = () => {
  const { id } = useParams();
  // da li ti dobavis podatke koje ces proslediti?
  // jea, det vud mejk sens
  return <CompanyPane>proba salary {id}</CompanyPane>;
};

export default CompanySalaryPage;
