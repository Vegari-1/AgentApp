import UserModel from "./UserModel";

interface ReviewModel {
  id: string;
  text: string;
  timestamp: Date;
  author: UserModel;
}

export default ReviewModel;
