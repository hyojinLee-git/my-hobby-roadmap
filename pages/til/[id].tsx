import Header from '@/components/common/Header';
import NavigationBar from '@/components/common/navigation/NavigationBar';
import Content from '@/containers/TIL/Content';
import { tilContent } from '@/recoil/til';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import styles from '../../styles/Home.module.css';

function TilDetail() {
  const [dateList, setDateList] = useState<any>();
  const todayContent = useRecoilValue(tilContent);

  const [today, setToday] = useState(
    `${new Date().getMonth() + 1}/${new Date().getDate()}`,
  );
  const getDateList = () => {
    const newList = [];
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();
    for (let i = -5; i <= 5; i++) {
      const newItem = {
        date: `${month}/${day + i}`,
        written: false,
      };
      newList.push(newItem);
    }
    setDateList(newList);
  };
  useEffect(() => {
    getDateList();
  }, []);
  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', width: '100%' }}>
        <NavigationBar />
        <div style={{ flex: 3, marginTop: '85px' }}>
          <Header title="Today I Learn" />
          {/* <DatePicker
            dateList={dateList}
            setDateList={setDateList}
            setToday={setToday}
            today={today}
          /> */}
          <div style={{ marginTop: '85px' }} />
          <div style={{ width: '90%' }}>
            <DateText>{todayContent.date}</DateText>
            <Content
              title={todayContent.moduleName}
              content={todayContent.content}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const DateText = styled.div`
  font-size: 24px;
  margin-bottom: 15px;
`;

export default TilDetail;
