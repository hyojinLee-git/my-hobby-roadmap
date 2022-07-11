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

export const userInformation = atom<any>({
  key: 'userInfo',
  default: {
    name: '',
    uid: '',
    email: '',
  },
});
