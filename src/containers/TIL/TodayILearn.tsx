import Header from '@/components/common/Header';
import TilList from '@/components/TIL/TilList';
import { userInformation } from '@/recoil/global';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import DatePicker from './DatePicker';
import Editor from './Editor';
import { getDatabase, ref, child, push, update } from 'firebase/database';

function TodayILearn() {
  const [dateList, setDateList] = useState<any>();
  const userInfo = useRecoilValue(userInformation);
  const [til, setTil] = useState<any>();
  const [todayTil, setTodayTil] = useState<any>();
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
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

  const postTil = async () => {
    const db = getDatabase();
    const newPostKey = push(child(ref(db), 'posts')).key;
    const postData = {
      content,
      date: `${new Date().getFullYear()}-${
        new Date().getMonth() + 1 > 10
          ? new Date().getMonth() + 1
          : `0${new Date().getMonth() + 1}`
      }-${new Date().getDate()}`,
      moduleName: '',
      moduleDesc: '',
      modulePath: '02 01 01 01',
      tilId: '',
      uid: userInfo.uid,
    };
    const updates: { [key: string]: Object } = {};
    updates[`/TIL/${newPostKey}`] = postData;
    console.log(postData);
    update(ref(db), updates);
    setEdit(false);
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
                link={item.moduleName}
                key={item.moduleName}
                moduleName={item.moduleName}
                content={item.content}
                date={item.date}
              />
            ))}
          </TilBox>
        ) : (
          <TilBox>
            <Button onClick={postTil}>등록하기</Button>
            <Editor
              title={title}
              setTitle={setTitle}
              content={content}
              setContent={setContent}
            />
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
