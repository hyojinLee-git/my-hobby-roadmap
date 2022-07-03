import { Footer } from '@/components/common/footer/Footer';
import type { NextPage } from 'next';
import Head from 'next/head';

import NavigationBar from '@/components/common/navigation/NavigationBar';
import Header from '@/components/common/Header';
import styles from '../styles/Home.module.css';
import Roadmap from '@/containers/homePage/Roadmap';
import CategoryButton from '@/components/common/CategoryButton';

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
          <div style={{ border: '1px solid blue' }}>
            {/* category */}
            {categoryList.map((item, idx) => (
              <>
                <CategoryButton
                  name={item.name}
                  key={idx}
                  selected={item.selected}
                />
                <div style={{ height: '32px' }}></div>
              </>
            ))}
          </div>
          <Roadmap />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
