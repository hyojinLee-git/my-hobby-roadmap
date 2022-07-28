import { primaryData } from '@/asset/roadmapData';
import TitleNSelect from '@/components/roadmap/TitleNSelect';
import { roadmapData } from '@/recoil/roadmap';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

function Roadmap() {
  const [primary, setPrimary] = useState({ name: '사업관리', category: '01' });
  const [secondary, setSecondary] = useState({ name: '', category: '01' });
  const [tertiary, setTertiary] = useState({ name: '', category: '01' });
  const [quaternary, setQuaternary] = useState({ name: '', category: '01' });

  const [secondaryData, setSecondaryData] = useState([] as any);
  const [tertiaryData, setTertiaryData] = useState([] as any);
  const [quaternaryData, setQuaternaryData] = useState([] as any);
  const [data, setData] = useRecoilState(roadmapData);

  const _getDataList = (data: any, order: string, name?: string) => {
    let dataList;
    let arr;
    switch (order) {
      case 'second':
        dataList = data.map((item: any) =>
          JSON.stringify({
            name: item.ncsMclasCdnm,
            category: item.ncsMclasCd,
          }),
        );
        arr = new Set(dataList);
        return Array.from(arr).map((item: any) => JSON.parse(item));
      case 'third':
        dataList = data
          .filter((item: any) => item.ncsMclasCdnm === name)
          .map((item: any) =>
            JSON.stringify({
              name: item.ncsSclasCdnm,
              category: item.ncsSclasCd,
            }),
          );
        arr = new Set(dataList);
        return Array.from(arr).map((item: any) => JSON.parse(item));
      case 'forth':
        dataList = data
          .filter((item: any) => item.ncsSclasCdnm === name)
          .map((item: any) =>
            JSON.stringify({
              name: item.ncsSubdCdnm,
              category: item.ncsSubdCd,
            }),
          );
        arr = new Set(dataList);
        return Array.from(arr).map((item: any) => JSON.parse(item));
    }
  };

  const _getCourseData = async (category: string) => {
    const { data } = await axios.get(
      `http://localhost:4000/api/roadmap/${category}`,
    );
    setData(data.data);
    const secondaryData = _getDataList(data.data, 'second');
    setSecondaryData(secondaryData);
    setTertiaryData([]);
    setQuaternaryData([]);
  };

  useEffect(() => {
    _getCourseData(primary.category);

    setSecondary({ name: '', category: '' });
    setTertiary({ name: '', category: '' });
    setQuaternary({ name: '', category: '' });
  }, [primary]);

  useEffect(() => {
    setTertiary({ name: '', category: '' });
    setQuaternary({ name: '', category: '' });

    const tertiaryData = _getDataList(data, 'third', secondary.name);
    setTertiaryData(tertiaryData);
  }, [secondary]);

  useEffect(() => {
    setQuaternary({ name: '', category: '' });
    const quaternaryData = _getDataList(data, 'forth', tertiary.name);
    setQuaternaryData(quaternaryData);
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
        selectList={secondaryData}
        value={secondary}
        setValue={setSecondary}
      />
      <TitleNSelect
        title="소분류"
        selectList={tertiaryData}
        value={tertiary}
        setValue={setTertiary}
      />
      <TitleNSelect
        title="세분류"
        selectList={quaternaryData}
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
