import * as Yup from "yup";

const signInValidationSchema = Yup.object().shape({
  username: Yup.string().required("* Required field"),
  password: Yup.string().required("* Required field"),
});

export default signInValidationSchema;
