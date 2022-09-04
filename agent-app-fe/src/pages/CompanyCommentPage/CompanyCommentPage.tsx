import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import EntititesEmptyList from "../../components/atoms/EntitiesEmptyList/EntititesEmptyList";
import TextCard from "../../components/atoms/TextCard/TextCard";
import CompanyPane from "../../components/organisms/CompanyPane/CompanyPane";
import ReviewModel from "../../models/ReviewModel";
import { UserDataPayload } from "../../models/slices/auth";
import { getCompanyComments } from "../../store/actions/company-actions";
import { RootState } from "../../store/store";

const CompanyCommentPage: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const userData: UserDataPayload = useSelector(
    (state: RootState) => state.auth.userData
  );

  const comments: ReviewModel[] = useSelector(
    (state: RootState) => state.company.activeCompanyComments
  );

  useEffect(() => {
    dispatch(getCompanyComments(+id!));
  }, [dispatch, id]);

  const navigate = useNavigate();
  const addCommentHandler = () => {
    navigate("add");
  };

  return (
    <CompanyPane
      companyId={id!}
      showAddButton={userData.companyId !== +id!}
      onAddButtonClick={addCommentHandler}
    >
      {comments.length !== 0 &&
        comments.map((comment) => (
          <TextCard key={comment.id} review={comment}></TextCard>
        ))}
      {comments.length === 0 && (
        <EntititesEmptyList entities="comments" company />
      )}
    </CompanyPane>
  );
};

export default CompanyCommentPage;
