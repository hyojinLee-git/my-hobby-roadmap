import React from 'react';
import styled from 'styled-components';

interface IProps {
  title: string;
  content: string;
}

function Content({ title, content }: IProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <TilContent>{content}</TilContent>
    </Container>
  );
}

const Container = styled.div`
  height: 580px;
  border: 0.25px solid #000000;
  padding: 30px;
`;

const Title = styled.h2`
  width: 100%;
  background-color: #c4c4c41c;
  height: 56px;
  padding: 16px;
  border-radius: 4px;
`;

const TilContent = styled.div`
  width: 100%;
  background: #c4c4c41c;
  border-radius: 4px 4px 0px 0px;
  margin-top: 32px;
  height: 400px;
  padding: 42px 16px;
`;

export default Content;
