import React from 'react';
import styled from 'styled-components';

interface IProps {
  title: string;
  content: string;
}

function Content({ title, content }: IProps) {
  return (
    <Container>
      <h2>{title}</h2>
      <div>{content}</div>
    </Container>
  );
}

const Container = styled.div`
  height: 580px;
  border: 0.25px solid #000000;
  padding: 30px;
`;

export default Content;
