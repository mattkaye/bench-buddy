import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.componentWrapper}>
      <div>
        <h1>
          Bench<span>Buddy</span>
        </h1>
        <p>Get After It</p>
      </div>
      <form>
        <select name='bench-type' id='bench-type'>
          <option selected disabled>
            Choose one
          </option>
          <option value='glute'>Glute</option>
          <option value='kettlebell'>Kettlebell</option>
          <option value='powerlifting'>Powerlifting</option>
          <option value='plyometrics'>Plyometrics</option>
          <option value='nanostores'>Nanostores</option>
          <option value='astro'>Astro</option>
        </select>
        <select name='bench-type' id='bench-type'>
          <option selected disabled>
            Choose one
          </option>
          <option value='glute'>Glute</option>
          <option value='kettlebell'>Kettlebell</option>
          <option value='powerlifting'>Powerlifting</option>
          <option value='plyometrics'>Plyometrics</option>
          <option value='nanostores'>Nanostores</option>
          <option value='astro'>Astro</option>
        </select>
        <select name='bench-type' id='bench-type'>
          <option selected disabled>
            Choose one
          </option>
          <option value='glute'>Glute</option>
          <option value='kettlebell'>Kettlebell</option>
          <option value='powerlifting'>Powerlifting</option>
          <option value='plyometrics'>Plyometrics</option>
          <option value='nanostores'>Nanostores</option>
          <option value='astro'>Astro</option>
        </select>
      </form>
      <button className={styles.cartButton}>Add to Cart</button>
    </header>
  );
};

export default Header;
<p>Made with ❤️ by Matt</p>;
