import { useEffect, useState } from "react";
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
  const [refresh, setRefresh] = useState(false);

  const requests = useSelector(
    (state: RootState) => state.company.companyRequests
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompanyRequests());
    setRefresh(false);
  }, [dispatch, refresh]);

  const declineRequestHandler = (id: number) => {
    dispatch(declineCompanyRequest(id));
    setRefresh(true);
  };

  const acceptRequestHandler = (id: number) => {
    dispatch(acceptCompanyRequest(id));
    setRefresh(true);
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
