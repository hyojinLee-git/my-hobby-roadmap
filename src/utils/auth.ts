import { authService } from '@/auth/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

export const loginUtil = (setState: Function) => {
  onAuthStateChanged(authService, (user) => {
    if (user) {
      console.log('login?', user.uid);
      setState(true);
    } else {
      setState(false);
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
