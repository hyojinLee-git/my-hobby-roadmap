import { atom } from 'recoil';

export const roadmapData = atom<any>({
  key: 'roadmapData',
  default: [],
});

export const modulesData = atom<any>({
  key: 'modulesData',
  default: [],
});
