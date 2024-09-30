import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { RxOpenInNewWindow } from "react-icons/rx";
import { SiLevelsdotfyi } from "react-icons/si";
import { GiWeight } from "react-icons/gi";
import { Exercise } from "../../types";
import styles from "./styles.module.css";

const ExerciseCard = ({ data }: { data: Exercise }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.componentWrapper}>
      <div className={styles.imageWrapper}>
        {data.images.map((image, index) => (
          <img
            src={`/images/exercises/${image}`}
            alt={`${data.name} ${index === 0 ? "starting" : "ending"} position`}
            key={index}
            loading='lazy'
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
            <p>
              <GiWeight />
              <span>{data.primaryMuscles}</span>
            </p>
          </div>
        </IconContext.Provider>
        <div className={styles.buttonWrapper}>
          <IconContext.Provider value={{ className: styles.showMeIcon }}>
            <button
              onClick={() => navigate(`/exercise/${data.id}`, { state: data })}
            >
              Show Me <RxOpenInNewWindow />
            </button>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
