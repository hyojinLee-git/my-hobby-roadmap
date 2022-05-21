import RoadmapCard from '@/components/findRoadmap/RoadmapCard';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const roadmapData = [
  {
    id: 1,
    title: 'title',
    description: 'description',
  },
  {
    id: 2,
    title: 'title',
    description: 'description',
  },
  {
    id: 3,
    title: 'title',
    description: 'description',
  },
  {
    id: 4,
    title: 'title',
    description: 'description',
  },
  {
    id: 5,
    title: 'title',
    description: 'description',
  },
  {
    id: 6,
    title: 'title',
    description: 'description',
  },
];

function Roadmap() {
  return (
    <Container>
      {roadmapData.map((item, idx) => (
        <Link href={`/roadmap/${item.id}`} key={item.id}>
          <a>
            <RoadmapCard />
          </a>
        </Link>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 365px 365px;
  gap: 48px;

  //이거 뭐더라
  /* @media screen {
    display: block;
  } */
`;

export default Roadmap;
