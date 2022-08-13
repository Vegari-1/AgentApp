interface FormikForm {
  errors: any;
  touched: any;
  setFieldTouched: (name: string, touched: boolean) => void;
}

export default FormikForm;
