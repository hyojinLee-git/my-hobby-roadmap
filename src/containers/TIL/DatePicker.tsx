import DateItem from '@/components/TIL/DateItem';
import React, { useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

interface IProps {
  dateList: any;
  today: string;
  setDateList: Function;
  setToday: Function;
}

function DatePicker({ dateList, setDateList, setToday, today }: IProps) {
  const [clickCount, setClickCount] = useState(1);
  const _moveLeft = () => {
    const newArr = [...dateList];
    newArr.pop();
    setDateList(newArr);
    setClickCount(clickCount - 1);
  };
  const _moveRight = () => {
    const newArr = [...dateList];
    const month = parseInt(newArr[newArr.length - 1].date.split('/')[0], 10);
    const day = parseInt(newArr[newArr.length - 1].date.split('/')[1], 10);
    newArr.push({
      date: `${month}/${day + 1}`,
      written: false,
      // selected: false,
    });
    setDateList(newArr);
    setClickCount(clickCount + 1);
  };
  const _onClickDate = (date: string) => {
    setToday(date);
  };
  return (
    <div
      style={{
        display: 'flex',
        border: '0.25px solid #00000080',
        borderRadius: 20,
        alignItems: 'center',
        maxWidth: '1086px',
        justifyContent: 'center',
        width: '90%',
      }}
    >
      <MdChevronLeft size={50} onClick={_moveLeft} />
      <div
        style={{
          display: 'flex',
          overflow: 'hidden',
        }}
      >
        {dateList?.map((item: any) => (
          <DateItem
            key={item.date}
            date={item.date}
            selected={item.date === today}
            written={item.written}
            clickCount={clickCount}
            onClickDate={(date: string) => _onClickDate(date)}
          />
        ))}
      </div>
      <MdChevronRight size={50} onClick={_moveRight} />
    </div>
  );
}

export default DatePicker;
