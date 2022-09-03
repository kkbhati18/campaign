import {APP_VER, HOME_LOADING} from '../action/Home/actionTypes';

const initialState = {
  App_ver: {},
  loading: false,
};

const HomeReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case HOME_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case APP_VER:
      return {
        ...state,
        App_ver: {...action.payload},
      };
    default:
      return state;
  }
};

export default HomeReducer;
