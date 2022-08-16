import { Field, Formik } from "formik";
import { useDispatch } from "react-redux";
import CompanyRegisterFormValues from "../../../models/forms/CompanyRegisterFormValues";
import { companyRegisterRequest } from "../../../store/slices/company";

import companyRegisterValidationSchema from "../../../validations/companyRegisterValidationSchema";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import PrimaryInputField from "../../atoms/PrimaryInputField/PrimaryInputField";

import classes from "./CompanyRegisterForm.module.css";

const companyRegisterFormInitialValues: CompanyRegisterFormValues = {
  industrySector: "",
  companyName: "",
  companyEmail: "",
  companyWebsite: "",
  companyInfo: "",
};

const CompanyRegisterForm: React.FC = () => {
  const dispatch = useDispatch();

  const submitHandler = (formValues: CompanyRegisterFormValues) => {
    dispatch(companyRegisterRequest({ formValues }));
  };

  return (
    <Formik
      initialValues={companyRegisterFormInitialValues}
      validationSchema={companyRegisterValidationSchema}
      onSubmit={(formValues, { resetForm }) => {
        submitHandler(formValues);
        resetForm({
          values: {
            industrySector: "",
            companyName: "",
            companyEmail: "",
            companyWebsite: "",
            companyInfo: "",
          },
        });
      }}
    >
      {({ handleSubmit }) => (
        <div className={classes["form"]}>
          <h2 className={classes.label}>Register company</h2>
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
              component={PrimaryInputField}
              text="Company info"
              type="text"
              name="companyInfo"
              value="companyInfo"
            />
          </div>
          <div className={classes.button}>
            <PrimaryButton
              text="Register"
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

export default CompanyRegisterForm;
