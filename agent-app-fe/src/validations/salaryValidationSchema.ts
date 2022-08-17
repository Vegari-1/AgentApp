import * as Yup from "yup";

const salaryValidationSchema = Yup.object().shape({
  amount: Yup.number()
    .required("* Required field")
    .min(0, "* Salary amount must not be less than 0"),
  position: Yup.string().required("* Required field"),
});

export default salaryValidationSchema;
