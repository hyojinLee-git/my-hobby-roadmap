import { Footer } from '@/components/footer/Footer';
import type { NextPage } from 'next';
import Head from 'next/head';

import NavigationBar from '@/components/navigation/NavigationBar';
import Header from '@/containers/Header';
import styles from '../styles/Home.module.css';
import Roadmap from '@/containers/homePage/Roadmap';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>취미 앱</title>
      </Head>
      <NavigationBar />
      <div style={{ flex: 3, border: '1px solid red' }}>
        <Header />
        <div>
          {/* category */}
          <Roadmap />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
