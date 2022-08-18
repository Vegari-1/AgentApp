import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CompanyCard from "../../components/atoms/CompanyCard/CompanyCard";
import Layout from "../../components/organisms/Layout/Layout";
import CompanyModel from "../../models/CompanyModel";
import {
  getCompanies,
  getCompanyById,
  getCompanyComments,
  getCompanyInterviews,
  getCompanyJobOffers,
  getCompanySalaries,
} from "../../store/actions/company-actions";
import { RootState } from "../../store/store";
import classes from "./CompaniesPage.module.css";

const CompaniesPage: React.FC = () => {
  const companies: CompanyModel[] = useSelector(
    (state: RootState) => state.company.companies
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);

  const navigate = useNavigate();
  const onCompanyClickHandler = (id: number) => {
    dispatch(getCompanyById(id));
    // ovde da dobavimo za sve komentare, job ofere, intervjue
    // ne znam gde drugde bismo mogli (jer se redirekcija radi u headeru kroz navlink)
    dispatch(getCompanyJobOffers(id));
    dispatch(getCompanyComments(id));
    dispatch(getCompanyInterviews(id));
    dispatch(getCompanySalaries(id));
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
