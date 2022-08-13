import { useSelector } from "react-redux";
import { UserDataPayload } from "../../../models/slices/auth";
import { RootState } from "../../../store/store";
import Header from "../../molecules/Header/Header";
import Layout from "../Layout/Layout";

const ProfilePane: React.FC = () => {
  const userData: UserDataPayload = useSelector((state: RootState) => state.auth.userData);

  return (
    <Layout>
      <Header fullName={userData.displayName} />
    </Layout>
  );
};

export default ProfilePane;
