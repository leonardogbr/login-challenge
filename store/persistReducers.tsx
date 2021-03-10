import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

export default (reducers: any) => {
  const persistedReducer = persistReducer(
    {
      key: 'login-challenge',
      storage: AsyncStorage,
      whitelist: ['auth'],
    },
    reducers,
  );

  return persistedReducer;
};
