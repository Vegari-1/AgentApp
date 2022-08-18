import { Field, Formik } from "formik";
import { useDispatch } from "react-redux";
import CompanyModel from "../../../models/CompanyModel";
import CompanyFormValues from "../../../models/forms/CompanyFormValues";
import CompanyRegisterFormValues from "../../../models/forms/CompanyFormValues";
import {
  createCompanyRequest,
  editCompany,
} from "../../../store/actions/company-actions";
import companyValidationSchema from "../../../validations/companyValidationSchema";

import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import PrimaryInputField from "../../atoms/PrimaryInputField/PrimaryInputField";
import PrimaryTextArea from "../../atoms/PrimaryTextArea/PrimaryTextArea";

import classes from "./CompanyForm.module.css";

interface CompanyFormProps {
  isRegister?: boolean;
  id?: number;
  company?: CompanyModel;
}

const companyFormInitialValues: CompanyFormValues = {
  industrySector: "",
  companyName: "",
  companyEmail: "",
  companyWebsite: "",
  companyInfo: "",
};

const CompanyForm: React.FC<CompanyFormProps> = ({
  isRegister,
  id,
  company,
}) => {
  const dispatch = useDispatch();

  const submitHandler = (formValues: CompanyRegisterFormValues) => {
    if (isRegister) {
      dispatch(createCompanyRequest(formValues));
    } else {
      formValues.id = id;
      dispatch(editCompany(formValues));
    }
  };

  return (
    <Formik
      initialValues={isRegister ? companyFormInitialValues : company!}
      validationSchema={companyValidationSchema}
      onSubmit={(formValues, { resetForm }) => {
        submitHandler(formValues);
        if (isRegister) {
          resetForm({
            values: {
              industrySector: "",
              companyName: "",
              companyEmail: "",
              companyWebsite: "",
              companyInfo: "",
            },
          });
        }
      }}
    >
      {({ handleSubmit }) => (
        <div className={classes["form"]}>
          <h2 className={classes.label}>
            {isRegister ? "Register" : "Edit"} company
          </h2>
          <div className={classes.fields}>
            <Field
              component={PrimaryInputField}
              text="Industry sector"
              type="text"
              name="industrySector"
              value="industrySector"
            />
            <Field
              component={PrimaryInputField}
              text="Company name"
              type="text"
              name="companyName"
              value="companyName"
            />
            <Field
              component={PrimaryInputField}
              text="Company email"
              type="text"
              name="companyEmail"
              value="companyEmail"
            />
            <Field
              component={PrimaryInputField}
              text="Company website"
              type="text"
              name="companyWebsite"
              value="companyWebsite"
            />
            <Field
              component={PrimaryTextArea}
              placeholder="Company info"
              type="text"
              name="companyInfo"
              value="companyInfo"
            />
          </div>
          <div className={classes.button}>
            <PrimaryButton
              text={isRegister ? "Register" : "Save"}
              onClickHandler={handleSubmit}
              isSubmit
              small
            />
          </div>
        </div>
      )}
    </Formik>
  );
};

export default CompanyForm;
