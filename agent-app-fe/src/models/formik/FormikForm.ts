interface FormikForm {
  errors: any;
  touched: any;
  setFieldTouched: (name: string, touched: boolean) => void;
  setFieldValue: (name: string, value: any) => void;
}

export default FormikForm;
