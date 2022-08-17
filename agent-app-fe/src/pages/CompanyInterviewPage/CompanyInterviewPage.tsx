import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import TextCard from "../../components/atoms/TextCard/TextCard";
import CompanyPane from "../../components/organisms/CompanyPane/CompanyPane";
import ReviewModel from "../../models/ReviewModel";
import { UserDataPayload } from "../../models/slices/auth";
import { RootState } from "../../store/store";

const CompanyInterviewPage: React.FC = () => {
  const interviews: ReviewModel[] = [
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
    {
      id: "3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida interdum ex, et pulvinar ex egestas eu. Donec augue sapien, posuere vel tortor ac, elementum porttitor orci. Donec dictum sagittis ex, quis ultrices velit mollis vel. Morbi ac finibus metus, vitae sodales magna. Etiam pharetra molestie ipsum. Sed id orci dapibus, tincidunt nibh a, elementum lectus. Quisque vitae ipsum quis mi ullamcorper interdum in eget mauris. Nulla ut hendrerit velit, in maximus sem. Donec vel mattis nibh. In sagittis odio enim, vitae dictum turpis consectetur a. Aenean non volutpat leo. Aenean ac ligula rhoncus, pretium est sed, molestie lacus. Etiam non elit quis risus semper congue. Ut malesuada accumsan lectus, in pretium metus scelerisque id.",
      timestamp: new Date(),
      author: {
        id: "2",
        email: "mail@mail.com",
        username: "Zika Zikic",
      },
    },
    {
      id: "4",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida interdum ex, et pulvinar ex egestas eu. Donec augue sapien, posuere vel tortor ac, elementum porttitor orci. Donec dictum sagittis ex, quis ultrices velit mollis vel. Morbi ac finibus metus, vitae sodales magna. Etiam pharetra molestie ipsum. Sed id orci dapibus, tincidunt nibh a, elementum lectus. Quisque vitae ipsum quis mi ullamcorper interdum in eget mauris. Nulla ut hendrerit velit, in maximus sem. Donec vel mattis nibh. In sagittis odio enim, vitae dictum turpis consectetur a. Aenean non volutpat leo. Aenean ac ligula rhoncus, pretium est sed, molestie lacus. Etiam non elit quis risus semper congue. Ut malesuada accumsan lectus, in pretium metus scelerisque id.",
      timestamp: new Date(),
      author: {
        id: "2",
        email: "mail@mail.com",
        username: "Zika Zikic",
      },
    },
  ];

  const { id } = useParams();
  const userData: UserDataPayload = useSelector(
    (state: RootState) => state.auth.userData
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
      {interviews.map((interview) => (
        <TextCard key={interview.id} review={interview}></TextCard>
      ))}
    </CompanyPane>
  );
};

export default CompanyInterviewPage;
