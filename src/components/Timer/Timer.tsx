import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { setTimer, timerTick, toggleActive } from '../../redux/slices/timerSlice';
import { RootState } from '../../redux/store';

type TimerProps = {
  time: number
}

const Timer: React.FC<TimerProps> = ({ time }) => {
  const dispatch = useDispatch();
  const timer = useSelector((state: RootState) => state.timer.time);
  const isTimerActive = useSelector((state: RootState) => state.timer.isTimerActive);

 useEffect(() => {
   dispatch(setTimer(time));
   dispatch(toggleActive());
 }, []);

 useEffect(() => {
   let interval: any  = null;

   if (!timer) return;

   if (isTimerActive) {
    interval = setInterval(() => {
      dispatch(timerTick());
    }, 1000);
  } else if (isTimerActive && !timer) {
    dispatch(toggleActive());
    clearInterval(interval);
  }
  return () => clearInterval(interval);
 }, [timer]);
  
  return (
    <div>
      Timer {timer !== 0 ? timer : 'success'}
    </div>
  )
}

export default Timer;