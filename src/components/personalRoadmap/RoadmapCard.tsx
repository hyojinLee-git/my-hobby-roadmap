import { modulePathRecoil } from '@/recoil/til';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

interface IProps {
  name: string;
  date: string;
  progress: number;
  category: string;
  modulePath: string;
}

const icons: { [key: string]: any } = {
  '01': require('@/asset/icon/01.png'),
  '02': require('@/asset/icon/02.png'),
  '03': require('@/asset/icon/03.png'),
  '04': require('@/asset/icon/04.png'),
  '05': require('@/asset/icon/05.png'),
  '06': require('@/asset/icon/06.png'),
  '07': require('@/asset/icon/07.png'),
  '08': require('@/asset/icon/08.png'),
  '09': require('@/asset/icon/09.png'),
  '10': require('@/asset/icon/10.png'),
  '11': require('@/asset/icon/11.png'),
  '12': require('@/asset/icon/12.png'),
  '13': require('@/asset/icon/13.png'),
  '14': require('@/asset/icon/14.png'),
  '15': require('@/asset/icon/15.png'),
  '16': require('@/asset/icon/16.png'),
  '17': require('@/asset/icon/17.png'),
  '18': require('@/asset/icon/18.png'),
  '19': require('@/asset/icon/19.png'),
  '20': require('@/asset/icon/20.png'),
  '21': require('@/asset/icon/21.png'),
  '22': require('@/asset/icon/22.png'),
  '23': require('@/asset/icon/23.png'),
  '24': require('@/asset/icon/24.png'),
};

function RoadmapCard({ name, date, progress, category, modulePath }: IProps) {
  console.log(modulePath);
  const setModulePath = useSetRecoilState(modulePathRecoil);
  return (
    <Container>
      <Image src={icons[category]} alt={category} width={120} height={120} />
      <div style={{ flex: 3, marginLeft: '16px', position: 'relative' }}>
        <Header>
          <Title>{name}</Title>
        </Header>
        <div>{date}</div>
        <Link passHref href={'/til'}>
          <StyledLink>바로가기</StyledLink>
        </Link>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 540px;
  height: 135px;
  background-color: #f7f8f9;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  padding: 8px;
  display: flex;
  @media screen and (max-width: 1100px) {
    margin-bottom: 32px;
  }
`;

const Header = styled.div`
  /* border: 1px solid; */
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  margin: 0;
`;

const Progress = styled.div`
  font-weight: 700;
  font-size: 20px;
`;

const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: #2e5794;
  border: none;
  height: 32px;
  width: 104px;
  border-radius: 10px;
  position: absolute;
  bottom: 8px;
  right: 8px;
`;
export default RoadmapCard;
