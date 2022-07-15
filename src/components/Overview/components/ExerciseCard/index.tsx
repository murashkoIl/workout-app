/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import styles from "./ExerciseCard.module.scss";

type ExerciseCardProps = {
  img: string;
  title: string;
  duration: number;
  isDone: string;
};

function ExerciseCard({ isDone, img, title, duration }: ExerciseCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
        },
      });
    }

    if (!inView) {
      animation.start({
        opacity: 0,
      });
    }
  }, [inView, animation]);

  return (
    <motion.div ref={ref} animate={animation} className={styles.exerciseCard}>
      <div
        className={
          isDone === "done" ? styles.exerciseImageDone : styles.exerciseImage
        }
      >
        <img src={img} alt="exercise" />
      </div>
      <div className={styles.exerciseInfo}>
        <div className={styles.exerciseInfoTitle}>{title}</div>
        <div className={styles.exerciseInfoDuration}>{duration} sec</div>
      </div>
    </motion.div>
  );
}

export default ExerciseCard;
