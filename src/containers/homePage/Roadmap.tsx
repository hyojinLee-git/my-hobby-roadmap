import RoadmapCard from '@/components/findRoadmap/RoadmapCard';
import TitleNSelect from '@/components/roadmap/TitleNSelect';
import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';

const primaryData = [
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
  '정보통신',
  '식품가공',
  '인쇄·출판',
  '산업환경',
];

const sample = require('@/sampleResponse/sample.json');

const classificationList = ['대분류', '중분류', '소분류', '세분류'];

const secondaryData: { [key: string]: string[] } = {
  정보통신: ['정보기술', '통신기술', '방송기술'],
};
const tertiaryData: { [key: string]: string[] } = {
  정보기술: ['정보기술전략/ 계획', '정보기술개발', '정보기술관리', '정보보호'],
};
const quaternaryData: { [key: string]: string[] } = {
  정보기술개발: [
    '정보기술전략/ 계획',
    '정보기술 개발',
    '정보기술 관리',
    '정보보호',
  ],
};

function Roadmap() {
  const [primary, setPrimary] = useState('');
  const [secondary, setSecondary] = useState('');
  const [tertiary, setTertiary] = useState('');
  const [quaternary, setQuaternary] = useState('');

  return (
    <Container>
      <TitleNSelect
        title="대분류"
        selectList={primaryData}
        value={primary}
        setValue={setPrimary}
      />
      <TitleNSelect
        title="중분류"
        selectList={secondaryData[primary]}
        value={secondary}
        setValue={setSecondary}
      />
      <TitleNSelect
        title="소분류"
        selectList={tertiaryData[secondary]}
        value={tertiary}
        setValue={setTertiary}
      />
      <TitleNSelect
        title="세분류"
        selectList={quaternaryData[tertiary]}
        isLast
        value={quaternary}
        setValue={setQuaternary}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-top: 30px;
`;

export default Roadmap;
