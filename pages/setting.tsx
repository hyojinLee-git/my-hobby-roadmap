import NavigationBar from '@/components/common/navigation/NavigationBar';
import SettingScreen from '@/containers/setting';
import { loginState } from '@/recoil/global';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styles from '../styles/Home.module.css';

function Setting() {
  const login = useRecoilValue(loginState);

  useEffect(() => {
    if (!login) Router.push('/login');
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>설정</title>
      </Head>
      <NavigationBar />
      <SettingScreen />
    </div>
  );
}

export default Setting;
