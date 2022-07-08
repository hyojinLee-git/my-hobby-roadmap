import React from 'react';
import { MdSend } from 'react-icons/md';
import styled from 'styled-components';

interface IProps {
  title: string;
}

function RoadmapCard({ title }: IProps) {
  return (
    <Container>
      <TitleBox>
        <Title>{title}</Title>
        <Button>
          <MdSend size={24} />
        </Button>
      </TitleBox>
      <div>로드맵 상세설명</div>
      {/* <image src={} alt="thumbnail"/> */}
    </Container>
  );
}

const Container = styled.div`
  width: 365px;
  height: 200px;
  border-radius: 16px;
  background-color: #f7f8f9;
  padding: 26px 32px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 36px;
`;

const Title = styled.h2`
  margin: 0;
`;

const Button = styled.button`
  background: none;
  border: none;
`;

export default RoadmapCard;
