import { useEffect, useMemo, useState } from "react";
import { IconContext } from "react-icons";
import { FaCircleChevronUp } from "react-icons/fa6";
import { Modality, MuscleGroup, Equipment, Level } from "./constants";
import { filterExerciseResults } from "./helpers";
import allExercises from "./data/all-exercises-min.json";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import ExerciseGrid from "./components/ExerciseGrid";
import NoSearchResults from "./components/NoSearchResults";
import styles from "./components/Filter/styles.module.css";
import "./common.css";

function App() {
  const [chosenFilters, setChosenFilters] = useState({});
  const [exerciseResults, setExerciseResults] = useState([]);
  let filteredExercises = [];

  useEffect(() => {
    filteredExercises = allExercises;
    const filterKeys = Object.keys(chosenFilters);

    for (let index = 0; index < filterKeys.length; index++) {
      const key = filterKeys[index];
      let fliterValues = chosenFilters[key].map((item) => item.value);

      if (fliterValues.length > 0) {
        filteredExercises = filterExerciseResults(
          filteredExercises,
          key,
          fliterValues
        );
      }
    }
    setExerciseResults(filtersAreEmpty ? [] : filteredExercises);
  }, [chosenFilters]);

  const filtersAreEmpty = useMemo(() => {
    return (
      Object.values(chosenFilters).filter((item) => item.length).length === 0
    );
  }, [chosenFilters]);

  return (
    <>
      <Header />
      <div className={styles.filterForm}>
        <form>
          <Filter
            setChosenFilters={setChosenFilters}
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
            setChosenFilters={setChosenFilters}
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
            setChosenFilters={setChosenFilters}
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
            setChosenFilters={setChosenFilters}
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
        {exerciseResults.length === 0 ? (
          <NoSearchResults />
        ) : (
          <ExerciseGrid data={exerciseResults} />
        )}
      </main>
      <Footer />
      {exerciseResults.length > 0 && (
        <IconContext.Provider value={{ className: "backToTopIcon" }}>
          <a href='#' className='backToTop'>
            <FaCircleChevronUp />
          </a>
        </IconContext.Provider>
      )}
    </>
  );
}

export default App;
