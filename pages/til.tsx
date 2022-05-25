import NavigationBar from '@/components/common/navigation/NavigationBar';
import TodayILearn from '@/containers/TIL/TodayILearn';
import React from 'react';

function TodayILearnScreen() {
  return (
    <div style={{ display: 'flex' }}>
      <NavigationBar />
      <TodayILearn />
    </div>
  );
}

export default TodayILearnScreen;
