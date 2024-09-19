import { IconContext } from "react-icons";
import { PiNotebookLight } from "react-icons/pi";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.componentWrapper}>
      <div onClick={() => navigate("/")}>
        <img src='/images/logo.png' alt='BenchBuddy Logo' />
        <h1>
          Bench<span>Buddy</span>
        </h1>
      </div>
      <button className={styles.cartButton}>
        <IconContext.Provider value={{ className: styles.notebook }}>
          <PiNotebookLight />
          <p>My Program</p>
        </IconContext.Provider>
      </button>
    </header>
  );
};

export default Header;
