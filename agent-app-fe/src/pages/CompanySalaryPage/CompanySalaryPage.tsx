import GridCard from "../../components/atoms/GridCard/GridCard";
import CompanyPane from "../../components/organisms/CompanyPane/CompanyPane";
import GridCardModel from "../../models/GridCardModel";

const CompanySalaryPage: React.FC = () => {
  // da li ti dobavis podatke koje ces proslediti?
  // jea, det vud mejk sens
  const salaryInfo: GridCardModel[] = [
    { label: "Designer", value: "1200" },
    { label: "Developer", value: "1400" },
    { label: "Helper", value: "900" },
  ];
  return (
    <CompanyPane>
      <GridCard title="Salary Information" content={salaryInfo} />
    </CompanyPane>
  );
};

export default CompanySalaryPage;
