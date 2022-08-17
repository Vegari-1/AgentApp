import { Fragment, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter,
  useNavigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AuthPage from "./pages/AuthPage/AuthPage";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CompanyPage from "./pages/CompanyPage/CompanyPage";
import CompanyJobOfferPage from "./pages/CompanyJobOfferPage/CompanyJobOfferPage";
import CompanyCommentPage from "./pages/CompanyCommentPage/CompanyCommentPage";
import CompanyInterviewPage from "./pages/CompanyInterviewPage/CompanyInterviewPage";
import CompanySalaryPage from "./pages/CompanySalaryPage/CompanySalaryPage";
import CompaniesPage from "./pages/CompaniesPage/CompaniesPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import { useDispatch } from "react-redux";
import Proba from "./pages/Proba/Proba";
import DislinktPage from "./pages/DislinktPage/DislinktPage";
import CompanyOwnerPage from "./pages/CompanyOwnerPage/CompanyOwnerPage";
import AddCompanyJobOfferPage from "./pages/AddCompanyJobOfferPage/AddCompanyJobOfferPage";
import EditCompanyPage from "./pages/EditCompanyPage/EditCompanyPage";
import AddCompanySalaryPage from "./pages/AddCompanySalaryPage/AddCompanySalaryPage";
import AddCompanyReviewPage from "./pages/AddCompanyReviewPage/AddCompanyReviewPage";

function App() {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(autoLogin({ navigate }));
  // }, [dispatch, navigate]);

  return (
    <Fragment>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        closeOnClick={true}
        pauseOnHover={true}
        closeButton={false}
        icon={false}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/auth" />} />
          <Route path="/auth" element={<AuthPage />} />

          <Route path="/proba" element={<Proba />} />

          <Route path="/requests" element={<AdminPage />} />

          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/dislinkt" element={<DislinktPage />} />
          <Route path="/profile/company" element={<CompanyOwnerPage />} />

          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/company/:id" element={<CompanyPage />} />
          <Route path="/company/:id/edit" element={<EditCompanyPage />} />

          <Route
            path="/company/:id/job-offer"
            element={<CompanyJobOfferPage />}
          />
          <Route
            path="/company/:id/job-offer/add"
            element={<AddCompanyJobOfferPage />}
          />

          <Route path="/company/:id/comment" element={<CompanyCommentPage />} />
          <Route
            path="/company/:id/comment/add"
            element={<AddCompanyReviewPage />}
          />

          <Route
            path="/company/:id/interview"
            element={<CompanyInterviewPage />}
          />
          <Route
            path="/company/:id/interview/add"
            element={<AddCompanyReviewPage />}
          />

          <Route path="/company/:id/salary" element={<CompanySalaryPage />} />
          <Route
            path="/company/:id/salary/add"
            element={<AddCompanySalaryPage />}
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
