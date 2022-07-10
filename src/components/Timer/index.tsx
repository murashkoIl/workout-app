/* eslint-disable react/require-default-props */
/* eslint-disable prettier/prettier */
import { useRef, useState, useEffect } from "react";
import styles from "./Timer.module.scss";

type TimerProps = {
  duration: number;
  color: string;
  isTimerActive?: boolean;
  isGetReady?: boolean;
  onTimerEnd?: () => void;
  setTimer?: (val: boolean) => void;
};

function Timer({ duration, color, isGetReady, onTimerEnd, isTimerActive = true, setTimer }: TimerProps) {
  const [time, setTime] = useState<number>(0);
  const timerRef = useRef<SVGCircleElement>(null);

  const handleAnimatedTimer = (): void => {
    timerRef.current!.style.strokeDashoffset = `${
      380 + (380 * (60 / duration) * time) / 60
    }`;
  };  

  useEffect(() => {
    setTime(duration);
    setTimer?.(true);

    timerRef.current!.style.stroke = color;
    return () => {
      setTimer?.(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timer | number = 0;

    handleAnimatedTimer();

    if (isTimerActive) {
      interval = setInterval(() => {
        if (time === 1 && duration === 5) {
          onTimerEnd?.();
        }

        if (!isGetReady && time === 1) {
          onTimerEnd?.();
        }

        if (isTimerActive && !time) {
          clearInterval(interval);
          return;
        }

        setTime((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTimerActive, time]);

  return (
    <div id={styles.time}>
      <div className={styles.circle}>
        <svg>
          <circle cx="60" cy="60" r="60" />
          <circle ref={timerRef} className={styles.ss} cx="60" cy="60" r="60" />
        </svg>
        <div id={styles.seconds}>{time !== 0 ? time : ""}</div>
      </div>
    </div>
  );
}

export default Timer;
