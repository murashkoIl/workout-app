/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Overview from './components/OverviewPage/OverviewPage';
import ExercisePage from './components/ExercisePage/ExercisePage';
import { fetchExercises, setExerciseCards } from './redux/slices/dataSlice';
import { useAppDispatch } from './redux/hooks/hooks';
import { url } from './shared/consts';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchExercises(url))
      .then(()=>{
        dispatch(setExerciseCards());
      })
      .catch(err => alert(err));
  }, []); 
  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Overview />} />
          <Route path='/exercises' element={<ExercisePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
