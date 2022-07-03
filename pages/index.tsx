import Router from 'next/router';
import React, { useEffect } from 'react';

function Home() {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname === '/') {
      Router.push('/roadmap');
    }
  }, []);
  return <div>loading</div>;
}
export default Home;
