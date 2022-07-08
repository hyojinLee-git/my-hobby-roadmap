import NavigationBar from '@/components/common/navigation/NavigationBar';
import SettingScreen from '@/containers/setting';
import { loginState } from '@/recoil/global';
import { loginUtil } from '@/utils/auth';
import Head from 'next/head';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styles from '../styles/Home.module.css';

function Setting() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    loginUtil(setLogin);
  }, []);

  const _checkLogin = () => {
    if (login) return <SettingScreen />;
    // else Router.push('/login');
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
