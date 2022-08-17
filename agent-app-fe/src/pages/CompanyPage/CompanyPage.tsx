import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import GridCard from "../../components/molecules/GridCard/GridCard";
import CompanyPane from "../../components/organisms/CompanyPane/CompanyPane";
import GridCardModel from "../../models/GridCardModel";
import { UserDataPayload } from "../../models/slices/auth";
import { RootState } from "../../store/store";

const CompanyPage: React.FC = () => {
  const companyInfo: GridCardModel[] = [
    { label: "Industry sector", value: "sektor" },
    { label: "Name", value: "ime" },
    { label: "Email", value: "mail@mail.com" },
    { label: "Website", value: "some.com" },
    { label: "Info", value: "Bestist company woho" },
  ];

  const { id } = useParams();
  const userData: UserDataPayload = useSelector(
    (state: RootState) => state.auth.userData
  );

  const navigate = useNavigate();
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
