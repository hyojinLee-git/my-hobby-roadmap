import React from 'react';
import styled from 'styled-components';

interface IProps {
  date: string;
  written: boolean;
  selected: boolean;
}

function DatePicker({ date, written, selected }: IProps) {
  return (
    <Container selected={selected}>
      <div>{date}</div>
      <Circle written={written} />
    </Container>
  );
}

const Container = styled.div`
  width: 85px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  background-color: ${(props: { selected: boolean }) =>
    props.selected && 'rgba(135, 220, 180, 0.2)'};
`;
const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props: { written: boolean }) =>
    props.written ? '#87DCB4' : '#C4C4C4'};
  margin-bottom: 4px;
`;

export default DatePicker;
