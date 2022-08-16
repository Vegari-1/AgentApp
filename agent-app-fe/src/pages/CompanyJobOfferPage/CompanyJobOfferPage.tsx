import JobOfferCard from "../../components/atoms/JobOfferCard/JobOfferCard";
import CompanyPane from "../../components/organisms/CompanyPane/CompanyPane";
import JobOfferModel from "../../models/JobOfferModel";

const CompanyJobOfferPage: React.FC = () => {
  const offers: JobOfferModel[] = [
    {
      id: "1",
      title: "Graficki entuzijasta",
      position: "graficki dizajner",
      jobDescription: "dizajniranje",
      qualifications: ["adobe", "corel"],
      startDate: new Date(),
      endDate: new Date(),
      company: {
        id: "1",
        industrySector: "sektor",
        companyName: "kul ime",
        companyEmail: "mail",
        companyWebsite: "sajt",
        companyInfo: "kul firma",
      },
    },
    {
      id: "2",
      title: "Programerski entuzijasta",
      position: "programer",
      jobDescription: "programiranje",
      qualifications: ["react", "mac"],
      startDate: new Date(),
      endDate: new Date(),
      company: {
        id: "1",
        industrySector: "sektor",
        companyName: "kul ime",
        companyEmail: "mail",
        companyWebsite: "sajt",
        companyInfo: "kul firma",
      },
    },
  ];

  return (
    <CompanyPane>
      {offers.map((offer) => (
        <JobOfferCard key={offer.id} jobOffer={offer} />
      ))}
    </CompanyPane>
  );
};

export default CompanyJobOfferPage;
