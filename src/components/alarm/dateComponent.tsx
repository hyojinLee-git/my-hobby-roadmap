import React from 'react';
import styled from 'styled-components';

interface IProps {
  sendAt: string;
}

function DateComponent({ sendAt }: IProps) {
  return <Container>{sendAt}</Container>;
}

const Container = styled.div`
  width: 800px;
  height: 30px;
  border-left: 2px solid #000000;
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 400;
`;

export default DateComponent;
