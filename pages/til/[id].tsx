import Header from '@/components/common/Header';
import NavigationBar from '@/components/common/navigation/NavigationBar';
import Content from '@/containers/TIL/Content';
import Editor from '@/containers/TIL/Editor';
import { userInformation } from '@/recoil/global';
import { tilContent } from '@/recoil/til';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import styles from '../../styles/Home.module.css';
import { getDatabase, ref, child, push, update } from 'firebase/database';

function TilDetail() {
  const router = useRouter();
  const [dateList, setDateList] = useState<any>();
  const todayContent = useRecoilValue(tilContent);
  const userInfo = useRecoilValue(userInformation);
  const [subData, setSubData] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(todayContent.moduleName);
  const [content, setContent] = useState(todayContent.content);
  const [tilId, setTilId] = useState('');
  const [tilData, setTilData] = useState<any>();
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
    const [tilId, _]: any = Object.entries(data).filter(
      (item: any) =>
        item[1].uid === userInfo.uid && item[1].moduleName === router.query.id,
    );

    setTilId(tilId[0]);
    setTilData(tilId[1]);
    setSubData(tilData?.[0]?.moduleDesc);
    setContent(tilData?.[0]?.content);
    setTitle(router.query.id);
  };

  const setEdit = () => {
    setEditMode(true);
  };

  const editContent = () => {
    setEditMode(false);
    console.log(title, content);
    // firebase update
    const db = getDatabase();
    const postData = { ...tilData, content };
    const updates: { [key: string]: Object } = {};
    updates[`/TIL/${tilId}`] = postData;
    console.log(postData);
    update(ref(db), updates);
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
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Title>{router.query.id}</Title>
              <Button onClick={() => (editMode ? editContent() : setEdit())}>
                {editMode ? '등록하기' : '수정하기'}
              </Button>
            </div>
            <SubData>{subData}</SubData>
            {editMode ? (
              <Editor
                title={title}
                content={content}
                setTitle={setTitle}
                setContent={setContent}
              />
            ) : (
              <Content title={title} content={content} />
            )}
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

const Button = styled.button`
  margin-top: 26px;
  margin-bottom: 5px;
  background-color: #1970c6;
  width: 100px;
  height: 38px;
  color: white;
  border-radius: 100px;
  outline: none;
  border: none;
`;
export default TilDetail;
