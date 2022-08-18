import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CompanyForm from "../../components/molecules/CompanyForm/CompanyForm";
import CompanyPane from "../../components/organisms/CompanyPane/CompanyPane";
import CompanyModel from "../../models/CompanyModel";
import { RootState } from "../../store/store";

const EditCompanyPage: React.FC = () => {
  const { id } = useParams();
  // useselector dobavi trenutno aktivnu kompaniju
  // za sada ovde moze da filtrira od svih po id-u
  const company: CompanyModel | undefined = useSelector((state: RootState) =>
    state.company.companies.find((company) => {
      return company.id === +id!;
    })
  );

  return (
    <CompanyPane companyId={id!}>
      <CompanyForm id={+id!} company={company} />
    </CompanyPane>
  );
};

export default EditCompanyPage;
