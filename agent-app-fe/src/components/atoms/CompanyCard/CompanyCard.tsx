import CompanyModel from "../../../models/CompanyModel";
import classes from "./CompanyCard.module.css";
import { ReactComponent as WebsiteIcon } from "../../../assets/svg/website.svg";
import { ReactComponent as MailIcon } from "../../../assets/svg/mail.svg";

interface CompanyCardProps {
  company: CompanyModel;
  onClick: (id: number) => void;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company, onClick }) => {
  const onClickHandler = () => {
    onClick(company.id);
  };

  return (
    <div className={classes["card-wrapper"]}>
      <div className={classes["card-title"]}>
        <div className={classes["title"]} onClick={onClickHandler}>
          {company.companyName}
        </div>
        <div className={classes["company"]}>
          in {company.industrySector} sector
        </div>
      </div>
      <div className={classes["card-info"]}>
        <div className={classes["info"]}>{company.companyInfo}</div>
        <div className={classes["contact"]}>
          <MailIcon height={25} width={25} />
          <span className={classes["oneliner"]}>{company.companyEmail}</span>
          <WebsiteIcon height={25} width={25} />
          <span className={classes["oneliner"]}>{company.companyWebsite}</span>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
