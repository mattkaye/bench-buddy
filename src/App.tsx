import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { FaCircleChevronUp } from "react-icons/fa6";
import { Modality, MuscleGroup, Equipment, Level } from "./constants";
import { filterExerciseResults } from "./helpers";
import allExercises from "./data/all-exercises-min.json";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import ExerciseGrid from "./components/ExerciseGrid";
import styles from "./components/Filter/styles.module.css";
import "./common.css";

function App() {
  const [filteredExercises, setFilteredExercises] = useState({});

  useEffect(() => {
    let result = allExercises;
    const filterKeys = Object.keys(filteredExercises);

    for (let index = 0; index < filterKeys.length; index++) {
      const key = filterKeys[index];
      let fliterValues = filteredExercises[key].map((item) => item.value);

      if (fliterValues.length > 0) {
        result = filterExerciseResults(result, key, fliterValues);
      }
    }
    console.log("final result: ", result);
  }, [filteredExercises]);

  return (
    <>
      <Header />
      <div className={styles.filterForm}>
        <form>
          <Filter
            setFilteredExercises={setFilteredExercises}
            data={{
              label: "Muscle Group",
              jsonKey: "primaryMuscles",
              options: Object.keys(MuscleGroup).map((key) => {
                return {
                  label: MuscleGroup[key as keyof typeof MuscleGroup],
                  value: key,
                };
              }),
            }}
          />
          <Filter
            setFilteredExercises={setFilteredExercises}
            data={{
              label: "Category",
              jsonKey: "category",
              options: Object.keys(Modality).map((key) => {
                return {
                  label: Modality[key as keyof typeof Modality],
                  value: key,
                };
              }),
            }}
          />
          <Filter
            setFilteredExercises={setFilteredExercises}
            data={{
              label: "Equipment",
              jsonKey: "equipment",
              options: Object.keys(Equipment).map((key) => {
                return {
                  label: Equipment[key as keyof typeof Equipment],
                  value: key,
                };
              }),
            }}
          />
          <Filter
            setFilteredExercises={setFilteredExercises}
            data={{
              label: "Difficulty Level",
              jsonKey: "level",
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
