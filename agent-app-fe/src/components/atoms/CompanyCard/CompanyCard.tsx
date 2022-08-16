import CompanyModel from "../../../models/CompanyModel";
import classes from "./CompanyCard.module.css";

interface CompanyCardProps {
  company: CompanyModel;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  return (
    <div className={classes["card-wrapper"]}>
      <div className={classes["card-title"]}>
        <div className={classes["title"]}>{company.companyName}</div>
        <div className={classes["company"]}>
          in <i>{company.industrySector} sector</i>
        </div>
      </div>
      <div className={classes["card-info"]}>
        <div className={classes["info"]}>{company.companyInfo}</div>
        <div className={classes["contact"]}>{company.companyEmail}</div>
        <div className={classes["contact-right"]}>{company.companyWebsite}</div>
      </div>
    </div>
  );
};

export default CompanyCard;
