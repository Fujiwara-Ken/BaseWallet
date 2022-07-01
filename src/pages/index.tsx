// eslint-disable-next-line import/order
import BaseButton from '@/components/elements/BaseButton';
import type { NextPage } from 'next';
import Head from 'next/head';
import LoginButton from '../components/layouts/login';
import LogoutButton from '../components/layouts/logout';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>BaseWallet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <BaseButton label="BaseButton" />
        <LoginButton />
        <LogoutButton />
      </main>
    </div>
  );
};

export default Home;
