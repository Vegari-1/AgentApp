import { Fragment } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AuthPage from "./pages/AuthPage/AuthPage";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <Fragment>
      <ToastContainer
        position="top-right"
        autoClose={50000000}
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
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
