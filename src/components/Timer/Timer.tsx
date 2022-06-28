/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { setTimer, timerTick, toggleActive } from '../../redux/slices/timerSlice';
import { RootState } from '../../redux/store';

type TimerProps = {
  time: number
}

const Timer: React.FC<TimerProps> = ({ time }) => {
  const dispatch = useAppDispatch();
  const timer = useAppSelector((state: RootState) => state.timer.time);
  const isTimerActive = useAppSelector((state: RootState) => state.timer.isTimerActive);

 useEffect(() => {
   dispatch(setTimer(time));
   dispatch(toggleActive());
   return () => {
    dispatch(toggleActive());
   }
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
  return () => {
    clearInterval(interval);
  };
 }, [timer]);

  return (
    <div>
      Timer {timer !== 0 ? timer : 'success'}
    </div>
  )
}

export default Timer;