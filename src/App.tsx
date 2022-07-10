/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  calculateExercisesDuration,
  fetchExercises,
  setExerciseCards,
} from "./redux/slices/dataSlice";
import { useAppDispatch } from "./redux/hooks/hooks";
import Overview from "./components/Overview/components/OverviewPage";
import NotFoundPage from "./components/NotFoundPage";
import ExercisePage from "./components/Exercises/components/ExercisePage";
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
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/exercises" element={<ExercisePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
