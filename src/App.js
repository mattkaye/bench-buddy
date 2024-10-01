import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
                filteredExercises = filterExerciseResults(filteredExercises, key, fliterValues);
            }
        }
        setExerciseResults(filtersAreEmpty ? [] : filteredExercises);
    }, [chosenFilters]);
    const filtersAreEmpty = useMemo(() => {
        return (Object.values(chosenFilters).filter((item) => item.length).length === 0);
    }, [chosenFilters]);
    const exerciseResultsAreShowing = () => {
        return exerciseResults.length && pathname === "/";
    };
    const toggleFilterVisibility = (e) => {
        e.preventDefault();
        setFiltersHidden(!filtersHidden);
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: 'stickyHeader', children: [_jsx(Header, {}), _jsx(IconContext.Provider, { value: { className: "filterIcon" }, children: _jsxs("a", { className: 'toggleFilters', href: '#', onClick: toggleFilterVisibility, children: [filtersHidden ? _jsx(BiSolidHide, {}) : _jsx(BiSolidShow, {}), " Toggle Filters"] }) }), _jsx("div", { className: `${styles.filterForm} ${filtersHidden ? "hideFilters" : ""}`, children: _jsxs("form", { children: [_jsx(Filter, { setChosenFilters: setChosenFilters, data: {
                                        label: "Muscle Group",
                                        jsonKey: "primaryMuscles",
                                        options: Object.keys(MuscleGroup).map((key) => {
                                            return {
                                                label: MuscleGroup[key],
                                                value: key,
                                            };
                                        }),
                                    } }), _jsx(Filter, { setChosenFilters: setChosenFilters, data: {
                                        label: "Category",
                                        jsonKey: "category",
                                        options: Object.keys(Modality).map((key) => {
                                            return {
                                                label: Modality[key],
                                                value: key,
                                            };
                                        }),
                                    } }), _jsx(Filter, { setChosenFilters: setChosenFilters, data: {
                                        label: "Equipment",
                                        jsonKey: "equipment",
                                        options: Object.keys(Equipment).map((key) => {
                                            return {
                                                label: Equipment[key],
                                                value: key,
                                            };
                                        }),
                                    } }), _jsx(Filter, { setChosenFilters: setChosenFilters, data: {
                                        label: "Difficulty Level",
                                        jsonKey: "level",
                                        options: Object.keys(Level).map((key) => {
                                            return {
                                                label: Level[key],
                                                value: key,
                                            };
                                        }),
                                    } })] }) })] }), _jsx("main", { children: _jsxs(Routes, { children: [_jsx(Route, { path: '/', element: exerciseResults.length === 0 ? (_jsx(NoSearchResults, {})) : (_jsx(ExerciseGrid, { data: exerciseResults })) }), _jsx(Route, { path: '/exercise/:id', element: _jsx(Exercise, {}) })] }) }), _jsx(Footer, {}), exerciseResultsAreShowing() ? _jsx(BackToTop, {}) : null] }));
}
export default App;
