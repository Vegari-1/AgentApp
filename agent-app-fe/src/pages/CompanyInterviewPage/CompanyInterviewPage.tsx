import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import EntititesEmptyList from "../../components/atoms/EntitiesEmptyList/EntititesEmptyList";
import TextCard from "../../components/atoms/TextCard/TextCard";
import CompanyPane from "../../components/organisms/CompanyPane/CompanyPane";
import ReviewModel from "../../models/ReviewModel";
import { UserDataPayload } from "../../models/slices/auth";
import { getCompanyInterviews } from "../../store/actions/company-actions";
import { RootState } from "../../store/store";

const CompanyInterviewPage: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const userData: UserDataPayload = useSelector(
    (state: RootState) => state.auth.userData
  );

  const interviews: ReviewModel[] = useSelector(
    (state: RootState) => state.company.activeCompanyInterviews
  );

  useEffect(() => {
    dispatch(getCompanyInterviews(+id!));
  }, [dispatch, id]);

  const navigate = useNavigate();
  const addInterviewHandler = () => {
    navigate("add");
  };

  return (
    <CompanyPane
      companyId={id!}
      showAddButton={userData.companyId !== +id!}
      onAddButtonClick={addInterviewHandler}
    >
      {interviews.length !== 0 &&
        interviews.map((interview) => (
          <TextCard key={interview.id} review={interview}></TextCard>
        ))}
      {interviews.length === 0 && (
        <EntititesEmptyList entities="interviews" company />
      )}
    </CompanyPane>
  );
};

export default CompanyInterviewPage;
