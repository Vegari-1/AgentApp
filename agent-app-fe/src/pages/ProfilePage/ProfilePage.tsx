import { useSelector } from "react-redux";
import GridCard from "../../components/molecules/GridCard/GridCard";
import ProfilePane from "../../components/organisms/ProfilePane/ProfilePane";
import GridCardModel from "../../models/GridCardModel";
import { UserDataPayload } from "../../models/slices/auth";
import { RootState } from "../../store/store";

const ProfilePage: React.FC = () => {
  const userData: UserDataPayload = useSelector(
    (state: RootState) => state.auth.userData
  );
  const userInfoData: GridCardModel[] = [
    { label: "Username", value: userData.username },
    { label: "Name", value: userData.name },
    { label: "Surname", value: userData.surname },
  ];

  return (
    <ProfilePane>
      <GridCard title={"Profile information"} content={userInfoData} />
    </ProfilePane>
  );
};

export default ProfilePage;
