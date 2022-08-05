import DateItem from '@/components/TIL/DateItem';
import { tilList } from '@/recoil/til';
import React, { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

interface IProps {
  dateList: any;
  today: string;
  setDateList: Function;
  setToday: Function;
}

function DatePicker({ dateList, setDateList, setToday, today }: IProps) {
  const [clickCount, setClickCount] = useState(2);
  const [tilCount, setTilCount] = useState<number[]>([]);
  const til = useRecoilValue(tilList);

  const _moveLeft = () => {
    const newArr = [...dateList];
    const month = parseInt(newArr[0].split('/')[0], 10);
    const day = parseInt(newArr[0].split('/')[1], 10);
    newArr.unshift(`${month}/${day - 1}`);
    newArr.pop();
    setDateList(newArr);
    setClickCount(clickCount - 1);
  };
  const _moveRight = () => {
    setClickCount(clickCount + 1);
    const newArr = [...dateList];
    const month = parseInt(newArr[newArr.length - 1].split('/')[0], 10);
    const day = parseInt(newArr[newArr.length - 1].split('/')[1], 10);
    newArr.push(`${month}/${day + 1}`);
    newArr.shift();
    setDateList(newArr);
  };
  const _onClickDate = (date: string) => {
    setToday(date);
  };

  const _getTilCount = () => {
    const tilCount = dateList?.map((item: string) => {
      const year = new Date().getFullYear();
      const [month, date] = item.split('/');
      const list = til?.filter(
        (tilItem: any) =>
          tilItem.date ===
          `${year}-${Number(month) < 10 ? `0${month}` : month}-${
            Number(date) < 10 ? `0${date}` : date
          }`,
      );
      return list.length;
    });
    setTilCount(tilCount);
  };

  const _getCircleColor = (count: number) => {
    if (count >= 5) return '#2BD585';
    switch (count) {
      case 0:
        return '#C4C4C4';
      case 1:
      case 2:
        return '#F9B9B9';
      case 3:
      case 4:
        return '#8EF0C2';
      default:
        return '#C4C4C4';
    }
  };

  useEffect(() => {
    _getTilCount();
  }, [clickCount]);

  return (
    <Container>
      <MdChevronLeft size={50} onClick={_moveLeft} />
      <DateItemWrapper>
        {dateList?.map((item: any, index: number) => (
          <DateItem
            key={item}
            date={item}
            selected={item === today}
            clickCount={clickCount}
            color={_getCircleColor(tilCount?.[index])}
            onClickDate={(date: string) => _onClickDate(date)}
          />
        ))}
      </DateItemWrapper>
      <MdChevronRight size={50} onClick={_moveRight} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border: 0.25px solid #00000080;
  border-radius: 20px;
  align-items: center;
  max-width: '1086px';
  justify-content: center;
  width: 790px;
`;

const DateItemWrapper = styled.div`
  display: flex;
  width: 690px;
  overflow: hidden;
`;

export default DatePicker;
