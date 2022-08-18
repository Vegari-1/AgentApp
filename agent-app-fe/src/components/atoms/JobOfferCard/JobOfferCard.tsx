import JobOfferModel from "../../../models/JobOfferModel";
import classes from "./JobOfferCard.module.css";

interface JobOfferCardProps {
  jobOffer: JobOfferModel;
}

const JobOfferCard: React.FC<JobOfferCardProps> = ({ jobOffer }) => {
  return (
    <div className={classes["card-wrapper"]}>
      <div className={classes["card-title"]}>
        <div className={classes["title"]}>{jobOffer.title}</div>
        <div className={classes["company"]}>
          at {jobOffer.company.companyName}
        </div>
      </div>
      <div className={classes["card-info"]}>
        <div className={classes["position"]}>{jobOffer.position}</div>
        <div className={classes["description"]}>{jobOffer.jobDescription}</div>
        {jobOffer.qualifications.map((qual) => (
          <div key={qual} className={classes["qual"]}>
            {qual}
          </div>
        ))}
      </div>
      <div className={classes["card-date"]}>
        <div className={classes["date"]}>
          Active from:
          <br />
          <b>{new Date(jobOffer.startDate).toDateString()}</b>
        </div>
        <div className={classes["date"]}>
          Active to:
          <br />
          <b>{new Date(jobOffer.endDate).toDateString()}</b>
        </div>
      </div>
    </div>
  );
};

export default JobOfferCard;
