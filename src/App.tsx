import { useState } from "react";
import { IconContext } from "react-icons";
import { FaCircleChevronUp } from "react-icons/fa6";
import { Modality, MuscleGroup, Equipment, Level } from "./constants";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import ExerciseGrid from "./components/ExerciseGrid";
import styles from "./components/Filter/styles.module.css";
import "./common.css";

function App() {
  const [programExercises, setProgramExercises] = useState([]);

  return (
    <>
      <Header />
      <div className={styles.filterForm}>
        <form>
          <Filter
            setProgramExercises={setProgramExercises}
            programExercises={programExercises}
            data={{
              type: "Muscle Groups",
              options: Object.keys(MuscleGroup).map((key) => {
                return {
                  label: MuscleGroup[key as keyof typeof MuscleGroup],
                  value: key,
                };
              }),
            }}
          />
          <Filter
            setProgramExercises={setProgramExercises}
            programExercises={programExercises}
            data={{
              type: "Modality",
              options: Object.keys(Modality).map((key) => {
                return {
                  label: Modality[key as keyof typeof Modality],
                  value: key,
                };
              }),
            }}
          />
          <Filter
            setProgramExercises={setProgramExercises}
            programExercises={programExercises}
            data={{
              type: "Equipment",
              options: Object.keys(Equipment).map((key) => {
                return {
                  label: Equipment[key as keyof typeof Equipment],
                  value: key,
                };
              }),
            }}
          />
          <Filter
            setProgramExercises={setProgramExercises}
            programExercises={programExercises}
            data={{
              type: "Difficulty Level",
              options: Object.keys(Level).map((key) => {
                return {
                  label: Level[key as keyof typeof Level],
                  value: key,
                };
              }),
            }}
          />
        </form>
      </div>
      <main>
        {/* Call for the filtered json data in App and pass it to <ExerciseGrid /> */}
        <ExerciseGrid />
      </main>
      <Footer />
      <IconContext.Provider value={{ className: "backToTopIcon" }}>
        <a href='#' className='backToTop'>
          <FaCircleChevronUp />
        </a>
      </IconContext.Provider>
    </>
  );
}

export default App;
