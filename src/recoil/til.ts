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
