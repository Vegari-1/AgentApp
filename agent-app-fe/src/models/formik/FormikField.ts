interface FormikField {
  name: string;
  onBlur: (name: string) => void;
  onChange: (name: string) => any;
  value: string | number | boolean;
}

export default FormikField;
