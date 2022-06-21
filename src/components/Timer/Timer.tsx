import React, { useState } from 'react'

type TimerProps = {
  time: number
}

const Timer: React.FC<TimerProps> = ({ time }) => {

  const [timer, setTimer] = useState<number>(time);

  const timeout = setTimeout(() => {
    setTimer(timer - 1);
  }, 1000);

  if (timer === 0) {
    clearInterval(timeout);
  } 

  console.log('timer rerendered');
  
  return (
    <div>
      Timer {timer !== 0 ? timer : 'success'}
    </div>
  )
}

export default Timer;