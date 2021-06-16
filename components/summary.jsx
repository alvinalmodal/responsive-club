import styles from "../styles/Summary.module.css";

const Summary = () => {
  return (
    <section className={styles.summary}>
      <h2>Meet up. Work out. Celebrate.</h2>
      <p>
        Come join our vibrant community whose focus is training hard and
        enjoying local post-workout cuisine - guilt-fee!
      </p>
      <p>
        South Vilalge Run Club is a free MeetUp group sponsored by{" "}
        <a>City Shoes</a>.
      </p>
    </section>
  );
};

export default Summary;
