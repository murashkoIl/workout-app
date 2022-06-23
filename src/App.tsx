import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Overview from './components/OverviewPage/OverviewPage';
import ExercisePage from './components/ExercisePage/ExercisePage';
import { IExerciseCard } from './interfaces/ExerciseCardInterface';
import { IVideos } from './interfaces/VideosInterface';

//
import { store } from './redux/store';
//

const App: React.FC = () => {
  const API_TOKEN = '4bfcebd0-0216-4572-bdb7-939e9600b9b2';
  const [warmUp, setWarmUp] = useState<IExerciseCard>();
  const [exercise, setExercise] = useState<IExerciseCard>();
  const [stretching, setStretching] = useState<IExerciseCard>();
  const [videos, setVideos] = useState<IVideos[]>([]);

  console.log('store', store);
  

  useEffect(() => {
    fetch(`https://rnd.kilohealthservices.com/api/quizzes/workouts?api_token=${API_TOKEN}`)
      .then(response => {
        return response.json();
      })
      .then(data => {        
        setWarmUp(data.data.questions[0]);
        setExercise(data.data.questions[1]);
        setStretching(data.data.questions[2]);

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
  
  console.log('app render');
  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Overview
           warmUp={warmUp}
           exercise={exercise}
           stretching={stretching}
          />} />
          <Route path='/exercises' element={<ExercisePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
