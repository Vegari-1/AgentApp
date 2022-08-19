import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import EntititesEmptyList from "../../components/atoms/EntitiesEmptyList/EntititesEmptyList";
import JobOfferCard from "../../components/atoms/JobOfferCard/JobOfferCard";
import CompanyPane from "../../components/organisms/CompanyPane/CompanyPane";
import { UserDataPayload } from "../../models/slices/auth";
import { RootState } from "../../store/store";

const CompanyJobOfferPage: React.FC = () => {
  const { id } = useParams();
  const userData: UserDataPayload = useSelector(
    (state: RootState) => state.auth.userData
  );

  const offers = useSelector(
    (state: RootState) => state.company.activeCompanyJobOffers
  );

  const navigate = useNavigate();
  const addJobOfferHandler = () => {
    navigate("add");
  };

  return (
    <CompanyPane
      companyId={id!}
      showAddButton={userData.companyId === +id!}
      onAddButtonClick={addJobOfferHandler}
    >
      {offers.length !== 0 &&
        offers.map((offer) => <JobOfferCard key={offer.id} jobOffer={offer} />)}
      {offers.length === 0 && (
        <EntititesEmptyList entities="job offers" company />
      )}
    </CompanyPane>
  );
};

export default CompanyJobOfferPage;
