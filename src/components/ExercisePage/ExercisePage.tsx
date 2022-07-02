import React from 'react';
import { useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../redux/store';
import GetReady from './GetReady/GetReady';
import VideoWrapper from './VideoWrapper/VideoWrapper';

const ExercisePage: React.FC = () => {
  const isGetReady = useAppSelector((state: RootState) => state.exercises.isGetReady);
  const { exerciseCards, exerciseCounter } = useAppSelector((state: RootState) => state.data);  
  
  return (
    <>
      {isGetReady 
        ? <GetReady card={exerciseCards[exerciseCounter]} /> 
        : <VideoWrapper card={exerciseCards[exerciseCounter]} />}
    </>
  )
}

export default ExercisePage;
