import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import EntititesEmptyList from "../../components/atoms/EntitiesEmptyList/EntititesEmptyList";
import GridCard from "../../components/molecules/GridCard/GridCard";
import CompanyPane from "../../components/organisms/CompanyPane/CompanyPane";
import GridCardModel from "../../models/GridCardModel";
import SalaryModel from "../../models/SalaryModel";
import { UserDataPayload } from "../../models/slices/auth";
import { RootState } from "../../store/store";

const CompanySalaryPage: React.FC = () => {
  const { id } = useParams();
  const userData: UserDataPayload = useSelector(
    (state: RootState) => state.auth.userData
  );

  const salaryInfo: GridCardModel[] = useSelector((state: RootState) => {
    const salaries: SalaryModel[] = state.company.activeCompanySalaries;
    return salaries.map(
      (salary) =>
        ({
          label: salary.position,
          value: salary.amount.toString(),
        } as GridCardModel)
    );
  });

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
      {salaryInfo.length !== 0 && (
        <GridCard title="Salary Information" content={salaryInfo} />
      )}
      {salaryInfo.length === 0 && (
        <EntititesEmptyList entities="salaries" company />
      )}
    </CompanyPane>
  );
};

export default CompanySalaryPage;
