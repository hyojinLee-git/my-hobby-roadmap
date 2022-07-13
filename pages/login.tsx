import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { authService } from '@/auth/firebaseConfig';
import Router from 'next/router';

const logo = require('@/asset/logo.png');
const title = require('@/asset/IZEL.png');
const googleLogin = require('@/asset/google.png');

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const provider = new GoogleAuthProvider();

  const _login = () => {
    signInWithPopup(authService, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // const user = result.user;
        // console.log(token, user);
        Router.push('/');
      })
      .catch((error) => {
        //   Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        //   The email of the user's account used.
        const email = error.customData.email;
        //   The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        //   ...
      });
  };

  return (
    <Container>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '150px',
          justifyContent: 'space-between',
          marginBottom: '50px',
        }}
      >
        <Image src={logo} alt="logo" width={57} height={81} />
        <Image src={title} alt="title" />
      </div>
      <Input
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        upside={true}
      />
      <Input
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        upside={false}
      />
      <LoginButton>이메일로 로그인하기</LoginButton>
      <RegistButton>회원가입 하기</RegistButton>
      <GoogleLoginButton onClick={_login}>
        <Image src={googleLogin} alt={'google'} width={25} height={31} />
        <span style={{ paddingRight: '100px' }}>구글로 로그인</span>
      </GoogleLoginButton>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;
const Input = styled.input`
  display: block;
  border: 1.5px solid #d0d0d0;
  border-bottom: ${(props: { upside: boolean }) =>
    props.upside ? 'none' : undefined};
  border-top-left-radius: ${(props: { upside: boolean }) =>
    props.upside ? '10px' : 0};
  border-top-right-radius: ${(props: { upside: boolean }) =>
    props.upside ? '10px' : 0};
  border-bottom-left-radius: ${(props: { upside: boolean }) =>
    props.upside ? 0 : '10px'};
  border-bottom-right-radius: ${(props: { upside: boolean }) =>
    props.upside ? 0 : '10px'};
  padding-left: 24px;
  padding-top: 18px;
  padding-bottom: 18px;
  font-size: 14px;
  height: 50px;
  width: 370px;
  outline: none;
`;
const LoginButton = styled.button`
  display: block;
  width: 370px;
  height: 57px;
  margin-top: 26px;
  border: 1px solid #e7ecef;
  outline: none;
  border-radius: 10px;
  background-color: #3249bb;
  color: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  font-weight: 700;
  font-size: 18px;
`;
const RegistButton = styled.button`
  display: block;
  margin-top: 22px;
  background: none;
  outline: none;
  border: none;
  color: #9ca2a6;
  font-weight: 600;
  font-size: 20px;
`;

const GoogleLoginButton = styled.button`
  background: #ffffff;
  border: 1px solid #eaeaea;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 370px;
  height: 53px;
  font-size: 14px;
  font-weight: 500;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default Login;
