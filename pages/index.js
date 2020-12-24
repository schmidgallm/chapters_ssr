// CSS
import styles from '../styles/Home.module.css';

// Components
import NextHead from '../components/Layout/NextHead';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <NextHead />
      <Navbar />
      <main className={styles.main}></main>

      <Footer />
    </div>
  );
}
