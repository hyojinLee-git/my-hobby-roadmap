import Header from '@/components/common/Header';
import TilList from '@/components/TIL/TilList';
import { userInformation } from '@/recoil/global';
import { getUid, loginUtil } from '@/utils/auth';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Content from './Content';
import DatePicker from './DatePicker';
import Editor from './Editor';

function TodayILearn() {
  const [dateList, setDateList] = useState<any>();
  const userInfo = useRecoilValue(userInformation);
  const [til, setTil] = useState<any>();
  const [todayContent, setTodayContent] = useState();
  const [todayTil, setTodayTil] = useState<any>();
  const [edit, setEdit] = useState(false);
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

  const getTodayContent = () => {
    console.log('!', til);
    const todayTil = til?.filter((item: any) => {
      const year = new Date().getFullYear();
      const [month, date] = today.split('/');

      return (
        item.date ===
        `${year}-${Number(month) < 10 ? `0${month}` : month}-${
          Number(date) < 10 ? `0${date}` : date
        }`
      );
    });
    // console.log(todayTilList);
    setTodayTil(todayTil);
  };

  const getTIL = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_DATABASE_URL}/TIL.json`,
    );
    const tilData = Object.values(data).filter(
      (item: any) => item.uid === userInfo.uid,
    );
    setTil(tilData);
  };

  useEffect(() => {
    getDateList();
    getTIL();
  }, []);

  useEffect(() => {
    getTodayContent();
  }, [til, today]);

  return (
    <div style={{ flex: 3, marginTop: '85px' }}>
      <Header title={'Today I Learn'} />
      <DatePicker
        dateList={dateList}
        setDateList={setDateList}
        setToday={setToday}
        today={today}
      />
      <div style={{ width: '90%', marginTop: '50px' }}>
        {todayTil?.length !== 0 && !edit ? (
          <TilBox>
            <Button onClick={() => setEdit(true)}>추가하기</Button>
            {todayTil?.map((item: any, index: number) => (
              <TilList
                link={index + 1}
                key={item.moduleName}
                moduleName={item.moduleName}
                content={item.content}
              />
            ))}
          </TilBox>
        ) : (
          <TilBox>
            <Button onClick={() => setEdit(false)}>등록하기</Button>
            <Editor />
          </TilBox>
        )}
      </div>
    </div>
  );
}

const TilBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;

const Button = styled.button`
  margin-bottom: 15px;
  background-color: #1970c6;
  width: 100px;
  height: 40px;
  color: white;
  border-radius: 100px;
  outline: none;
  border: none;
`;

export default TodayILearn;
