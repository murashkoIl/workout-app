import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Overview from "components/Overview/components/OverviewPage";
import ExercisePage from "components/Exercises/components/ExercisePage";
import NotFoundPage from "components/NotFoundPage";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Overview />} />
        <Route path="/exercises" element={<ExercisePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
