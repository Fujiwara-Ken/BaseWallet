import type { NextPage } from "next";
import SignUpForm from "../../components/layouts/SignUpForm";
import styles from "../../styles/Home.module.css";

const Signup: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <SignUpForm />
      </main>
    </div>
  );
};

export default Signup;
