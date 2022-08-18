import { Field, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ReviewFormValues from "../../../models/forms/ReviewFormValues";
import {
  createCompanyComment,
  createCompanyInterview,
} from "../../../store/actions/company-actions";
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
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (formValues: ReviewFormValues) => {
    formValues.companyId = +id!;
    if (type === "comment") {
      dispatch(createCompanyComment(formValues));
      navigate("/company/" + id + "/comment");
    } else {
      dispatch(createCompanyInterview(formValues));
      navigate("/company/" + id + "/interview");
    }
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
