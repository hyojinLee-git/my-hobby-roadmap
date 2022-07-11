import React from 'react';
import styled from 'styled-components';

interface IProps {
  name: string;
  date: string;
  progress: number;
}

function RoadmapCard({ name, date, progress }: IProps) {
  return (
    <Container>
      <div style={{ width: 120, height: 120, background: '#F3F2EF' }}></div>
      <div style={{ flex: 3, marginLeft: '16px', position: 'relative' }}>
        <Header>
          <Title>{name}</Title>
          <Progress>{progress}%</Progress>
        </Header>
        <div>{date}</div>
        <Button>바로가기</Button>
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

const Button = styled.button`
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
