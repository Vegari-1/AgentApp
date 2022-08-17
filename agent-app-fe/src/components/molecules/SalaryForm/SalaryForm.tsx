import { Field, Formik } from "formik";
import { useDispatch } from "react-redux";
import SalaryFormValues from "../../../models/forms/SalaryFormValues";
import salaryValidationSchema from "../../../validations/salaryValidationSchema";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import PrimaryInputField from "../../atoms/PrimaryInputField/PrimaryInputField";

import classes from "./SalaryForm.module.css";

const salaryFormInitialValues: SalaryFormValues = {
  amount: 0,
  position: "",
};

const SalaryForm: React.FC = () => {
  const dispatch = useDispatch();

  const submitHandler = (formValues: SalaryFormValues) => {
    console.log(formValues);
    // dispatch(companyRegisterRequest({ formValues }));
  };

  return (
    <Formik
      initialValues={salaryFormInitialValues}
      validationSchema={salaryValidationSchema}
      onSubmit={(formValues, { resetForm }) => {
        submitHandler(formValues);
        resetForm({
          values: {
            amount: 0,
            position: "",
          },
        });
      }}
    >
      {({ handleSubmit }) => (
        <div className={classes["form"]}>
          <h2 className={classes.label}>Create salary review</h2>
          <div className={classes.fields}>
            <Field
              component={PrimaryInputField}
              text="Salary amount"
              type="number"
              name="amount"
              value="amount"
            />
            <Field
              component={PrimaryInputField}
              text="Position"
              type="text"
              name="position"
              value="position"
            />
          </div>
          <div className={classes.button}>
            <PrimaryButton
              text="Create"
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

export default SalaryForm;
