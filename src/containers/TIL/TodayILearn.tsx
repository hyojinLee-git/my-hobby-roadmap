import Header from '@/components/common/Header';
import TilList from '@/components/TIL/TilList';
import { userInformation } from '@/recoil/global';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import DatePicker from './DatePicker';
import { modulePathRecoil, tilList, todayTilList } from '@/recoil/til';
import Lottie from '@/components/TIL/Lottie';

function TodayILearn() {
  const [dateList, setDateList] = useState<any>();
  const [loadingState, setLoadingState] = useState(false);
  const userInfo = useRecoilValue(userInformation);
  const [til, setTil] = useRecoilState(tilList);
  const [todayTil, setTodayTil] = useRecoilState(todayTilList);
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const modulePath = useRecoilValue(modulePathRecoil);
  const [today, setToday] = useState(
    `${new Date().getMonth() + 1}/${new Date().getDate()}`,
  );

  const getDateList = () => {
    // const newList = [
    //   '7/30',
    //   '7/31',
    //   '8/1',
    //   '8/2',
    //   '8/3',
    //   '8/4',
    //   '8/5',
    //   '8/6',
    //   '8/7',
    //   '8/8',
    //   '8/9',
    //   '8/10',
    // ];
    const newList = [];
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();
    for (let i = -5; i <= 5; i++) {
      const newItem = `${month}/${day + i}`;
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
    setLoadingState(true);
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_DATABASE_URL}/TIL.json`,
      );
      const tilData = Object.values(data).filter(
        (item: any) => item.uid === userInfo.uid,
      );
      setTil(tilData);
      setLoadingState(false);
    } catch (e) {
      setLoadingState(false);
      throw new Error();
    }
  };

  useEffect(() => {
    getDateList();
    getTIL();
  }, []);

  useEffect(() => {
    getTodayContent();
  }, [til, today]);

  if (loadingState) return <div>loading</div>;

  return (
    <div style={{ flex: 3, marginTop: '85px' }}>
      <Header title={'Today I Learn'} />
      <DatePicker
        dateList={dateList}
        setDateList={setDateList}
        setToday={setToday}
        today={today}
      />
      <div style={{ width: '100%', marginTop: '50px' }}>
        {todayTil?.length !== 0 && !edit ? (
          <TilBox>
            {/* <Button onClick={() => setEdit(true)}>추가하기</Button> */}
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
            {/* <Button onClick={postTil}>등록하기</Button>
            <Editor
              title={title}
              setTitle={setTitle}
              content={content}
              setContent={setContent}
            /> */}
            {/* <Lottie /> */}
            <EmptyText>
              {'작성한 오늘의 til이 없습니다.\n학습을 시작하세요!'}
            </EmptyText>
          </TilBox>
        )}
      </div>
    </div>
  );
}

const TilBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const EmptyText = styled.div`
  white-space: pre-wrap;
  text-align: center;
  font-size: 24px;
  margin-top: 100px;
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
