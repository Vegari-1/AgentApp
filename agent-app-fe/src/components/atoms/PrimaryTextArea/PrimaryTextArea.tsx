import FormikField from "../../../models/formik/FormikField";
import FormikForm from "../../../models/formik/FormikForm";
import classes from "./PrimaryTextArea.module.css";

interface PrimaryTextAreaProps {
  field: FormikField;
  form: FormikForm;
  label: string;
  placeholder: string;
}

const PrimaryTextArea: React.FC<PrimaryTextAreaProps> = ({
  field: { name, onBlur, onChange, value },
  form: { errors, touched, setFieldTouched },
  label,
  placeholder,
}) => {
  const shouldDisplayError = errors[name] && touched[name];

  return (
    <div className={classes["text-area-wrapper"]}>
      <label
        className={`${classes["text-area-label"]} ${
          shouldDisplayError && classes["text-area-label-error"]
        }`}
      >
        {label}
      </label>
      <textarea
        className={`${classes["text-area"]} ${
          shouldDisplayError && classes["text-area-error"]
        }`}
        placeholder={placeholder}
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
        rows={5}
        cols={50}
      ></textarea>
      <span className={classes["text-area-error-span"]}>
        {shouldDisplayError ? errors[name] : ""}
      </span>
    </div>
  );
};

export default PrimaryTextArea;
