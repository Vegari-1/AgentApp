import CompanyCard from "../../components/atoms/CompanyCard/CompanyCard";
import CompaniesPane from "../../components/organisms/CompaniesPane/CompaniesPane";
import CompanyModel from "../../models/CompanyModel";

const CompaniesPage: React.FC = () => {
  const companies: CompanyModel[] = [
    {
      id: "1",
      industrySector: "Design",
      companyName: "GreatDesign",
      companyEmail: "great@design.com",
      companyWebsite: "www.great-design.com",
      companyInfo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida interdum ex, et pulvinar ex egestas eu. Donec augue sapien, posuere vel tortor ac, elementum porttitor orci. Donec dictum sagittis ex, quis ultrices velit mollis vel. Morbi ac finibus metus, vitae sodales magna. Etiam pharetra molestie ipsum. Sed id orci dapibus, tincidunt nibh a, elementum lectus. Quisque vitae ipsum quis mi ullamcorper interdum in eget mauris. Nulla ut hendrerit velit, in maximus sem. Donec vel mattis nibh. In sagittis odio enim, vitae dictum turpis consectetur a. Aenean non volutpat leo. Aenean ac ligula rhoncus, pretium est sed, molestie lacus. Etiam non elit quis risus semper congue. Ut malesuada accumsan lectus, in pretium metus scelerisque id.",
    },
    {
      id: "2",
      industrySector: "Software",
      companyName: "GreatSoftware",
      companyEmail: "great@software.com",
      companyWebsite: "www.great-software.com",
      companyInfo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida interdum ex, et pulvinar ex egestas eu. Donec augue sapien, posuere vel tortor ac, elementum porttitor orci. Donec dictum sagittis ex, quis ultrices velit mollis vel. Morbi ac finibus metus, vitae sodales magna. Etiam pharetra molestie ipsum. Sed id orci dapibus, tincidunt nibh a, elementum lectus. Quisque vitae ipsum quis mi ullamcorper interdum in eget mauris. Nulla ut hendrerit velit, in maximus sem. Donec vel mattis nibh. In sagittis odio enim, vitae dictum turpis consectetur a. Aenean non volutpat leo. Aenean ac ligula rhoncus, pretium est sed, molestie lacus. Etiam non elit quis risus semper congue. Ut malesuada accumsan lectus, in pretium metus scelerisque id.",
    },
  ];
  return (
    <CompaniesPane>
      {companies.map((company) => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </CompaniesPane>
  );
};

export default CompaniesPage;