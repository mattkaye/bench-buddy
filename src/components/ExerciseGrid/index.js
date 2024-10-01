import { jsx as _jsx } from "react/jsx-runtime";
import ExerciseCard from "../ExerciseCard";
import styles from "./styles.module.css";
const ExerciseGrid = ({ data }) => {
    return (_jsx("section", { className: styles.componentWrapper, children: _jsx("ul", { children: data.map((exercise) => (_jsx("li", { children: _jsx(ExerciseCard, { data: exercise }) }, exercise.id))) }) }));
};
export default ExerciseGrid;
