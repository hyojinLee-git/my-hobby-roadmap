import NavigationBar from '@/components/common/navigation/NavigationBar';
import PersonalRoadmapScreen from '@/containers/personalRoadmap/PersonalRoadmapScreen';
import { loginState } from '@/recoil/global';

import Router from 'next/router';
import React from 'react';
import { useRecoilValue } from 'recoil';
import styles from '../styles/Home.module.css';

function PersonalRoadmap() {
  const login = useRecoilValue(loginState);

  const _checkLogin = () => {
    if (login) return <PersonalRoadmapScreen />;
    else Router.push('/login');
  };
  return (
    <div className={styles.container}>
      <NavigationBar />
      {_checkLogin()}
    </div>
  );
}

export default PersonalRoadmap;
