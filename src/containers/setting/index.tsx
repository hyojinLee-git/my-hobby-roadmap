import Header from '@/components/common/Header';
import { getUserInfo } from '@/utils/auth';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { signOut } from 'firebase/auth';
import { authService } from '@/auth/firebaseConfig';

function SettingScreen() {
  const [userInfo, setUserInfo] = useState(
    {} as { name: string; email: string },
  );

  const _logout = () => {
    signOut(authService).then(() => {
      console.log('sign out');
    });
  };

  useEffect(() => {
    getUserInfo(setUserInfo);
  }, []);

  return (
    <Container>
      <Header title="환경설정" />
      <div>
        <SubTitle>내 프로필</SubTitle>
        <Profile>
          <Circle>
            {userInfo.name
              ? userInfo.name?.split(' ')?.[1]
              : userInfo.email?.split('@')?.[0]}
          </Circle>
          <h3>{userInfo.name ? userInfo.name : userInfo.email}</h3>
        </Profile>
      </div>
      <div>
        <SubTitle>이메일</SubTitle>
        <Text>{userInfo.email}</Text>
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
        <button onClick={_logout}>로그아웃</button>
      </div>
    </Container>
  );
}
const Container = styled.div`
  flex: 3;
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
