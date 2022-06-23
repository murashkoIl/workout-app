import React from 'react'
import About from './About/About';
import ExerciseWrapper from './Exercise/ExerciseWrapper/ExerciseWrapper';

export type OverviewProps = {
  warmUp: any
  exercise: any
  stretching: any
}

const Overview: React.FC<OverviewProps> = ({ warmUp, exercise, stretching }) => {

  console.log('overview render');
  
  return (
    <>
      <About />
      <ExerciseWrapper 
        warmUp={warmUp}
        exercise={exercise}
        stretching={stretching}
      />
    </>
  )
}

export default Overview;