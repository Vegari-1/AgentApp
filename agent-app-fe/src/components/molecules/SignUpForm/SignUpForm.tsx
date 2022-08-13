import { Field, Formik } from "formik";
import { useDispatch } from "react-redux";
import SignUpFormValues from "../../../models/forms/SingUpFormValues";
import { signUp } from "../../../store/slices/auth";
import signUpValidationSchema from "../../../validations/signUpValidationSchema";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import PrimaryInputField from "../../atoms/PrimaryInputField/PrimaryInputField";

import classes from "./SignUpForm.module.css";

const signUpFormInitialValues: SignUpFormValues = {
  username: "",
  password: "",
  name: "",
  surname: ""
};

const SignUpForm: React.FC = () => {
  const dispatch = useDispatch();
  const submitHandler = (formValues: SignUpFormValues) => {
    dispatch(signUp({ formValues }));
  };

  return (
    <Formik
      initialValues={signUpFormInitialValues}
      validationSchema={signUpValidationSchema}
      onSubmit={(formValues, {resetForm}) => {
        submitHandler(formValues); 
        resetForm({values: {username: '', password: '', name: '', surname: ''}});
      }}
    >
      {({ handleSubmit }) => (
        <div className={classes["sing-up-form"]}>
          <h1 className={classes.label}>Sign Up</h1>
          <img className={classes.logo} src="./images/logo.png" />
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
            <Field
              component={PrimaryInputField}
              text="Name"
              type="text"
              name="name"
              value="name"
            />
            <Field
              component={PrimaryInputField}
              text="Surname"
              type="text"
              name="surname"
              value="surname"
            />
          </div>
          <div className={classes.button}>
            <PrimaryButton
              text="Sign Up"
              onClickHandler={handleSubmit}
              isSubmit
            />
          </div>
        </div>
      )}
    </Formik>
  );
};

export default SignUpForm;
