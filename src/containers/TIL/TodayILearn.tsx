import Header from '@/components/common/Header';
import DatePicker from '@/components/TIL/DatePicker';
import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const dateData = [
  {
    date: '3/24',
    written: false,
    selected: false,
  },
  {
    date: '3/25',
    written: false,
    selected: false,
  },
  {
    date: '3/26',
    written: true,
    selected: true,
  },
  {
    date: '3/27',
    written: false,
    selected: false,
  },
  {
    date: '3/28',
    written: false,
    selected: false,
  },
  {
    date: '3/29',
    written: false,
    selected: false,
  },
  {
    date: '3/30',
    written: false,
    selected: false,
  },
  {
    date: '3/31',
    written: false,
    selected: false,
  },
  {
    date: '4/1',
    written: false,
    selected: false,
  },
  {
    date: '4/2',
    written: false,
    selected: false,
  },
];

function TodayILearn() {
  return (
    <div>
      <Header title={'Today I Learn'} />
      <div
        style={{
          display: 'flex',
          border: '0.25px solid #00000080',
          borderRadius: 20,
          alignItems: 'center',
        }}
      >
        <MdChevronLeft size={50} />
        {dateData.map((item) => (
          <DatePicker
            key={item.date}
            date={item.date}
            selected={item.selected}
            written={item.written}
          />
        ))}
        <MdChevronRight size={50} />
      </div>
      <div>
        <h2>로드맵1 3/26</h2>
      </div>
      <div>editor</div>
    </div>
  );
}
export default TodayILearn;
