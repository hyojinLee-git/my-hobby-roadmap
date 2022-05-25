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
      <div>
        <Header>
          <Title>{name}</Title>
          <div>{progress}%</div>
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
`;

const Header = styled.div`
  border: 1px solid;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  margin: 7px 0;
`;

const Button = styled.button`
  color: white;
  background: #2e5794;
  border: none;
  height: 32px;
  width: 104px;
  border-radius: 10px;
`;
export default RoadmapCard;
