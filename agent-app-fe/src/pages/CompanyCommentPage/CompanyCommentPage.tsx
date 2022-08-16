import TextCard from "../../components/atoms/TextCard/TextCard";
import CompanyPane from "../../components/organisms/CompanyPane/CompanyPane";
import ReviewModel from "../../models/ReviewModel";

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
  return (
    <CompanyPane>
      {comments.map((comment) => (
        <TextCard key={comment.id} review={comment}></TextCard>
      ))}
    </CompanyPane>
  );
};

export default CompanyCommentPage;
