import { atom } from 'recoil';

export const tilContent = atom<any>({
  key: 'tilContent',
  default: {
    moduleName: '',
    content: '',
    date: '',
  },
});

export const modulePathRecoil = atom<string>({
  key: 'modulePathRecoil',
  default: '',
});

export const todayTilList = atom<any>({
  key: 'todayTilList',
  default: [],
});

export const tilList = atom<any>({
  key: 'tilList',
  default: undefined,
});
