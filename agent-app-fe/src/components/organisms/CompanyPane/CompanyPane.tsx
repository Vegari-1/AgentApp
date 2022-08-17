import { ReactComponent as PlusIcon } from "../../../assets/svg/plus.svg";
import { ReactComponent as EditIcon } from "../../../assets/svg/edit.svg";
import HeaderItemModel from "../../../models/HeaderItemModel";
import IconButton from "../../atoms/IconButton/IconButton";
import Layout from "../Layout/Layout";
import classes from "./CompanyPane.module.css";

interface CompanyPaneProps {
  companyId: string;
  showAddButton?: boolean;
  onAddButtonClick?: () => void;
  isEdit?: boolean;
  children?: React.ReactNode;
}

const CompanyPane: React.FC<CompanyPaneProps> = ({
  companyId,
  showAddButton,
  onAddButtonClick,
  isEdit,
  children,
}) => {
  const rootUrl: string = "/company/" + companyId;
  const headerItems: HeaderItemModel[] = [
    { text: "About", link: rootUrl },
    { text: "Job offers", link: rootUrl + "/job-offer" },
    { text: "Comments", link: rootUrl + "/comment" },
    { text: "Interviews", link: rootUrl + "/interview" },
    { text: "Salaries", link: rootUrl + "/salary" },
  ];

  return (
    <Layout headerItems={headerItems}>
      <div className={classes["content-wrapper"]}>{children}</div>
      {showAddButton && (
        <div className={classes["add-button"]}>
          <IconButton
            icon={isEdit ? <EditIcon height={25} width={25} /> : <PlusIcon />}
            boxShadow
            onClick={onAddButtonClick!}
          />
        </div>
      )}
    </Layout>
  );
};

export default CompanyPane;
