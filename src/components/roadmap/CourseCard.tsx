import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

interface IProps {
  title: string;
  exp: number;
  index: number;
}

function CourseCard({ index, title, exp }: IProps) {
  return (
    <Container>
      <Color color={index % 2 === 0 ? '#5970D2' : '#ACBCFF'} />
      <div>
        <TitleContainer>
          <Title>{title}</Title>
          <Link passHref href={`/til/${title}`}>
            <Checkbox />
          </Link>
        </TitleContainer>
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
  position: relative;
  @media screen and (max-width: 1100px) {
    margin-bottom: 48px;
  }
`;

const Color = styled.div`
  width: 16px;
  height: 100%;
  background: ${(props) => props.color};
  border-radius: 16px 0px 0px 16px;
  margin-right: 33px;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 470px;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  margin: 14px 0;
`;
const Button = styled.button`
  width: 85px;
  height: 30px;
  background: #5970d2;
  border-radius: 10px;
  color: #fff;
  border: none;
  position: absolute;
  right: 8px;
  bottom: 8px;
`;

const Checkbox = styled.div`
  width: 29px;
  height: 29px;
  border: 1px solid #5970d2;
`;

export default CourseCard;
