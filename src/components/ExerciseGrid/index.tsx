import ExerciseCard from "../ExerciseCard";
import styles from "./styles.module.css";
import allExercises from "../../all-exercises.json";
import { Exercise } from "../../types";

const result: Exercise[] = allExercises.filter((exercise) => {
  return exercise.primaryMuscles.includes("chest");
});

console.log(result);

const ExerciseGrid = () => {
  return (
    <section className={styles.componentWrapper}>
      <ul>
        {result.map((exercise) => (
          <li key={exercise.id}>
            <ExerciseCard data={exercise} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExerciseGrid;
