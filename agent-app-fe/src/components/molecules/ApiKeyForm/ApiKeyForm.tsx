import { Field, Formik } from "formik";
import { useDispatch } from "react-redux";
import ApiKeyFormValues from "../../../models/forms/ApiKeyFormValues";

import { addApiKey } from "../../../store/slices/dislinkt";
import apiKeyValidationSchema from "../../../validations/apiKeyValidationSchema";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import PrimaryInputField from "../../atoms/PrimaryInputField/PrimaryInputField";

import classes from "./ApiKeyForm.module.css";

const apiKeyFormInitialValues: ApiKeyFormValues = {
  apiKey: "",
};

const ApiKeyForm: React.FC = () => {
  const dispatch = useDispatch();

  const submitHandler = (formValues: ApiKeyFormValues) => {
    dispatch(addApiKey({ formValues }));
  };

  return (
    <Formik
      initialValues={apiKeyFormInitialValues}
      validationSchema={apiKeyValidationSchema}
      onSubmit={(formValues) => {
        submitHandler(formValues);
      }}
    >
      {({ handleSubmit }) => (
        <div className={classes["api-key-form"]}>
          <div className={classes["form-title"]}>
            <h2 className={classes.label}>Connect to Dislinkt</h2>
            <img
              className={classes.logo}
              src="./images/dislinkt.png"
              alt="logo"
            />
          </div>
          <div className={classes.fields}>
            <Field
              component={PrimaryInputField}
              text="Dislinkt API key"
              type="password"
              name="apiKey"
              value="apiKey"
            />
          </div>
          <div className={classes.button}>
            <PrimaryButton
              text="Save"
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

export default ApiKeyForm;
