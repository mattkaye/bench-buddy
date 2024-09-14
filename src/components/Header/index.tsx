import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.componentWrapper}>
      <div>
        <img src='/images/logo.png' alt='BenchBuddy Logo' />
        <h1>
          Bench<span>Buddy</span>
        </h1>
      </div>
      <form>
        <select name='bench-type' id='bench-type'>
          <option value='glute'>Glute</option>
          <option value='kettlebell'>Kettlebell</option>
          <option value='powerlifting'>Powerlifting</option>
          <option value='plyometrics'>Plyometrics</option>
          <option value='nanostores'>Nanostores</option>
          <option value='blah'>Blah</option>
        </select>
        <select name='bench-type' id='bench-type'>
          <option value='glute'>Glute</option>
          <option value='kettlebell'>Kettlebell</option>
          <option value='powerlifting'>Powerlifting</option>
          <option value='plyometrics'>Plyometrics</option>
          <option value='nanostores'>Nanostores</option>
          <option value='blah'>Blah</option>
        </select>
        <select name='bench-type' id='bench-type'>
          <option value='glute'>Glute</option>
          <option value='kettlebell'>Kettlebell</option>
          <option value='powerlifting'>Powerlifting</option>
          <option value='plyometrics'>Plyometrics</option>
          <option value='nanostores'>Nanostores</option>
          <option value='blah'>Blah</option>
        </select>
      </form>
      <button className={styles.cartButton}>Add to Cart</button>
    </header>
  );
};

export default Header;
<p>Made with ❤️ by Matt</p>;
