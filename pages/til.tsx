import NavigationBar from '@/components/common/navigation/NavigationBar';
import TodayILearn from '@/containers/TIL/TodayILearn';
import { loginState } from '@/recoil/global';
import Router, { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import styles from '../styles/Home.module.css';

function TodayILearnScreen() {
  const login = useRecoilValue(loginState);

  useEffect(() => {
    if (!login) Router.push('/login');
  }, []);

  return (
    <div style={{ display: 'flex' }} className={styles.container}>
      <NavigationBar />
      <TodayILearn />
    </div>
  );
}

export default TodayILearnScreen;
