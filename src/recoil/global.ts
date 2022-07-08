import { ReactNode } from 'react';
import { atom } from 'recoil';

export const selectedMenu = atom<ReactNode>({
  key: 'selectedMenu',
  default: undefined,
});

export const loginState = atom<boolean>({
  key: 'loginState',
  default: false,
});
