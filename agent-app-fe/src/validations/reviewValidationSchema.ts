import * as Yup from "yup";

const reviewValidationSchema = Yup.object().shape({
  content: Yup.string().required("* Required field"),
});

export default reviewValidationSchema;
