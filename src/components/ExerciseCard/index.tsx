import styles from "./styles.module.css";

const ExerciseCard = () => {
  return (
    <div className={styles.componentWrapper}>
      <img src='https://picsum.photos/800/800' alt='' />
      <h1>Glute</h1>
      <p>3 sets of 10 reps</p>
    </div>
  );
};

export default ExerciseCard;

// exerciseName = entry.data.name;
// level = entry.data.level;
// mechanic = entry.data.mechanic;
// primaryMuscles = entry.data.primaryMuscles;
// effortLevelColor = EFFORT_LEVEL[level].color;
// effortLevelEmoji = EFFORT_LEVEL[level].emoji;
