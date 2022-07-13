import NavigationBar from '@/components/common/navigation/NavigationBar';
import SettingScreen from '@/containers/setting';
import { loginState } from '@/recoil/global';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styles from '../styles/Home.module.css';

function Setting() {
  const login = useRecoilValue(loginState);
  const router = useRouter();
  const _checkLogin = () => {
    if (login) return <SettingScreen />;
    else router.push('/login');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>설정</title>
      </Head>
      <NavigationBar />
      {_checkLogin()}
    </div>
  );
}

export default Setting;
