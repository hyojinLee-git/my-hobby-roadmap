import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';

interface IProps {
  title: string;
  selectList?: string[];
  isLast?: boolean;
  value?: string;
  setValue: Function;
}
function TitleNSelect({ title, selectList, isLast, value, setValue }: IProps) {
  const _onClick = (e: any) => {
    setValue(e.target.innerText);
  };
  return (
    <Container>
      <Title>{title}</Title>
      <SelectList isLast={isLast}>
        {isLast
          ? selectList?.map((item, index) => (
              <Link passHref href={`/roadmap/${index}`} key={item}>
                <SelectLink selected={item === value}>{item}</SelectLink>
              </Link>
            ))
          : selectList?.map((item) => (
              <SelectButton
                selected={item === value}
                onClick={_onClick}
                key={item}
              >
                {item}
              </SelectButton>
            ))}
      </SelectList>
    </Container>
  );
}

const Container = styled.div`
  /* border: 1px solid red; */
  width: 270px;
  @media screen and (max-width: 1100px) {
    width: 200px;
  }
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  border-bottom: 1px solid;
  width: 100%;
  text-align: center;
  margin: 0;
`;

const SelectList = styled.div`
  height: 570px;
  overflow: scroll;
  border-left: 1px solid #cbcbcb;
  border-bottom: 1px solid #cbcbcb;
  border-right: ${(props: { isLast: boolean | undefined }) =>
    props.isLast && '1px solid #cbcbcb'};
`;

const SelectButton = styled.button`
  display: block;
  width: 100%;
  border: none;
  outline: none;
  height: 80px;
  background-color: ${(props: { selected: boolean }) =>
    props.selected ? '#EBEDF9' : '#FFFFFF'};
  font-weight: 600;
  font-size: 20px;
`;

const SelectLink = styled.a`
  display: flex;
  width: 100%;
  border: none;
  outline: none;
  height: 80px;
  background-color: ${(props: { selected: boolean }) =>
    props.selected ? '#EBEDF9' : '#FFFFFF'};
  font-weight: 600;
  font-size: 20px;
  align-items: center;
  justify-content: center;
`;

export default TitleNSelect;
