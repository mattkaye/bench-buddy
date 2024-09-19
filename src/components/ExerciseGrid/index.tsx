import ExerciseCard from "../ExerciseCard";
import styles from "./styles.module.css";
import { Exercise } from "../../types";

const ExerciseGrid = ({ data }: { data: Exercise[] }) => {
  return (
    <section className={styles.componentWrapper}>
      <ul>
        {data.map((exercise) => (
          <li key={exercise.id}>
            <ExerciseCard data={exercise} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExerciseGrid;
