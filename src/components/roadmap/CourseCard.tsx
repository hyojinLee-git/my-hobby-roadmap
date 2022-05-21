import React from 'react';
import styled from 'styled-components';

interface IProps {
  status: string;
  title: string;
  detail: string;
  exp: number;
}

function CourseCard({ status, title, detail, exp }: IProps) {
  const _setColor = () => {
    switch (status) {
      case 'startable':
        return '#FFA06B';
      case 'proceeding':
        return '#FFFB9F';
      case 'complete':
        return '#87dcb4';
      default:
        return '#FFA06B';
    }
  };
  return (
    <Container>
      <Color color={_setColor()} />
      <div>
        <Title>{title}</Title>
        <div>{detail}</div>
        <Button>{exp}XP</Button>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 540px;
  height: 135px;
  background: #f7f8f9;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  padding: 8px;
  display: flex;
`;
const Color = styled.div`
  width: 16px;
  height: 100%;
  background: ${(props) => props.color};
  border-radius: 16px 0px 0px 16px;
  margin-right: 33px;
`;
const Title = styled.h2`
  margin: 14px 0;
`;
const Button = styled.button`
  width: 85px;
  height: 30px;
  background: #6750a4;
  border-radius: 10px;
  color: #fff;
  border: none;
`;
export default CourseCard;
