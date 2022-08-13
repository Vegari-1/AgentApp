import * as Yup from "yup";

const signUpValidationSchema = Yup.object().shape({
  username: Yup.string().required("* Required field"),
  password: Yup.string().required("* Required field"),
  name: Yup.string().required("* Required field"),
  surname: Yup.string().required("* Required field"),
});

export default signUpValidationSchema;
