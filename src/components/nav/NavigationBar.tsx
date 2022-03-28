import React from 'react';

const navMenu = ['검색', '로드맵', '알림', '설정'];

function NavigationBar() {
  return (
    <nav>
      <ul>
        {navMenu.map((item) => (
          <li key={item}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationBar;
