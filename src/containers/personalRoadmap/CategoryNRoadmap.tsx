import RoadmapCard from '@/components/personalRoadmap/RoadmapCard';
import React from 'react';
import styled from 'styled-components';

interface IProps {
  roadmapList: any;
}

function CategoryNRoadmap({ roadmapList }: IProps) {
  console.log('!', roadmapList);
  return (
    <div>
      <CategoryTitle>카테고리</CategoryTitle>
      <RoadmapContainer>
        {Object.values(roadmapList.modules).map((item: any) => (
          <RoadmapCard
            key={item.name}
            name={item}
            date={item.date}
            progress={item.progress}
            category={roadmapList.category}
          />
        ))}
      </RoadmapContainer>
    </div>
  );
}

const CategoryTitle = styled.div`
  font-size: 18px;
  font-weight: 400;
  border-left: 2px solid;
  padding-left: 10px;
  margin-bottom: 8px;
`;

const RoadmapContainer = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 540px 540px;
  margin-bottom: 64px;
  @media screen and (max-width: 1100px) {
    display: block;
  }
`;

export default CategoryNRoadmap;
