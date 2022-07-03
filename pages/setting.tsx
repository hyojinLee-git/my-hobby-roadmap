import NavigationBar from '@/components/common/navigation/NavigationBar';
import SettingScreen from '@/containers/setting';
import Head from 'next/head';
import React from 'react';
import styles from '../styles/Home.module.css';
function Setting() {
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
