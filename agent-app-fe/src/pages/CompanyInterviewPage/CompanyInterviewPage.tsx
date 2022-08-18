import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import TextCard from "../../components/atoms/TextCard/TextCard";
import CompanyPane from "../../components/organisms/CompanyPane/CompanyPane";
import ReviewModel from "../../models/ReviewModel";
import { UserDataPayload } from "../../models/slices/auth";
import { RootState } from "../../store/store";

const CompanyInterviewPage: React.FC = () => {
  const { id } = useParams();
  const userData: UserDataPayload = useSelector(
    (state: RootState) => state.auth.userData
  );

  const interviews: ReviewModel[] = useSelector(
    (state: RootState) => state.company.activeCompanyInterviews
  );

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
      {interviews &&
        interviews.map((interview) => (
          <TextCard key={interview.id} review={interview}></TextCard>
        ))}
      {interviews.length === 0 && (
        <div>Currently there are no interviews for this company</div>
      )}
    </CompanyPane>
  );
};

export default CompanyInterviewPage;
