import * as actionTypes from './actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CookieManager from '@react-native-cookies/cookies';
import {API_URL} from '../../../constants';

export const FcmToken = token => {
  return {
    type: actionTypes.FCM_TOKEN,
    payload: token,
  };
};

const saveToken = async (data) => {
  await AsyncStorage.setItem('token', data);
};

export const saveUser = async data => {
  await AsyncStorage.setItem('user', JSON.stringify(data));
};

export const getToken = token => {
  return {
    type: actionTypes.GET_USER_TOKEN,
    payload: token,
  };
};

export const getUser = data => {
  return dispatch => {
    dispatch({
      type: actionTypes.USER,
      payload: JSON.parse(data),
    });
  };
};

export const clearAuth = () => {
  return {
    type: actionTypes.CLEAR_AUTH,
  };
};

const clearData = async dispatch => {
  await AsyncStorage.getAllKeys()
    .then(keys => AsyncStorage.multiRemove(keys))
    .then(() => CookieManager.clearAll());
  dispatch({
    type: actionTypes.LOGOUT,
  });
};

export const onSignOut = () => {
  return async dispatch => {
    try {
      clearData(dispatch);
    } catch (err) {
      throw err;
    }
  };
};
export const fetchingAuth = option => {
  return async dispatch => {
    dispatch({
      type: actionTypes.AUTH_LOADING,
      payload: true,
    });
    try {
      const response = await fetch(API_URL + 'login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(option.body),
      });
      if (!response.ok) {
        dispatch({
          type: actionTypes.AUTH_LOADING,
          payload: false,
        });
        const res = await response.json();
        throw new Error(res.message);
      }
      const resData = await response.json();
      if (resData.token != '') {
        saveUser(resData.user);
        saveToken(resData.token);
        dispatch({
          type: actionTypes.SET_USER_TOKEN,
          payload: resData,
        });
        dispatch({
          type: actionTypes.AUTH_LOADING,
          payload: false,
        });
      }
    } catch (err) {
      dispatch({
        type: actionTypes.AUTH_LOADING,
        payload: false,
      });
      throw err;
    }
  };
};

export const fetchingTp = () => {
  return async dispatch => {
    dispatch({
      type: actionTypes.AUTH_LOADING,
      payload: true,
    });
    try {
      const response = await fetch(API_URL + 'app-provider-terms-policy', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        dispatch({
          type: actionTypes.AUTH_LOADING,
          payload: false,
        });
        const res = await response.json();
        throw new Error(res.message);
      }
      const resData = await response.json();
      dispatch({
        type: actionTypes.TERMS_POLICY,
        payload: resData.data,
      });
      dispatch({
        type: actionTypes.AUTH_LOADING,
        payload: false,
      });
    } catch (err) {
      dispatch({
        type: actionTypes.AUTH_LOADING,
        payload: false,
      });
      throw err;
    }
  };
};
