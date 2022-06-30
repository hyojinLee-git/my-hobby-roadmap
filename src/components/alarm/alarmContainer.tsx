import React from 'react';
import styled from 'styled-components';

interface IProps {
  data: { contents: string; sender: string; sendAt: string };
}

function AlarmContainer({ data }: IProps) {
  return (
    <Container>
      <Circle>앱</Circle>
      <ContentBox>
        <Content>{data.contents}</Content>
        <div>{data.sender}</div>
      </ContentBox>
    </Container>
  );
}

const Container = styled.div`
  width: 800px;
  height: 120px;
  border: 0.25px solid rgba(0, 0, 0, 0.5);
  margin-bottom: 33px;
  display: flex;
  align-items: center;
  padding: 24px;
`;
const Circle = styled.div`
  width: 72px;
  height: 72px;
  background-color: #1970c6;
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 500;
`;
const ContentBox = styled.div`
  margin-left: 32px;
`;

const Content = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 7px;
`;

export default AlarmContainer;
