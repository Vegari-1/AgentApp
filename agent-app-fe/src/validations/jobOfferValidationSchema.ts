import * as Yup from "yup";

function formatDate(date: Date | string) {
  return new Date(date).toLocaleDateString();
}

const today = new Date();
today.setHours(0, 0, 0, 0);

const jobOfferValidationSchema = Yup.object().shape({
  title: Yup.string().required("* Required field"),
  position: Yup.string().required("* Required field"),
  jobDescription: Yup.string().required("* Required field"),
  qualificationsCombined: Yup.string().required("* Required field"),
  startDate: Yup.date()
    .min(today, "Start date cannot be in the past")
    .required("* Required field"),
  endDate: Yup.date()
    .min(
      Yup.ref("startDate"),
      ({ min }) => `Date needs to be after ${formatDate(min)}`
    )
    .required("* Required field"),
});

export default jobOfferValidationSchema;
