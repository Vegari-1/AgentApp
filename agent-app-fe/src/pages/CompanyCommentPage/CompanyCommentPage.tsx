import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TextCard from "../../components/atoms/TextCard/TextCard";
import CompanyPane from "../../components/organisms/CompanyPane/CompanyPane";
import ReviewModel from "../../models/ReviewModel";
import { UserDataPayload } from "../../models/slices/auth";
import { RootState } from "../../store/store";

const CompanyCommentPage: React.FC = () => {
  const comments: ReviewModel[] = [
    {
      id: "1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida interdum ex, et pulvinar ex egestas eu. Donec augue sapien, posuere vel tortor ac, elementum porttitor orci. Donec dictum sagittis ex, quis ultrices velit mollis vel. Morbi ac finibus metus, vitae sodales magna. Etiam pharetra molestie ipsum. Sed id orci dapibus, tincidunt nibh a, elementum lectus. Quisque vitae ipsum quis mi ullamcorper interdum in eget mauris. Nulla ut hendrerit velit, in maximus sem. Donec vel mattis nibh. In sagittis odio enim, vitae dictum turpis consectetur a. Aenean non volutpat leo. Aenean ac ligula rhoncus, pretium est sed, molestie lacus. Etiam non elit quis risus semper congue. Ut malesuada accumsan lectus, in pretium metus scelerisque id.",
      timestamp: new Date(),
      author: {
        id: "1",
        email: "mail@mail.com",
        username: "Pera Peric",
      },
    },
    {
      id: "2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida interdum ex, et pulvinar ex egestas eu. Donec augue sapien, posuere vel tortor ac, elementum porttitor orci. Donec dictum sagittis ex, quis ultrices velit mollis vel. Morbi ac finibus metus, vitae sodales magna. Etiam pharetra molestie ipsum. Sed id orci dapibus, tincidunt nibh a, elementum lectus. Quisque vitae ipsum quis mi ullamcorper interdum in eget mauris. Nulla ut hendrerit velit, in maximus sem. Donec vel mattis nibh. In sagittis odio enim, vitae dictum turpis consectetur a. Aenean non volutpat leo. Aenean ac ligula rhoncus, pretium est sed, molestie lacus. Etiam non elit quis risus semper congue. Ut malesuada accumsan lectus, in pretium metus scelerisque id.",
      timestamp: new Date(),
      author: {
        id: "2",
        email: "mail@mail.com",
        username: "Mika Mikic",
      },
    },
  ];

  const { id } = useParams();
  const userData: UserDataPayload = useSelector(
    (state: RootState) => state.auth.userData
  );

  const addCommentHandler = () => {
    console.log("hello add comment");
  };

  return (
    <CompanyPane
      companyId={id!}
      showAddButton={userData.companyId !== +id!}
      onAddButtonClick={addCommentHandler}
    >
      {comments.map((comment) => (
        <TextCard key={comment.id} review={comment}></TextCard>
      ))}
    </CompanyPane>
  );
};

export default CompanyCommentPage;
