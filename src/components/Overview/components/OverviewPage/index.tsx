import { motion } from "framer-motion";
import About from "../About";
import ExerciseWrapper from "../ExerciseWrapper";

function Overview() {
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
