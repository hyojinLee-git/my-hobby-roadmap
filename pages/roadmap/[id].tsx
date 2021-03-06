import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import styles from '../../styles/Home.module.css';
import Header from '@/components/common/Header';
import LevelButton from '@/components/common/LevelButton';
import NavigationBar from '@/components/common/navigation/NavigationBar';
import CourseCard from '@/components/roadmap/CourseCard';
import { statusCode } from '@/model/course';
import axios from 'axios';

const courseList = [
  {
    title: '플랜테리어 기본 정보 알기',
    detail: '플랜테리어 계획 세우기',
    exp: 50,
    status: statusCode.complete,
  },
  {
    title: '플랜테리어 기본 정보 알기',
    exp: 50,
    detail: '플랜테리어 계획 세우기',
    status: statusCode.complete,
  },
  {
    title: '플랜테리어 기본 정보 알기',
    detail: '플랜테리어 계획 세우기',
    exp: 50,
    status: statusCode.complete,
  },
  {
    title: '플랜테리어 기본 정보 알기',
    detail: '플랜테리어 계획 세우기',
    exp: 50,
    status: statusCode.complete,
  },
  {
    title: '플랜테리어 기본 정보 알기',
    detail: '플랜테리어 계획 세우기',
    exp: 50,
    status: statusCode.proceeding,
  },
  {
    title: '플랜테리어 기본 정보 알기',
    detail: '플랜테리어 계획 세우기',
    exp: 50,
    status: statusCode.startable,
  },
  {
    title: '플랜테리어 기본 정보 알기',
    detail: '플랜테리어 계획 세우기',
    exp: 50,
    status: statusCode.startable,
  },
  {
    title: '플랜테리어 기본 정보 알기',
    detail: '플랜테리어 계획 세우기',
    exp: 50,
    status: statusCode.startable,
  },
];
const levelList = [
  {
    title: '레벨1',
    selected: true,
    lock: false,
  },
  {
    title: '레벨2',
    selected: false,
    lock: false,
  },
  {
    title: '레벨3',
    selected: false,
    lock: false,
  },
  {
    title: '레벨4',
    selected: false,
    lock: true,
  },
  {
    title: '레벨5',
    selected: false,
    lock: true,
  },
];

function RoadmapDetail({ item }: any) {
  console.log(item);
  const [courseData, setCourseData] = useState<any>();
  const getCourseData = async () => {
    const data = await axios.get('http://localhost:4000/api/roadmap');
    console.log('localserver', data);
  };
  useEffect(() => {
    getCourseData();
  }, []);
  //여기부터
  const router = useRouter();
  const { id } = router.query;
  //여기까지 필요없어짐
  return (
    <div className={styles.container}>
      {/* 여기를 통해서 seo구현 */}
      <Head>
        <title>로드맵 상세페이지입니다</title>
        <meta name="roadmap description" content="description"></meta>
      </Head>
      <div style={{ display: 'flex', width: '100%' }}>
        <NavigationBar />
        <div style={{ flex: 3, marginTop: '85px', width: '90%' }}>
          <Header title={item} />
          {/* {levelList.map((item, idx) => (
            <>
              <LevelButton
                key={idx}
                lock={item.lock}
                selected={item.selected}
                title={item.title}
              />
              <div
                style={{
                  width: '32px',
                  display: 'inline',
                }}
              ></div>
            </>
          ))} */}
          <Container>
            {courseList.map((item, idx) => (
              <CourseCard
                title={item.title}
                exp={item.exp}
                status={item.status}
                key={idx}
              />
            ))}
          </Container>
        </div>
      </div>
    </div>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 540px 540px;
  gap: 48px;
  @media screen and (max-width: 1100px) {
    display: block;
  }
`;

export default RoadmapDetail;
//서버에서 갖고 온 데이터 주입

export function getServerSideProps(context: any) {
  const id = context.params.id;
  // const api = axios.get('http://localhost:4000/api/roadmap');
  const res = { data: '??' };
  const data = res.data;

  return {
    props: {
      item: id,
    },
  };
}
