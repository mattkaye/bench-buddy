import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.componentWrapper}>
      <p>
        Made with ❤️ in New England by{" "}
        <a href='http://' target='_blank' rel='noopener noreferrer'>
          Matt
        </a>
      </p>
    </footer>
  );
};

export default Footer;
