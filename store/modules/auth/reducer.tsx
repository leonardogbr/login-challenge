import produce from 'immer';
import api from '../../../services/api';
import {AuthState} from '../../../models/auth_state.model';

const INITIAL_STATE: AuthState = {
  signed: false,
  loading: false,
};

export default function auth(
  state: AuthState = INITIAL_STATE,
  action: {type: string; payload: any},
) {
  return produce(state, (draft: AuthState) => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.signed = false;
        api.defaults.headers.Authorization = undefined;
        break;
      }
      default:
    }
  });
}
