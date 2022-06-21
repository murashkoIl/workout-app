import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Overview from './components/Overview/Overview';
import ExercisePage from './components/ExercisePage/ExercisePage';

const App: React.FC = () => {
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
