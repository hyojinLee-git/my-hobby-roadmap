import Header from '@/components/common/Header';
import NavigationBar from '@/components/common/navigation/NavigationBar';
import Content from '@/containers/TIL/Content';
import { userInformation } from '@/recoil/global';
import { tilContent } from '@/recoil/til';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import styles from '../../styles/Home.module.css';

function TilDetail() {
  const router = useRouter();
  const [dateList, setDateList] = useState<any>();
  const todayContent = useRecoilValue(tilContent);
  const userInfo = useRecoilValue(userInformation);
  const [subData, setSubData] = useState('');
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

  const getTIL = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_DATABASE_URL}/TIL.json`,
    );
    const tilData: any = Object.values(data).filter(
      (item: any) =>
        item.uid === userInfo.uid && item.moduleName === router.query.id,
    );

    setSubData(tilData?.[0]?.moduleDesc);
  };

  useEffect(() => {
    getDateList();
    getTIL();
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
            <Title>{router.query.id}</Title>
            <SubData>{subData}</SubData>
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
const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 8px;
`;

const SubData = styled.div`
  color: #888789;
  margin-bottom: 15px;
`;
export default TilDetail;
