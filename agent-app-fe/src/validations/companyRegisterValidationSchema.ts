import * as Yup from "yup";

const companyRegisterValidationSchema = Yup.object().shape({
  industrySector: Yup.string().required("* Required field"),
  companyName: Yup.string().required("* Required field"),
  companyEmail: Yup.string().required("* Required field"),
  companyWebsite: Yup.string().required("* Required field"),
  companyInfo: Yup.string().required("* Required field"),
});

export default companyRegisterValidationSchema;
