import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import ExerciseCard from "../ExerciseCard";
import styles from "./styles.module.css";
import allExercises from "../../data/all-exercises.json";
import { Exercise } from "../../types";

const result: Exercise[] = allExercises.filter((exercise) => {
  return exercise.primaryMuscles.includes("chest");
  // return exercise;
});
// console.log(result);

const options = [
  { label: "Grapes 🍇", value: "grapes" },
  { label: "Mango 🥭", value: "mango" },
  { label: "Strawberry 🍓", value: "strawberry" },
];

const ExerciseGrid = () => {
  const [selected, setSelected] = useState([]);

  return (
    <section className={styles.componentWrapper}>
      <h1>Select Fruits</h1>
      <pre>{JSON.stringify(selected)}</pre>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy='Select'
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
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
