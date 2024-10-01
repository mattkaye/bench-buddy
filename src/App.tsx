import { useEffect, useMemo, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Modality, MuscleGroup, Equipment, Level } from "./constants";
import { filterExerciseResults } from "./helpers";
import allExercises from "./data/all-exercises-min.json";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import { IconContext } from "react-icons";
import Header from "./components/Header";
import Filter from "./components/Filter";
import ExerciseGrid from "./components/ExerciseGrid";
import Exercise from "./components/Exercise";
import NoSearchResults from "./components/NoSearchResults";
import Footer from "./components/Footer";
import styles from "./components/Filter/styles.module.css";
import "./common.css";
import BackToTop from "./components/BackToTop";

function App() {
  const { pathname } = useLocation();
  const [filtersHidden, setFiltersHidden] = useState(false);
  const [chosenFilters, setChosenFilters] = useState({});
  const [exerciseResults, setExerciseResults] = useState([]);
  let filteredExercises = [];

  useEffect(() => {
    filteredExercises = allExercises;
    const filterKeys = Object.keys(chosenFilters);

    for (let index = 0; index < filterKeys.length; index++) {
      const key = filterKeys[index];
      const fliterValues = chosenFilters[key].map((item) => item.value);

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

  const exerciseResultsAreShowing = () => {
    return exerciseResults.length && pathname === "/";
  };

  const toggleFilterVisibility = (e) => {
    e.preventDefault();
    setFiltersHidden(!filtersHidden);
  };

  return (
    <>
      <div className='stickyHeader'>
        <Header />
        <IconContext.Provider value={{ className: "filterIcon" }}>
          <a
            className='toggleFilters'
            href='#'
            onClick={toggleFilterVisibility}
          >
            {filtersHidden ? <BiSolidHide /> : <BiSolidShow />} Toggle Filters
          </a>
        </IconContext.Provider>
        {!filtersHidden && (
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
        )}
      </div>
      <main>
        <Routes>
          <Route
            path='/'
            element={
              exerciseResults.length === 0 ? (
                <NoSearchResults />
              ) : (
                <ExerciseGrid data={exerciseResults} />
              )
            }
          />
          <Route path='/exercise/:id' element={<Exercise />} />
        </Routes>
      </main>
      <Footer />
      {exerciseResultsAreShowing() ? <BackToTop /> : null}
    </>
  );
}

export default App;
