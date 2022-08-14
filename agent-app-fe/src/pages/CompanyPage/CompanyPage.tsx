import { useParams } from "react-router-dom";
import CompanyPane from "../../components/organisms/CompanyPane/CompanyPane";

const CompanyPage: React.FC = () => {
  const { id } = useParams();
  // da li ti dobavis podatke koje ces proslediti?
  // jea, det vud mejk sens
  return <CompanyPane>proba {id}</CompanyPane>;
};

export default CompanyPage;
