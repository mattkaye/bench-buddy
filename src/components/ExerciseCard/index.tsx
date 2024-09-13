import { Exercise } from "../../types";
import styles from "./styles.module.css";

const ExerciseCard = ({ data }: { data: Exercise }) => {
  //   console.log(data);
  return (
    <div className={styles.componentWrapper}>
      <img src={`/images/exercises/${data.images[0]}`} alt={data.name} />
      <h1>{data.name}</h1>
      <p>{data.level}</p>
      <p>{data.mechanic}</p>
      <p>{data.primaryMuscles}</p>
    </div>
  );
};

export default ExerciseCard;
