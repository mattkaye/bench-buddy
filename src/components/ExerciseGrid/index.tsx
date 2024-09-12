import ExerciseCard from "../ExerciseCard";
import styles from "./styles.module.css";

const ExerciseGrid = () => {
  return (
    <section className={styles.componentWrapper}>
      <ul>
        <li>
          <ExerciseCard />
        </li>
        <li>
          <div>
            <img src='https://picsum.photos/800/800' alt='' />
            <h1>Glute</h1>
            <p>3 sets of 10 reps</p>
          </div>
        </li>
        <li>
          <div>
            <img src='https://picsum.photos/800/800' alt='' />
            <h1>Kettlebell</h1>
            <p>5 sets of 10 reps</p>
          </div>
        </li>
        <li>
          <div>
            <img src='https://picsum.photos/800/800' alt='' />
            <h1>Kettlebell</h1>
            <p>5 sets of 10 reps</p>
          </div>
        </li>
        <li>
          <div>
            <img src='https://picsum.photos/800/800' alt='' />
            <h1>Powerlifting</h1>
            <p>10 sets of 10 reps</p>
          </div>
        </li>
        <li>
          <div>
            <img src='https://picsum.photos/800/800' alt='' />
            <h1>Powerlifting</h1>
            <p>10 sets of 10 reps</p>
          </div>
        </li>
        <li>
          <div>
            <img src='https://picsum.photos/800/800' alt='' />
            <h1>Plyometrics</h1>
            <p>10 sets of 10 reps</p>
          </div>
        </li>
        <li>
          <div>
            <img src='https://picsum.photos/800/800' alt='' />
            <h1>Plyometrics</h1>
            <p>10 sets of 10 reps</p>
          </div>
        </li>
        <li>
          <div>
            <img src='https://picsum.photos/800/800' alt='' />
            <h1>Nanostores</h1>
            <p>10 sets of 10 reps</p>
          </div>
        </li>
        <li>
          <div>
            <img src='https://picsum.photos/800/800' alt='' />
            <h1>Nanostores</h1>
            <p>10 sets of 10 reps</p>
          </div>
        </li>
        <li>
          <div>
            <img src='https://picsum.photos/800/800' alt='' />
            <h1>Astro</h1>
            <p>10 sets of 10 reps</p>
          </div>
        </li>
        <li>
          <div>
            <img src='https://picsum.photos/800/800' alt='' />
            <h1>Astro</h1>
            <p>10 sets of 10 reps</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default ExerciseGrid;
