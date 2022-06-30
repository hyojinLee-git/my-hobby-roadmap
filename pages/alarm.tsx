import NavigationBar from '@/components/common/navigation/NavigationBar';
import AlarmScreen from '@/containers/alarm';
import React from 'react';

function Alarm() {
  return (
    <div style={{ display: 'flex' }}>
      <NavigationBar />
      <AlarmScreen />
    </div>
  );
}

export default Alarm;
