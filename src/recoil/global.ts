import { ReactNode } from 'react';
import { atom } from 'recoil';

export const selectedMenu = atom<ReactNode>({
  key: 'selectedMenu',
  default: undefined,
});
