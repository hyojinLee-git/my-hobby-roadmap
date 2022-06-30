import NavigationBar from '@/components/common/navigation/NavigationBar';
import SettingScreen from '@/containers/setting';
import React from 'react';

function Setting() {
  return (
    <div style={{ display: 'flex' }}>
      <NavigationBar />
      <SettingScreen />
    </div>
  );
}

export default Setting;
