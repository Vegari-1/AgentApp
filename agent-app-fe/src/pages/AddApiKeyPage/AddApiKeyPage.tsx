import { useSelector } from "react-redux";
import ApiKeyForm from "../../components/molecules/ApiKeyForm/ApiKeyForm";
import ProfilePane from "../../components/organisms/ProfilePane/ProfilePane";
import { UserDataPayload } from "../../models/slices/auth";
import { RootState } from "../../store/store";

const AddApiKeyPage: React.FC = () => {
  const userData: UserDataPayload = useSelector(
    (state: RootState) => state.auth.userData
  );

  return (
    <ProfilePane>
      <ApiKeyForm apiKey={userData.apiKey} />
    </ProfilePane>
  );
};

export default AddApiKeyPage;
