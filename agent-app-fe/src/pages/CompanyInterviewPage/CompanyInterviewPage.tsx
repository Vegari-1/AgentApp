import { useParams } from "react-router-dom";
import CompanyPane from "../../components/organisms/CompanyPane/CompanyPane";

const CompanyInterviewPage: React.FC = () => {
  const { id } = useParams();
  // da li ti dobavis podatke koje ces proslediti?
  // jea, det vud mejk sens
  return <CompanyPane>Interviews page {id}</CompanyPane>;
};

export default CompanyInterviewPage;
