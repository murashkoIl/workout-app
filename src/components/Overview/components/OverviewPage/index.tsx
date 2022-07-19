import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAppSelector } from "redux/hooks/hooks";
import About from "../About";
import ExerciseWrapper from "../ExerciseWrapper";

function Overview() {
  const currentUser = useAppSelector((state) => state.auth.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      <About />
      <ExerciseWrapper />
    </motion.div>
  );
}

export default Overview;
