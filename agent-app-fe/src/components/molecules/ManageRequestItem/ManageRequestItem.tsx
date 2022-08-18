import { useState } from "react";

import { ReactComponent as AcceptIcon } from "../../../assets/svg/done.svg";
import { ReactComponent as DeclineIcon } from "../../../assets/svg/close.svg";

import classes from "./ManageRequestItem.module.css";

interface ManageRequestItemProps {
  id: number;
  sector: string;
  name: string;
  email: string;
  website: string;
  info: string;
  acceptRequest: (id: number) => void;
  declineRequest: (id: number) => void;
}

const ManageRequestItem: React.FC<ManageRequestItemProps> = ({
  id,
  sector,
  name,
  email,
  website,
  info,
  acceptRequest,
  declineRequest,
}) => {
  const [confirmDecline, setConfirmDecline] = useState(false);

  const acceptHanlder = () => {
    acceptRequest(id);
  };

  const declineHandler = () => {
    setConfirmDecline(!confirmDecline);
  };

  const confirmDeclineHandler = () => {
    declineRequest(id);
  };

  return (
    <div className={classes["manage-request-item-wrapper"]}>
      <div
        className={`${classes["manage-request-item"]} ${
          confirmDecline && classes["blur"]
        }`}
      >
        <div className={classes["sector"]}>{sector}</div>
        <span className={classes["title"]}>{name}</span>
        <span className={classes["contact"]}>{`${website}\n${email}`}</span>
        <div className={classes["actions"]}>
          <AcceptIcon
            width={25}
            height={25}
            cursor="pointer"
            onClick={acceptHanlder}
          />
          <span className={classes["space"]} />
          <DeclineIcon
            width={25}
            height={25}
            cursor="pointer"
            onClick={declineHandler}
          />
        </div>
      </div>

      {confirmDecline && (
        <button
          className={classes["delete-button"]}
          onClick={confirmDeclineHandler}
        >
          Decline
        </button>
      )}
    </div>
  );
};

export default ManageRequestItem;
