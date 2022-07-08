import { loginState } from '@/recoil/global';
import { loginUtil } from '@/utils/auth';
import Router from 'next/router';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

function Home() {
  const [login, setLogin] = useRecoilState(loginState);
  useEffect(() => {
    loginUtil(setLogin);
  }, []);
  useEffect(() => {
    const { pathname } = Router;
    if (pathname === '/') {
      Router.push('/roadmap');
    }
  }, []);
  return <div>loading</div>;
}
export default Home;
