import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.componentWrapper}>
      <p>
        Made with ❤️ in New England by{" "}
        <a href='https://github.com/mattkaye' target='_blank'>
          Matt
        </a>
      </p>
    </footer>
  );
};

export default Footer;
