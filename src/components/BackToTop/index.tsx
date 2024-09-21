import { IconContext } from "react-icons";
import { FaCircleChevronUp } from "react-icons/fa6";
import styles from "./styles.module.css";

const backToTop = () => {
  return (
    <IconContext.Provider value={{ className: styles.backToTopIcon }}>
      <a href='#' className={styles.backToTop}>
        <FaCircleChevronUp />
      </a>
    </IconContext.Provider>
  );
};

export default backToTop;
