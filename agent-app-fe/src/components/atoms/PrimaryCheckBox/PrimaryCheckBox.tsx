import FormikField from "../../../models/formik/FormikField";
import FormikForm from "../../../models/formik/FormikForm";
import classes from "./PrimaryCheckBox.module.css";

interface PrimaryCheckBoxProps {
  field: FormikField;
  form: FormikForm;
  label: string;
  type: string;
}

const PrimaryCheckBox: React.FC<PrimaryCheckBoxProps> = ({
  field: { name, onBlur, onChange, value },
  form: { errors, touched, setFieldTouched, setFieldValue },
  label,
  type,
}) => {
  const shouldDisplayError = errors[name] && touched[name];

  return (
    <div className={classes["checkbox-wrapper"]}>
      <label
        className={`${classes["checkbox-label"]} ${
          shouldDisplayError && classes["checkbox-label-error"]
        }`}
      >
        {label}
      </label>
      <input
        className={`${classes["checkbox"]} ${
          shouldDisplayError && classes["checkbox-error"]
        }`}
        type={type}
        name={name}
        value={value as string}
        onChange={(e) => {
          setFieldTouched(name, true);
          setFieldValue(name, e.target.checked);
        }}
        onBlur={() => {
          setFieldTouched(name, true);
          onBlur(name);
        }}
      ></input>
      <span className={classes["checkbox-error-span"]}>
        {shouldDisplayError ? errors[name] : ""}
      </span>
    </div>
  );
};

export default PrimaryCheckBox;
