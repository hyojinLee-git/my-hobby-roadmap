import NavigationBar from '@/components/common/navigation/NavigationBar';
import TodayILearn from '@/containers/TIL/TodayILearn';
import React from 'react';
import styles from '../styles/Home.module.css';

function TodayILearnScreen() {
  return (
    <div style={{ display: 'flex' }} className={styles.container}>
      <NavigationBar />
      <TodayILearn />
    </div>
  );
}

export default TodayILearnScreen;
