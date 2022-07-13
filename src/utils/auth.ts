import { authService } from '@/auth/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

export const loginUtil = (setLoginState: Function, setUserInfo: Function) => {
  onAuthStateChanged(authService, (user) => {
    if (user) {
      setLoginState(true);
      setUserInfo((prev: any) => ({
        ...prev,
        name: user.displayName,
        email: user.email,
        uid: user.uid,
      }));
    } else {
      setLoginState(false);
    }
  });
};

export const getUserInfo = (setState: Function) => {
  onAuthStateChanged(authService, (user) => {
    if (user) {
      setState({
        name: user.displayName,
        email: user.email,
      });
    } else {
      return {};
    }
  });
};

export const getUid = (setState: Function) => {
  onAuthStateChanged(authService, (user) => {
    if (user) {
      setState(user.uid);
    } else {
      return;
    }
  });
};
