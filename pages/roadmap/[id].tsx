import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import styles from '../../styles/Home.module.css';
import Header from '@/components/common/Header';
import NavigationBar from '@/components/common/navigation/NavigationBar';
import CourseCard from '@/components/roadmap/CourseCard';
import { useRecoilValue } from 'recoil';
import { roadmapData } from '@/recoil/roadmap';

function RoadmapDetail({ item }: any) {
  const [courseData, setCourseData] = useState([] as any);
  const data = useRecoilValue(roadmapData);

  const _getData = () => {
    console.log(data);
    const filterData = data.filter((i: any) => i.ncsSubdCdnm === item);
    setCourseData(filterData);
  };
  useEffect(() => {
    // data filtering
    _getData();
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
          <div
            style={{ fontSize: '20px', marginBottom: '10px', color: '#636363' }}
          >
            학습모듈 {courseData.length}개
          </div>
          <Container>
            {courseData.map((item: any, idx: number) => (
              <CourseCard
                title={item.learnModulName}
                exp={50}
                key={item.learnModulName}
                index={idx}
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
  const res = { data: '??' };
  const data = res.data;

  return {
    props: {
      item: id,
    },
  };
}
