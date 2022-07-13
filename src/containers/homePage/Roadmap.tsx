import {
  primaryData,
  quaternaryData,
  secondaryData,
  tertiaryData,
} from '@/asset/roadmapData';
import TitleNSelect from '@/components/roadmap/TitleNSelect';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Roadmap() {
  const [primary, setPrimary] = useState('');
  const [secondary, setSecondary] = useState('');
  const [tertiary, setTertiary] = useState('');
  const [quaternary, setQuaternary] = useState('');

  useEffect(() => {
    setSecondary('');
    setTertiary('');
    setQuaternary('');
  }, [primary]);
  useEffect(() => {
    setTertiary('');
    setQuaternary('');
  }, [secondary]);
  useEffect(() => {
    setQuaternary('');
  }, [tertiary]);

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
