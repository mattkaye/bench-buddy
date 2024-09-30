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
    </header>
  );
};

export default Header;
