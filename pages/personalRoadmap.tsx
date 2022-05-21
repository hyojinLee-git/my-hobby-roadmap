import CategoryButton from '@/components/common/CategoryButton';
import Header from '@/components/common/Header';
import NavigationBar from '@/components/common/navigation/NavigationBar';
import RoadmapCard from '@/components/personalRoadmap/RoadmapCard';
import React from 'react';

const categoryList = [
  {
    name: '카테고리1',
    selected: true,
  },
  {
    name: '카테고리2',
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

function personalRoadmap() {
  return (
    <div style={{ display: 'flex' }}>
      <NavigationBar />
      <div>
        <Header title="손형준님의 로드맵" />
        {categoryList.map((item, idx) => (
          <CategoryButton name={item.name} key={idx} selected={item.selected} />
        ))}
        {roadmapList1.map((item, idx) => (
          <RoadmapCard key={idx} />
        ))}
      </div>
    </div>
  );
}
export default personalRoadmap;
