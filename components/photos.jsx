import styles from "../styles/Photos.module.css";

const displayPhotos = (photos = []) =>
  photos.map((photo) => <img src={photo} />);

const Photos = ({ photos }) => {
  return <section className={styles.photos}>{displayPhotos(photos)}</section>;
};

export default Photos;
