import { atom } from 'recoil';

export const tilContent = atom<any>({
  key: 'tilContent',
  default: {
    moduleName: '',
    content: '',
    date: '',
  },
});
