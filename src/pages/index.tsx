import type { NextPage } from "next";
import LoginForm from "../components/layouts/LoginForm";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <LoginForm />
      </main>
    </div>
  );
};

export default Home;
