import CompanyModel from "./CompanyModel";

interface JobOfferModel {
  id: number;
  title: string;
  position: string;
  jobDescription: string;
  qualifications: string[];
  startDate: Date;
  endDate: Date;
  company: CompanyModel;
}

export default JobOfferModel;
