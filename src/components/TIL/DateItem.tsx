import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface IProps {
  date: string;
  selected: boolean;
  clickCount: number;
  color: string;
  onClickDate: Function;
}

function DateItem({ date, selected, clickCount, onClickDate, color }: IProps) {
  const sliderRef: any = useRef();

  useEffect(() => {
    sliderRef.current.style.transition = 'all 0.5s ease-in-out';
    // sliderRef.current.style.transform = `translateX(${-70 * clickCount}px)`;
  }, [clickCount]);

  return (
    <Container
      onClick={(e) => onClickDate(e.currentTarget.innerText)}
      selected={selected}
      ref={sliderRef}
    >
      <div>{date}</div>
      <Circle color={color} />
    </Container>
  );
}

const Container = styled.div`
  width: 95px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  background-color: ${(props: { selected: boolean }) =>
    props.selected && 'rgba(135, 220, 180, 0.2)'};
  @media screen and (max-width: 1200px) {
    width: 75px;
  }
  @media screen and (max-width: 1100px) {
    width: 70px;
    min-width: 70px;
  }
`;
const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props: { color: string }) => props.color};
  margin-bottom: 4px;
`;

export default DateItem;
