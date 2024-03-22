import { createSlice } from '@reduxjs/toolkit';

import { postLogin } from '../services/api/auth';

import { saveItem } from '../services/storage';

const { actions, reducer } = createSlice({
  name: 'Own-Earth',
  initialState: {
    loginFields: {
      email: '',
      password: '',
    },
    memberId: 0,
    accessToken: '',
    refreshToken: '',
  },
  reducers: {
    changeLoginField(state, { payload: { name, value } }) {
      return {
        ...state,
        loginFields: {
          ...state.loginFields,
          [name]: value,
        },
      };
    },

    setMemberId(state, { payload: memberId }) {
      return {
        ...state,
        memberId,
      };
    },

    setAccessToken(state, { payload: accessToken }) {
      return {
        ...state,
        accessToken,
      };
    },

    setRefreshToken(state, { payload: refreshToken }) {
      return {
        ...state,
        refreshToken,
      };
    },
  },
});

export const { changeLoginField, setMemberId, setAccessToken, setRefreshToken } = actions;

export function requestLogin() {
  return async (dispatch, getState) => {
    try {
      const {
        loginFields: { email, password },
      } = getState();

      const { memberId, accessToken, refreshToken } = await postLogin({ email, password });

      saveItem('memberId', memberId);
      saveItem('accessToken', accessToken);
      saveItem('refreshToken', refreshToken);

      dispatch(setMemberId(memberId));
      dispatch(setAccessToken(accessToken));
      dispatch(setRefreshToken(refreshToken));

      // 로그인 성공 처리를 위해 Promise.resolve() 반환
      return Promise.resolve();
    } catch (error) {
      // 로그인 실패 처리를 위해 Promise.reject(error) 반환
      return Promise.reject(error);
    }
  };
}

export default reducer;
