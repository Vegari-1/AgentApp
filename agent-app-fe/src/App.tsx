import { Fragment } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
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

function App() {
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
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/company/:id" element={<CompanyPage />} />
          <Route
            path="/company/:id/job-offer"
            element={<CompanyJobOfferPage />}
          />
          <Route path="/company/:id/comment" element={<CompanyCommentPage />} />
          <Route
            path="/company/:id/interview"
            element={<CompanyInterviewPage />}
          />
          <Route path="/company/:id/salary" element={<CompanySalaryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
