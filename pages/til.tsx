import NavigationBar from '@/components/common/navigation/NavigationBar';
import TodayILearn from '@/containers/TIL/TodayILearn';
import { loginState } from '@/recoil/global';
import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilValue } from 'recoil';
import styles from '../styles/Home.module.css';

function TodayILearnScreen() {
  const login = useRecoilValue(loginState);
  const router = useRouter();
  const _checkLogin = () => {
    if (login) return <TodayILearn />;
    else router.push('/login');
  };

  return (
    <div style={{ display: 'flex' }} className={styles.container}>
      <NavigationBar />
      {_checkLogin()}
    </div>
  );
}

export default TodayILearnScreen;
