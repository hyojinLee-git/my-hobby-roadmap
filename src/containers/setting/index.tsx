import Header from '@/components/common/Header';
import React from 'react';
import styled from 'styled-components';

function SettingScreen() {
  return (
    <Container>
      <Header title="환경설정" />
      <div>
        <SubTitle>내 프로필</SubTitle>
        <Profile>
          <Circle>손</Circle>
          <h3>손형준</h3>
        </Profile>
      </div>
      <div>
        <SubTitle>이메일</SubTitle>
        <Text>shjmj187@naver.com</Text>
      </div>
      <div>
        <SubTitle>개발자 문의사항</SubTitle>
        <Text>shjmj187@naver.com</Text>
      </div>
      <div>
        <SubTitle>푸시 알람 설정</SubTitle>
        <div></div>
      </div>
      <div>
        <SubTitle>버전</SubTitle>
        <Text>1.0.0</Text>
      </div>
      <div>
        <SubTitle>로그아웃</SubTitle>
        <button>로그아웃</button>
      </div>
    </Container>
  );
}
const Container = styled.div`
  flex: 3;
  border: 1px solid red;
  margin-top: 85px;
`;
const SubTitle = styled.h2`
  font-size: 24;
  font-weight: 500;
  margin-bottom: 16px;
  margin-top: 34px;
`;
const Profile = styled.div`
  /* width: 1100px; */
  height: 120px;
  border: 0.25px solid rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  padding: 24px;
`;

const Circle = styled.div`
  width: 72px;
  height: 72px;
  background-color: #1970c6;
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 500;
  margin-right: 24px;
`;

const Text = styled.div`
  color: #919191;
`;

const Switch = styled.div``;
export default SettingScreen;
