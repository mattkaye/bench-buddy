import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaArrowLeft } from "react-icons/fa6";
import styles from "./styles.module.css";

function Exercise() {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (state === null) {
    navigate("/");
    return;
  } else {
    return (
      <section className={styles.componentWrapper}>
        <Link to='/'>
          <IconContext.Provider value={{ className: styles.svgIcon }}>
            <FaArrowLeft />
          </IconContext.Provider>
          Back To Exercises
        </Link>
        <div>
          <div className={styles.imageWrapper}>
            {state.images.map((image: string, index: number) => (
              <img
                src={`/images/exercises/${image}`}
                alt={`${state.name} ${
                  index === 0 ? "starting" : "ending"
                } position`}
                key={index}
                loading='lazy'
              />
            ))}
          </div>
          <article>
            <h1>{state.name}</h1>
            <ul>
              <li>
                Effort Level: <span>{state.level}</span>
              </li>
              <li>
                Primary Muscles: <span>{state.primaryMuscles.join(", ")}</span>
              </li>
              {state.secondaryMuscles.length ? (
                <li>
                  Secondary Muscles:{" "}
                  <span>{state.secondaryMuscles.join(", ")}</span>
                </li>
              ) : null}
              <li>
                Modality: <span>{state.mechanic}</span>
              </li>
              <li>
                Equipment: <span>{state.equipment}</span>
              </li>
              <li>
                Category: <span>{state.category}</span>
              </li>
            </ul>
            <div className={styles.instructions}>
              <h2>Instructions</h2>
              {state.instructions.map((line: string, index: number) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </article>
        </div>
      </section>
    );
  }
}

export default Exercise;
