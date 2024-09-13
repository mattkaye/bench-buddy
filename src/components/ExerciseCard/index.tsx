import { IconContext } from "react-icons";
import { RxOpenInNewWindow } from "react-icons/rx";
import { SiLevelsdotfyi } from "react-icons/si";
import { GiStrongMan, GiWeight } from "react-icons/gi";
import { Exercise } from "../../types";
import styles from "./styles.module.css";

const ExerciseCard = ({ data }: { data: Exercise }) => {
  return (
    <div className={styles.componentWrapper}>
      <div className={styles.imageWrapper}>
        {data.images.map((image, index) => (
          <img
            src={`/images/exercises/${image}`}
            alt={`${data.name} ${index === 0 ? "starting" : "ending"} position`}
            key={index}
          />
        ))}
      </div>
      <div className={styles.infoWrapper}>
        <h1>{data.name}</h1>
        <IconContext.Provider value={{ className: styles.svgIcon }}>
          <div>
            <p>
              <SiLevelsdotfyi />
              <span>{data.level}</span>
            </p>
            {data.mechanic && (
              <p>
                <GiStrongMan /> <span> {data.mechanic}</span>
              </p>
            )}
            <p>
              <GiWeight />
              <span>{data.primaryMuscles}</span>
            </p>
          </div>
        </IconContext.Provider>
        <div className={styles.buttonWrapper}>
          <button>Add It</button>
          <IconContext.Provider value={{ className: styles.showMeIcon }}>
            <button>
              Show Me <RxOpenInNewWindow />
            </button>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
