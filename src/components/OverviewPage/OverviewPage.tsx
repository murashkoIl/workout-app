import React from 'react'
import About from './About/About';
import ExerciseWrapper from './Exercise/ExerciseWrapper/ExerciseWrapper';



const Overview: React.FC = () => {

  console.log('overview render');
  
  return (
    <>
      <About />
      <ExerciseWrapper />
    </>
  )
}

export default Overview;