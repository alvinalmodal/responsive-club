import styles from "../styles/Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <a>Events</a>
      <a>Results</a>
      <a>Partnering Restaurants</a>
    </nav>
  );
};

export default Navigation;
