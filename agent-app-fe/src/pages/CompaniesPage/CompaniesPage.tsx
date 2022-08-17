import { useNavigate } from "react-router-dom";
import CompanyCard from "../../components/atoms/CompanyCard/CompanyCard";
import Layout from "../../components/organisms/Layout/Layout";
import CompanyModel from "../../models/CompanyModel";
import classes from "./CompaniesPage.module.css";

const CompaniesPage: React.FC = () => {
  const companies: CompanyModel[] = [
    {
      id: "1",
      industrySector: "Desing",
      companyName: "Eva's Design",
      companyEmail: "office@eva-design.com",
      companyWebsite: "www.eva-design.co.rs",
      companyInfo:
        "Company offers design and printing capabilities. You can create and seek great design and have it come to live in no time! You imagine it, you build it.",
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

  const navigate = useNavigate();
  const onCompanyClickHandler = (id: string) => {
    navigate("/company/" + id);
  };

  return (
    <Layout>
      <div className={classes["content-wrapper"]}>
        {companies.map((company) => (
          <CompanyCard
            key={company.id}
            company={company}
            onClick={onCompanyClickHandler}
          />
        ))}
      </div>
    </Layout>
  );
};

export default CompaniesPage;
