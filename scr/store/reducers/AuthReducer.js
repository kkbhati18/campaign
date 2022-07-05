import {
  USER,
  FCM_TOKEN,
  AUTH_LOADING,
  LOGOUT,
  CLEAR_AUTH,
  SET_USER_TOKEN,
  GET_USER_TOKEN,
  TERMS_POLICY,
} from '../action/Auth/actionTypes';

const INITIAL_STATE = {
  user: {},
  loading: false,
  FmcToken: '',
  token: null,
  Splash: true,
  terms_policy: {},
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  // console.log(action);
  switch (action.type) {
    case USER:
      return {
        ...state,
        user: {...action.payload},
        Splash: false,
      };
    case FCM_TOKEN:
      return {
        ...state,
        FmcToken: action.payload,
      };
    case LOGOUT:
      return {
        ...INITIAL_STATE,
      };
    case CLEAR_AUTH:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    case SET_USER_TOKEN:
      return {
        ...state,
        token: action.payload.token,
        user: {...action.payload.user},
      };
    case GET_USER_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case AUTH_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case TERMS_POLICY:
      return {
        ...state,
        terms_policy: {...action.payload},
      };
    default:
      return state;
  }
};

export default AuthReducer;
