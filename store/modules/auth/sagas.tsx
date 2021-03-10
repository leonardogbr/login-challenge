import {takeLatest, call, put, all} from 'typed-redux-saga';
import Toast from 'react-native-toast-message';
import api from '../../../services/api';
import {signInSuccess, signFailure} from './actions';

export function* signIn({payload}: any) {
  try {
    const {email, password} = payload;

    const response: any = yield* call(api.post, '', {
      email,
      password,
    });

    const data = JSON.parse(JSON.stringify(response.data || {}));

    // Erro ao se logar
    if (!(data?.success || false) || email != 'teste@teste.com')
      throw Error(
        'Desculpe! Não foi possível logar em sua conta. Revise seus dados e tente novamente!',
      );

    const {token} = data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess());
  } catch (error) {
    Toast.show({
      text1: 'Oooops, algo deu errado.',
      text2: error.message,
      type: 'error',
      visibilityTime: 5000,
    });
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
