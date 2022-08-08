import AlarmContainer from '@/components/alarm/alarmContainer';
import DateComponent from '@/components/alarm/dateComponent';
import Header from '@/components/common/Header';
import React from 'react';

const alarms = [
  {
    contents: '알림 내용입니다.',
    sender: '앱 운영자',
    sendAt: '2022. 03. 24',
  },
  {
    contents: '알림 내용입니다.',
    sender: '앱 운영자',
    sendAt: '2022. 03. 24',
  },
  {
    contents: '알림 내용입니다.',
    sender: '앱 운영자',
    sendAt: '2022. 03. 23',
  },
];

function AlarmScreen() {
  const _renderDate = (index: number, sendAt: string) => {
    if (index === 0) return <DateComponent sendAt={sendAt} />;
    else {
      const prevSendAt = alarms[index - 1].sendAt;
      const curSendAt = alarms[index].sendAt;
      return prevSendAt !== curSendAt ? (
        <DateComponent sendAt={sendAt} />
      ) : undefined;
    }
  };
  return (
    <div style={{ flex: 3, marginTop: '85px' }}>
      <Header title="알림" />
      {alarms.map((item, index) => {
        return (
          <>
            {_renderDate(index, item.sendAt)}
            <AlarmContainer key={index} data={item} />
          </>
        );
      })}
    </div>
  );
}

export default AlarmScreen;
