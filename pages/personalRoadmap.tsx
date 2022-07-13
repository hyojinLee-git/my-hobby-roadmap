import NavigationBar from '@/components/common/navigation/NavigationBar';
import PersonalRoadmapScreen from '@/containers/personalRoadmap/PersonalRoadmapScreen';
import { loginState } from '@/recoil/global';

import Router, { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import styles from '../styles/Home.module.css';

function PersonalRoadmap() {
  const login = useRecoilValue(loginState);

  useEffect(() => {
    if (!login) Router.push('/login');
  }, []);

  return (
    <div className={styles.container}>
      <NavigationBar />
      <PersonalRoadmapScreen />
    </div>
  );
}

export default PersonalRoadmap;
