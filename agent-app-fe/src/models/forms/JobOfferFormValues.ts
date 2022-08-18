interface JobOfferFormValues {
  title: string;
  position: string;
  jobDescription: string;
  qualificationsCombined: string;
  startDate: Date;
  endDate: Date;
  qualifications?: string[];
  companyId?: number;
}

export default JobOfferFormValues;
