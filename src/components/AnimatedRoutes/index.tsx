import { Routes, Route, useLocation } from "react-router-dom";
import Overview from "components/Overview/components/OverviewPage";
import ExercisePage from "components/Exercises/components/ExercisePage";
import NotFoundPage from "components/NotFoundPage";
import { AnimatePresence } from "framer-motion";
import SignUp from "components/LoginPage/components/SignUp";
import Login from "components/LoginPage/components/Login";
import ForgotPassword from "components/LoginPage/components/ForgotPassword";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<Overview />} />
        <Route path="/exercises" element={<ExercisePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
