import { Field, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import JobOfferFormValues from "../../../models/forms/JobOfferFormValues";
import jobOfferValidationSchema from "../../../validations/jobOfferValidationSchema";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import PrimaryInputField from "../../atoms/PrimaryInputField/PrimaryInputField";
import PrimaryTextArea from "../../atoms/PrimaryTextArea/PrimaryTextArea";

import classes from "./JobOfferForm.module.css";

const jobOfferFormInitialValues: JobOfferFormValues = {
  title: "",
  position: "",
  jobDescription: "",
  qualifications: [],
  startDate: new Date(),
  endDate: new Date(),
};

const JobOfferForm: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const submitHandler = (formValues: JobOfferFormValues) => {
    console.log(id);
    console.log(formValues);
    // splitovati qualifications po zarezu i stripovati vajtspejsova (jer unosi kao string)
    // dispatch(companyRegisterRequest({ formValues }));
  };

  return (
    <Formik
      initialValues={jobOfferFormInitialValues}
      validationSchema={jobOfferValidationSchema}
      onSubmit={(formValues, { resetForm }) => {
        submitHandler(formValues);
        resetForm({
          values: {
            title: "",
            position: "",
            jobDescription: "",
            qualifications: [],
            startDate: new Date(),
            endDate: new Date(),
          },
        });
      }}
    >
      {({ handleSubmit }) => (
        <div className={classes["form"]}>
          <h2 className={classes.label}>Create job offer</h2>
          <div className={classes.fields}>
            <Field
              component={PrimaryInputField}
              text="Title"
              type="text"
              name="title"
              value="title"
            />
            <Field
              component={PrimaryInputField}
              text="Position"
              type="text"
              name="position"
              value="position"
            />
            <Field
              component={PrimaryTextArea}
              placeholder="Description"
              type="text"
              name="jobDescription"
              value="jobDescription"
            />
            <Field
              component={PrimaryInputField}
              text="Qualifications (seperated by ',')"
              type="text"
              name="qualifications"
              value="qualifications"
            />
            <Field
              component={PrimaryInputField}
              text="Start date"
              type="date"
              name="startDate"
              value="startDate"
            />
            <Field
              component={PrimaryInputField}
              text="End date"
              type="date"
              name="endDate"
              value="endDate"
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

export default JobOfferForm;
