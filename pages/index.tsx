import { loginState, userInformation } from '@/recoil/global';
import { loginUtil } from '@/utils/auth';
import Router from 'next/router';
import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

function Home() {
  const setLogin = useSetRecoilState(loginState);
  const setUserInfo = useSetRecoilState(userInformation);
  useEffect(() => {
    loginUtil(setLogin, setUserInfo);
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
