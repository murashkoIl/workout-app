/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import AnimatedRoutes from "components/AnimatedRoutes";
import { BrowserRouter } from "react-router-dom";
import {
  calculateExercisesDuration,
  fetchExercises,
  setExerciseCards,
} from "./redux/slices/dataSlice";
import { useAppDispatch } from "./redux/hooks/hooks";
import url from "./shared/consts";
import "./App.scss";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
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
    <BrowserRouter>
      <div className="App">
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
