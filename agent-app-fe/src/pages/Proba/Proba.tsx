import JobOfferForm from "../../components/molecules/JobOfferForm/JobOfferForm";
import ReviewForm from "../../components/molecules/ReviewForm/ReviewForm";
import SalaryForm from "../../components/molecules/SalaryForm/SalaryForm";
import Layout from "../../components/organisms/Layout/Layout";
import classes from "./Proba.module.css";

const Proba: React.FC = () => {
  return (
    <Layout>
      <div className={classes["content-wrapper"]}>
        <ReviewForm type="comment" />
        <ReviewForm type="interview" />
        <SalaryForm />
        <JobOfferForm />
      </div>
    </Layout>
  );
};

export default Proba;
