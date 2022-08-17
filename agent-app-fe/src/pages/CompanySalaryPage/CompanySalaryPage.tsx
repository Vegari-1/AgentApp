import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import GridCard from "../../components/molecules/GridCard/GridCard";
import CompanyPane from "../../components/organisms/CompanyPane/CompanyPane";
import GridCardModel from "../../models/GridCardModel";
import { UserDataPayload } from "../../models/slices/auth";
import { RootState } from "../../store/store";

const CompanySalaryPage: React.FC = () => {
  const salaryInfo: GridCardModel[] = [
    { label: "Designer", value: "1200" },
    { label: "Developer", value: "1400" },
    { label: "Helper", value: "900" },
  ];

  const { id } = useParams();
  const userData: UserDataPayload = useSelector(
    (state: RootState) => state.auth.userData
  );

  const navigate = useNavigate();
  const addSalaryHandler = () => {
    navigate("add");
  };

  return (
    <CompanyPane
      companyId={id!}
      showAddButton={userData.companyId !== +id!}
      onAddButtonClick={addSalaryHandler}
    >
      <GridCard title="Salary Information" content={salaryInfo} />
    </CompanyPane>
  );
};

export default CompanySalaryPage;
