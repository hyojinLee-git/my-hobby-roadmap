import type { NextPage } from 'next';
import Head from 'next/head';
import { onAuthStateChanged } from 'firebase/auth';

import NavigationBar from '@/components/common/navigation/NavigationBar';
import Header from '@/components/common/Header';
import styles from '../styles/Home.module.css';
import Roadmap from '@/containers/homePage/Roadmap';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>취미 앱</title>
      </Head>
      <NavigationBar />
      <div style={{ flex: 3, marginTop: '85px' }}>
        <Header title="로드맵 탐색하기" />
        <div style={{ display: 'flex' }}>
          <Roadmap />
        </div>
      </div>
    </div>
  );
};

export default Home;
