import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/organisms/Layout/Layout";
import ManageCompanyRequests from "../../components/organisms/ManageCompanyRequests/ManageCompanyRequests";
import {
  acceptCompanyRequest,
  declineCompanyRequest,
  getCompanyRequests,
} from "../../store/actions/company-actions";
import { RootState } from "../../store/store";

const AdminPage: React.FC = () => {
  const requests = useSelector(
    (state: RootState) => state.company.companyRequests
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompanyRequests());
  }, [dispatch]);

  const declineRequestHandler = (id: number) => {
    dispatch(declineCompanyRequest(id));
  };

  const acceptRequestHandler = (id: number) => {
    dispatch(acceptCompanyRequest(id));
  };

  return (
    <Layout>
      <ManageCompanyRequests
        requests={requests}
        declineRequest={declineRequestHandler}
        acceptRequest={acceptRequestHandler}
      />
    </Layout>
  );
};

export default AdminPage;
