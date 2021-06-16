import styles from "../styles/MeetUp.module.css";

const MeetUp = () => {
  return (
    <section className={styles.meetup}>
      <h1>Come join the fun!</h1>
      <img src="/runners-church.jpg" />
      <h1>We meet every evening in the city square at 7PM!</h1>
    </section>
  );
};

export default MeetUp;
