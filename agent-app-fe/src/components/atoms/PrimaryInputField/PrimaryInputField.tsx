import { Fragment } from "react";
import FormikField from "../../../models/formik/FormikField";
import FormikForm from "../../../models/formik/FormikForm";
import classes from "./PrimaryInputField.module.css";

interface PrimaryInputFieldProps {
  field: FormikField;
  form: FormikForm;
  text: string;
  type: string;
}

const PrimaryInputField: React.FC<PrimaryInputFieldProps> = ({
  field: { name, onBlur, onChange, value },
  form: { errors, touched, setFieldTouched },
  text,
  type,
}) => {
  const errorMsg = errors[name] && touched[name] ? errors[name] : "";
  return (
    <Fragment>
      <input
        placeholder={text}
        type={type}
        className={`${classes["primary-input-field"]} ${
          errors[name] && touched[name] && classes["primary-input-field-error"]
        }`}
        name={name}
        value={value as string}
        onChange={(e) => {
          setFieldTouched(name, true);
          onChange(name)(e.target.value);
        }}
        onBlur={() => {
          setFieldTouched(name, true);
          onBlur(name);
        }}
      />
      <label className={classes["primary-input-error-label"]}>{errorMsg}</label>
    </Fragment>
  );
};

export default PrimaryInputField;
