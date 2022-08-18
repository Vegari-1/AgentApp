import CompanyModel from "../../../models/CompanyModel";
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

      {requests.length === 0 && (
        <div className={classes["no-requests"]}>
          No active requests currently
        </div>
      )}
    </div>
  );
};

export default ManageCompanyRequests;
