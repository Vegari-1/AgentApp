import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import GridCard from "../../components/molecules/GridCard/GridCard";
import CompanyPane from "../../components/organisms/CompanyPane/CompanyPane";
import CompanyModel from "../../models/CompanyModel";
import GridCardModel from "../../models/GridCardModel";
import { UserDataPayload } from "../../models/slices/auth";
import { RootState } from "../../store/store";

const CompanyPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const userData: UserDataPayload = useSelector(
    (state: RootState) => state.auth.userData
  );

  const company: CompanyModel | undefined = useSelector((state: RootState) =>
    // problem u slucaju da prvo ne ode na companies i onda ucitamo sve companies
    // bolje ovde ici po id-u i onda duplirati u stanju
    // IZMENITI VEROVATNO
    state.company.companies.find((company) => {
      return company.id === +id!;
    })
  );
  const companyInfo: GridCardModel[] = [
    { label: "Industry sector", value: company?.industrySector! },
    { label: "Name", value: company?.companyName! },
    { label: "Email", value: company?.companyEmail! },
    { label: "Website", value: company?.companyWebsite! },
    { label: "Info", value: company?.companyInfo! },
  ];

  const editCompanyHandler = () => {
    navigate("edit");
  };

  return (
    <CompanyPane
      companyId={id!}
      showAddButton={userData.companyId === +id!}
      onAddButtonClick={editCompanyHandler}
      isEdit
    >
      <GridCard title="Company information" content={companyInfo} />
    </CompanyPane>
  );
};

export default CompanyPage;
