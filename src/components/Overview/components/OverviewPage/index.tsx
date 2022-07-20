/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAppDispatch } from "redux/hooks/hooks";
import { setCurrentUser } from "redux/slices/authSlice";
import About from "../About";
import ExerciseWrapper from "../ExerciseWrapper";

function Overview() {
  const dispatch = useAppDispatch();
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch(
          setCurrentUser({
            email: user?.email || "",
            id: user?.uid || "",
          }),
        );
        navigate("/");
      } else {
        navigate("/login");
      }
    });
  }, []);

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
