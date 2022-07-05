import * as actionTypes from './actionTypes';
import {API_URL} from '../../../constants';
import {saveUser} from '../Auth/action';
import {USER} from '../Auth/actionTypes';

export const Home = option => {
  return async dispatch => {
    dispatch({
      type: actionTypes.HOME_LOADING,
      payload: true,
    });
    try {
      const response = await fetch(API_URL + 'dashboard', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${option.token}`,
        },
      });
      if (!response.ok) {
        dispatch({
          type: actionTypes.HOME_LOADING,
          payload: false,
        });
        const res = await response.json();
        throw new Error(res.message);
      }
      const resData = await response.json();
      saveUser(resData.user);
      dispatch({
        type: USER,
        payload: resData.user,
      });
      dispatch({
        type: actionTypes.HOME_LOADING,
        payload: false,
      });
    } catch (err) {
      dispatch({
        type: actionTypes.HOME_LOADING,
        payload: false,
      });
      throw err;
    }
  };
};

export const CustomerData = option => {
  return async dispatch => {
    dispatch({
      type: actionTypes.HOME_LOADING,
      payload: true,
    });
    try {
      const response = await fetch(API_URL + 'user-submit', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${option.token}`,
        },
        body: JSON.stringify(option.body),
      });
      if (!response.ok) {
        dispatch({
          type: actionTypes.HOME_LOADING,
          payload: false,
        });
        const res = await response.json();
        throw new Error(res.message);
      }
      const resData = await response.json();
      dispatch({
        type: actionTypes.HOME_LOADING,
        payload: false,
      });
    } catch (err) {
      dispatch({
        type: actionTypes.HOME_LOADING,
        payload: false,
      });
      throw err;
    }
  };
};

export const AppVer = option => {
  return async dispatch => {
    dispatch({
      type: actionTypes.HOME_LOADING,
      payload: true,
    });
    try {
      const response = await fetch(API_URL + 'app-version', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        dispatch({
          type: actionTypes.HOME_LOADING,
          payload: false,
        });
        const res = await response.json();
        throw new Error(res.message);
      }
      const resData = await response.json();
      dispatch({
        type: actionTypes.APP_VER,
        payload: resData,
      });
      dispatch({
        type: actionTypes.HOME_LOADING,
        payload: false,
      });
    } catch (err) {
      dispatch({
        type: actionTypes.HOME_LOADING,
        payload: false,
      });
      throw err;
    }
  };
};
