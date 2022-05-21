import React, { useState } from 'react';
import {
  MdOutlineExplore,
  MdCheckBox,
  MdOutlineNotificationsNone,
  MdSettings,
} from 'react-icons/md';
import styled from 'styled-components';

const navMenu = [
  {
    icon: <MdOutlineExplore size={24} />,
    link: '/',
    title: '탐색',
  },
  {
    icon: <MdCheckBox size={24} />,
    link: '/personalRoadmap',
    title: '로드맵',
  },
  {
    icon: <MdOutlineNotificationsNone size={24} />,
    link: '/',
    title: '알림',
  },

  {
    icon: <MdSettings size={24} />,
    link: '/',
    title: '설정',
  },
];

function NavigationBar() {
  const [selectedMenu, setSelectedMenu] = useState(navMenu[0].icon);
  //bp인지는 모르겠는데 button으로 구현해야될것 같기도?
  return (
    <Nav>
      <div>
        <button>hamberger</button>
      </div>
      <SelectedMenu>{selectedMenu}</SelectedMenu>
      <Ul>
        {navMenu.map((item, idx) => (
          <Li key={idx}>
            <Link href={item.link} onClick={() => setSelectedMenu(item.icon)}>
              <div>{item.icon}</div>
              <Title>{item.title}</Title>
            </Link>
          </Li>
        ))}
      </Ul>
    </Nav>
  );
}
const Nav = styled.nav`
  flex: 1;
  max-width: 220px;
  border: '1px solid red';
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectedMenu = styled.div`
  width: 56px;
  height: 56px;
  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15);
  filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.3));
  background-color: #d0e0f0;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;
const Li = styled.li`
  width: 70px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid green;
`;
const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  width: 56px;
  height: 32px;
  &:hover {
    background-color: #e8def8;
    opacity: 1;
  }
`;
const Title = styled.div`
  display: none;
`;

export default NavigationBar;
