import { Footer } from '@/components/common/footer/Footer';
import type { NextPage } from 'next';
import Head from 'next/head';
import { onAuthStateChanged } from 'firebase/auth';

import NavigationBar from '@/components/common/navigation/NavigationBar';
import Header from '@/components/common/Header';
import styles from '../styles/Home.module.css';
import Roadmap from '@/containers/homePage/Roadmap';
import CategoryButton from '@/components/common/CategoryButton';
import { useEffect, useState } from 'react';
import { authService } from '@/auth/firebaseConfig';
import { loginUtil } from '@/utils/auth';
import Link from 'next/link';

const categoryList = [
  {
    name: '카테고리',
    selected: false,
  },
  {
    name: '카테고리 더 길게',
    selected: false,
  },
  {
    name: '짧게',
    selected: false,
  },
  {
    name: '카테고리 와아아안전 길게 ',
    selected: false,
  },
  {
    name: '선택된 카테고리',
    selected: true,
  },
];

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
        <Footer />
      </div>
    </div>
  );
};

export default Home;
