import RoadmapCard from '@/components/findRoadmap/RoadmapCard';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const roadmapData = [
  '사업관리',
  '기획사무',
  '금융',
  '평생교육',
  '보건',
  '사회복지',
  '문화·예술',
  '자동차운전·운송',
  '영업',
  '경비',
  '이·미용',
  '식음료조리·서비스',
  '건설공사관리',
  '기계설계',
  '금속재료',
  '화학물질·화학공정품질관리',
  '섬유제조',
  '전기',
  '정보기술',
  '식품가공',
  '인쇄·출판',
  '산업환경',
];

const sample = require('@/sampleResponse/sample.json');

function Roadmap() {
  return (
    <Container>
      {roadmapData?.map((item: any, idx: number) => (
        <Link href={`/roadmap/${idx + 1}`} key={idx}>
          <a>
            <RoadmapCard title={item} />
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
