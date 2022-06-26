import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Overview from './components/OverviewPage/OverviewPage';
import ExercisePage from './components/ExercisePage/ExercisePage';
import { IVideos } from './interfaces/VideosInterface';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { setExercises, setIsDataLoading } from './redux/slices/dataSlice';


const App: React.FC = () => {
  const API_TOKEN = '4bfcebd0-0216-4572-bdb7-939e9600b9b2';
  const dispatch = useDispatch();
  const [videos, setVideos] = useState<IVideos[]>([]);
  

  useEffect(() => {
    fetch(`https://rnd.kilohealthservices.com/api/quizzes/workouts?api_token=${API_TOKEN}`)
      .then(response => {
        return response.json();
      })
      .then(data => {       
        dispatch(setExercises(data));
        dispatch(setIsDataLoading());

        data.data.questions.forEach((category: any) => {
            category.exercises.forEach((exercise: any) => {
              const temp = {
                id: exercise.id,
                video: exercise.video,
                photo: exercise.photo
              }
              setVideos((videos) => [...videos, temp]);
            })
          })

      })
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
