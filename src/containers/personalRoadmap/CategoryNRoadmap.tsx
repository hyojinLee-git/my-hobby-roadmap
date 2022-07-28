import RoadmapCard from '@/components/personalRoadmap/RoadmapCard';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface IProps {
  roadmapList: any;
}

function CategoryNRoadmap({ roadmapList }: IProps) {
  const [categoryTitle, setCategoryTitle] = useState('' as any);
  const _getData = async (category: string) => {
    const { data } = await axios.get(
      `http://localhost:4000/api/roadmap/${category}`,
    );
    const { ncsSubdCdnm } = data.data?.find(
      (item: any) =>
        `${item.ncsLclasCd} ${item.ncsMclasCd} ${item.ncsSclasCd} ${item.ncsSubdCd}` ===
        roadmapList.key,
    );
    setCategoryTitle(ncsSubdCdnm);
  };
  useEffect(() => {
    _getData(roadmapList.category);
  }, []);

  return (
    <div>
      {roadmapList.modules && (
        <>
          <CategoryTitle>{categoryTitle}</CategoryTitle>
          <RoadmapContainer>
            {Object.values(roadmapList.modules).map((item: any) => (
              <RoadmapCard
                key={item.name}
                name={item}
                date={item.date}
                progress={item.progress}
                category={roadmapList.category}
                modulePath={roadmapList.key}
              />
            ))}
          </RoadmapContainer>
        </>
      )}
    </div>
  );
}
const CategoryTitle = styled.div`
  font-size: 18px;
  font-weight: 400;
  border-left: 2px solid;
  padding-left: 10px;
  margin-bottom: 8px;
  margin-bottom: 12px;
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
