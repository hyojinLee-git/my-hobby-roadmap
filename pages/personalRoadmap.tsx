import CategoryButton from '@/components/common/CategoryButton';
import Header from '@/components/common/Header';
import NavigationBar from '@/components/common/navigation/NavigationBar';
import RoadmapCard from '@/components/personalRoadmap/RoadmapCard';
import CategoryNRoadmap from '@/containers/personalRoadmap/CategoryNRoadmap';
import { userInformation } from '@/recoil/global';
import Link from 'next/link';
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import styles from '../styles/Home.module.css';

const categoryList = [
  {
    name: '중분류1',
    selected: true,
  },
  {
    name: '중분류2',
    selected: false,
  },
];

const roadmapList1 = [
  {
    name: '로드맵 이름',
    date: '2022.03.22',
    progress: 58,
  },
  {
    name: '로드맵 이름',
    date: '2022.03.22',
    progress: 58,
  },
  {
    name: '로드맵 이름',
    date: '2022.03.22',
    progress: 58,
  },
  {
    name: '로드맵 이름',
    date: '2022.03.22',
    progress: 58,
  },
];
const roadmapList2 = [
  {
    name: '로드맵 이름',
    date: '2022.03.22',
    progress: 58,
  },
  {
    name: '로드맵 이름',
    date: '2022.03.22',
    progress: 58,
  },
  {
    name: '로드맵 이름',
    date: '2022.03.22',
    progress: 58,
  },
  {
    name: '로드맵 이름',
    date: '2022.03.22',
    progress: 58,
  },
];

function PersonalRoadmap() {
  const userInfo = useRecoilValue(userInformation);

  // const getPersonalRoadmap=()=>{
  //   const url=`${process.env.NEXT_PUBLIC_DATABASE_URL}/Users/M8mYC1eUs6RqEUrxTj7mARW3dK72/`
  // }

  return (
    <div className={styles.container}>
      <NavigationBar />
      <div style={{ flex: 3, marginTop: '85px' }}>
        <Header title={`${userInfo.name}님의 로드맵`} />
        <div style={{ display: 'flex', marginBottom: '85px' }}>
          {categoryList.map((item, idx) => (
            <CategoryButton
              name={item.name}
              key={idx}
              selected={item.selected}
            />
          ))}
          <Link href="/roadmap" passHref>
            <CreateRoadmap selected={false}>+ 로드맵 생성하기</CreateRoadmap>
          </Link>
        </div>
        <div>
          {[roadmapList1, roadmapList2].map((item, index) => (
            <CategoryNRoadmap key={index} roadmapList={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

const CreateRoadmap = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props: { selected: boolean }) =>
    props.selected ? '#1970C6' : '#FFF'};
  height: 44px;
  border-radius: 20px;
  margin-right: 22px;
  border: 1px solid rgba(121, 116, 126, 0.5);
  font-size: 16px;
  padding: 12px 16px;
  color: ${(props: { selected: boolean }) =>
    props.selected ? 'white' : '#1C1B1F'};
`;
export default PersonalRoadmap;
