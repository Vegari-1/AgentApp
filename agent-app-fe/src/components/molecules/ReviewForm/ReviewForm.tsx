import { Field, Formik } from "formik";
import { useDispatch } from "react-redux";
import ReviewFormValues from "../../../models/forms/ReviewFormValues";
import reviewValidationSchema from "../../../validations/reviewValidationSchema";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import PrimaryTextArea from "../../atoms/PrimaryTextArea/PrimaryTextArea";

import classes from "./ReviewForm.module.css";

interface ReviewFormProps {
  type: string;
}

const reviewFormInitialValues: ReviewFormValues = {
  content: "",
};

const ReviewForm: React.FC<ReviewFormProps> = ({ type }) => {
  const dispatch = useDispatch();

  const submitHandler = (formValues: ReviewFormValues) => {
    // u zavisnosti od tipa dispacuj ili comment ili interview akciju
    console.log(formValues);
    // dispatch(companyRegisterRequest({ formValues }));
  };

  return (
    <Formik
      initialValues={reviewFormInitialValues}
      validationSchema={reviewValidationSchema}
      onSubmit={(formValues, { resetForm }) => {
        submitHandler(formValues);
        resetForm({
          values: {
            content: "",
          },
        });
      }}
    >
      {({ handleSubmit }) => (
        <div className={classes["form"]}>
          <h2 className={classes.label}>Create {type}</h2>
          <div className={classes.fields}>
            <Field
              component={PrimaryTextArea}
              placeholder={`${
                type.charAt(0).toUpperCase() + type.slice(1)
              } text`}
              type="text"
              name="content"
              value="content"
            />
          </div>
          <div className={classes.button}>
            <PrimaryButton
              text="Create"
              onClickHandler={handleSubmit}
              isSubmit
              small
            />
          </div>
        </div>
      )}
    </Formik>
  );
};

export default ReviewForm;
