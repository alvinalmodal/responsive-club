import Head from "next/head";
import Introduction from "../components/introduction";
import MeetUp from "../components/meetup";
import Navigation from "../components/navigation";
import Photos from "../components/photos";
import Summary from "../components/summary";
import Testimonial from "../components/testimonial";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <Head>
        <title>Responsive Club</title>
        <meta
          name="A FullStack-Engineer project for codeacademy by Alvin B. Almodal"
          content="A FullStack-Engineer project for codeacademy by Alvin B. Almodal"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navigation></Navigation>
      <Introduction></Introduction>
      <Summary></Summary>
      <Photos
        photos={[
          "/tunnel-runners.jpg",
          "/meetup-wine.jpg",
          "runners-grayscale.jpg",
        ]}
      ></Photos>
      <Testimonial></Testimonial>
      <Photos
        photos={["/coffeshop.jpg", "/marathon-runners.jpg", "/hangouts.jpg"]}
      ></Photos>
      <MeetUp></MeetUp>
      <Navigation></Navigation>
    </main>
  );
}
