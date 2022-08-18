import * as Yup from "yup";

const companyValidationSchema = Yup.object().shape({
  industrySector: Yup.string().required("* Required field"),
  companyName: Yup.string().required("* Required field"),
  companyEmail: Yup.string()
    .email("* Invalid email format")
    .required("* Required field"),
  companyWebsite: Yup.string().required("* Required field"),
  companyInfo: Yup.string().required("* Required field"),
});

export default companyValidationSchema;
