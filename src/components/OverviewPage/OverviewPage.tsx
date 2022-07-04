import About from "./About/About";
import ExerciseWrapper from "./Exercise/ExerciseWrapper/ExerciseWrapper";

function Overview() {
  console.log("overview render");

  return (
    <>
      <About />
      <ExerciseWrapper />
    </>
  );
}

export default Overview;
