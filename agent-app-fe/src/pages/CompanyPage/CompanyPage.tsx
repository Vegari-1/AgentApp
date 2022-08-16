import GridCard from "../../components/atoms/GridCard/GridCard";
import CompanyPane from "../../components/organisms/CompanyPane/CompanyPane";
import GridCardModel from "../../models/GridCardModel";

const CompanyPage: React.FC = () => {
  const companyInfo: GridCardModel[] = [
    { label: "Industry sector", value: "sektor" },
    { label: "Name", value: "ime" },
    { label: "Email", value: "mail@mail.com" },
    { label: "Website", value: "some.com" },
    { label: "Info", value: "Bestist company woho" },
  ];

  return (
    <CompanyPane>
      <GridCard title="Company information" content={companyInfo} />
    </CompanyPane>
  );
};

export default CompanyPage;
