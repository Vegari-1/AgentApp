import { Field, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import SignInFormValues from "../../../models/forms/SignInFormValues";
import { signIn } from "../../../store/actions/auth-actions";
import signInValidationSchema from "../../../validations/signInValidationSchema";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import PrimaryInputField from "../../atoms/PrimaryInputField/PrimaryInputField";

import classes from "./SignInForm.module.css";

const signInFormInitialValues: SignInFormValues = {
  username: "",
  password: "",
};

const SignInForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = (formValues: SignInFormValues) => {
    dispatch(signIn({ formValues, navigate }));
  };

  return (
    <Formik
      initialValues={signInFormInitialValues}
      validationSchema={signInValidationSchema}
      onSubmit={(formValues, { resetForm }) => {
        submitHandler(formValues);
        resetForm({ values: { username: "", password: "" } });
      }}
    >
      {({ handleSubmit }) => (
        <div className={classes["sing-in-form"]}>
          <h1 className={classes.label}>Sign In</h1>
          <img className={classes.logo} src="./images/logo.png" alt="logo" />
          <div className={classes.fields}>
            <Field
              component={PrimaryInputField}
              text="Username"
              type="text"
              name="username"
              value="username"
            />
            <Field
              component={PrimaryInputField}
              text="Password"
              type="password"
              name="password"
              value="password"
            />
          </div>
          <div className={classes.button}>
            <PrimaryButton
              text="Sign In"
              onClickHandler={handleSubmit}
              isSubmit
            />
          </div>
        </div>
      )}
    </Formik>
  );
};

export default SignInForm;
