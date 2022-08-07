import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import noSearch from '@/asset/no-results-found.json';

function Lottie() {
  const container = document.querySelector('#container');

  useEffect(() => {
    lottie.loadAnimation({
      container: container!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: noSearch,
    });
  }, [container]);

  return <div id="container" style={{ width: '200px', height: '200px' }} />;
}

export default Lottie;
