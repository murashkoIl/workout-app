/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import AnimatedRoutes from "components/AnimatedRoutes";
import { useNavigate } from "react-router-dom";
import AuthProvider from "contexts/AuthContext";
import {
  calculateExercisesDuration,
  fetchExercises,
  setExerciseCards,
} from "./redux/slices/dataSlice";
import { useAppDispatch } from "./redux/hooks/hooks";
import { url } from "./shared/consts";
import "./App.scss";

function App() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
    dispatch(fetchExercises(url))
      .then(() => {
        dispatch(setExerciseCards());
      })
      .then(() => {
        dispatch(calculateExercisesDuration());
      })
      // eslint-disable-next-line no-alert
      .catch((err: string) => alert(err));
  }, []);

  return (
    <AuthProvider>
      <div className="App">
        <AnimatedRoutes />
      </div>
    </AuthProvider>
  );
}

export default App;
