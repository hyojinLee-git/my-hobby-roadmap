import NavigationBar from '@/components/common/navigation/NavigationBar';
import AlarmScreen from '@/containers/alarm';
import React from 'react';
import styles from '../styles/Home.module.css';

function Alarm() {
  return (
    <div style={{ display: 'flex' }} className={styles.container}>
      <NavigationBar />
      <AlarmScreen />
    </div>
  );
}

export default Alarm;
