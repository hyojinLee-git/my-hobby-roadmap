import CategoryButton from '@/components/common/CategoryButton';
import Header from '@/components/common/Header';
import { userInformation } from '@/recoil/global';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import CategoryNRoadmap from './CategoryNRoadmap';
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
function PersonalRoadmapScreen() {
  const userInfo = useRecoilValue(userInformation);
  const [roadmapData, setRoadmapData] = useState<any>();
  const getPersonalRoadmap = async () => {
    const url = `${process.env.NEXT_PUBLIC_DATABASE_URL}/Users/${userInfo.uid}/myClass.json`;
    const { data } = await axios.get(url);
    if (data)
      setRoadmapData(
        Object.entries(data).map((item: any) => ({
          ...item[1],
          category: item[0].split(' ')[0],
          key: item[0],
        })),
      );
  };

  useEffect(() => {
    getPersonalRoadmap();
  }, []);

  console.log(roadmapData);
  return (
    <div style={{ flex: 3, marginTop: '85px' }}>
      <Header
        title={`${userInfo.name ? userInfo.name : userInfo.email}님의 로드맵`}
      />
      <div style={{ display: 'flex', marginBottom: '85px' }}>
        {/* <div style={{ display: 'flex', marginBottom: '85px' }}>
        {categoryList.map((item, idx) => (
          <CategoryButton name={item.name} key={idx} selected={item.selected} />
        ))}
        <Link href="/roadmap" passHref>
          <CreateRoadmap selected={false}>+ 로드맵 생성하기</CreateRoadmap>
        </Link>
        </div>*/}
      </div>
      <div>
        {roadmapData?.map((item: any, index: number) => (
          <CategoryNRoadmap key={index} roadmapList={item} />
        ))}
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
export default PersonalRoadmapScreen;
