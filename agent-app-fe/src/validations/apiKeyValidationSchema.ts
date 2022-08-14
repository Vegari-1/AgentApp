import * as Yup from "yup";

const apiKeyValidationSchema = Yup.object().shape({
  apiKey: Yup.string().required("* Required field"),
});

export default apiKeyValidationSchema;
