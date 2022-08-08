import { selectedMenu } from '@/recoil/global';
import Image from 'next/image';
import Link from 'next/link';
import { Router, useRouter } from 'next/router';
import React, { useEffect } from 'react';
import {
  MdOutlineExplore,
  MdCheckBox,
  MdOutlineNotificationsNone,
  MdSettings,
  MdModeEdit,
  MdVideogameAsset,
  MdMenu,
} from 'react-icons/md';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

const navMenu = [
  {
    icon: <MdOutlineExplore size={24} />,
    link: '/roadmap',
    title: '탐색',
  },
  {
    icon: <MdModeEdit size={24} />,
    link: '/til',
    title: 'TIL',
  },
  {
    icon: <MdCheckBox size={24} />,
    link: '/personalRoadmap',
    title: '로드맵',
  },
  {
    icon: <MdOutlineNotificationsNone size={24} />,
    link: '/alarm',
    title: '알림',
  },

  {
    icon: <MdSettings size={24} />,
    link: '/setting',
    title: '설정',
  },
];

const logo = require('@/asset/IZEL.png');

function NavigationBar() {
  const [menu, setMenu] = useRecoilState(selectedMenu);
  const router = useRouter();
  useEffect(() => {
    if (!menu) {
      const { pathname } = router;
      setMenu(navMenu.find((item) => item.link === pathname)?.icon);
    }
  }, []);

  return (
    <Nav>
      <Image src={logo} alt="logo" width={60} height={20} />
      <div style={{ marginBottom: '16px', marginTop: '40px' }}>
        <HamburgerBtn>
          <MdMenu size={23} />
        </HamburgerBtn>
      </div>
      <SelectedMenu>{menu}</SelectedMenu>
      <Ul>
        {navMenu.map((item, idx) => (
          <Li key={idx} onClick={() => setMenu(item.icon)}>
            <Link passHref href={item.link}>
              <StyledLink>
                <div>{item.icon}</div>
              </StyledLink>
            </Link>
          </Li>
        ))}
      </Ul>
    </Nav>
  );
}
const Nav = styled.nav`
  max-width: 220px;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 2;
  padding-top: 35px;
  margin-top: 23px;
`;

const HamburgerBtn = styled.button`
  background: none;
  outline: none;
  border: none;
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
  /* border: 1px solid green; */
`;
const StyledLink = styled.a`
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

export default NavigationBar;
