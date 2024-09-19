import { IconContext } from "react-icons";
import { PiBarbellThin } from "react-icons/pi";
import styles from "./styles.module.css";

const NoSearchResults = () => {
  return (
    <div className={styles.componentWrapper}>
      <h1>Use The Filters To Find Your Exercises And Build Your Bench!</h1>
      <IconContext.Provider value={{ className: styles.svgIcon }}>
        <PiBarbellThin />
      </IconContext.Provider>
    </div>
  );
};

export default NoSearchResults;
