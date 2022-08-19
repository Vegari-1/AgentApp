import CompanyModel from "../../../models/CompanyModel";
import EntititesEmptyList from "../../atoms/EntitiesEmptyList/EntititesEmptyList";
import ManageRequestItem from "../../molecules/ManageRequestItem/ManageRequestItem";
import classes from "./ManageCompanyRequests.module.css";

interface ManageCompanyRequestsProps {
  requests: CompanyModel[];
  acceptRequest: (id: number) => void;
  declineRequest: (id: number) => void;
}

const ManageCompanyRequests: React.FC<ManageCompanyRequestsProps> = ({
  requests,
  acceptRequest,
  declineRequest,
}) => {
  return (
    <div className={classes["manage-requests"]}>
      {requests.map((request) => (
        <ManageRequestItem
          key={request.id}
          id={request.id}
          name={request.companyName}
          sector={request.industrySector}
          email={request.companyEmail}
          website={request.companyWebsite}
          info={request.companyInfo}
          acceptRequest={acceptRequest}
          declineRequest={declineRequest}
        />
      ))}

      {requests.length === 0 && <EntititesEmptyList entities="requests" />}
    </div>
  );
};

export default ManageCompanyRequests;
