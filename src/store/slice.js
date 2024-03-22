import { createSlice } from '@reduxjs/toolkit';

import { postLogin } from '../services/api/auth';
import { getEarthStatus, getMyPoint } from '../services/api/home';
import { changeDailyMission, getDailyMission } from '../services/api/mission';

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
    point: 0,
    earthName: '',
    withDays: 0,
    usingItems: [],
    missionId: 0,
    dailyMission: '',
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

    setPoint(state, { payload: point }) {
      return {
        ...state,
        point,
      };
    },

    setEarthName(state, { payload: earthName }) {
      return {
        ...state,
        earthName,
      };
    },

    setWithDays(state, { payload: withDays }) {
      return {
        ...state,
        withDays,
      };
    },

    setUsingItems(state, { payload: usingItems }) {
      return {
        ...state,
        usingItems,
      };
    },

    setMissionId(state, { payload: missionId }) {
      return {
        ...state,
        missionId,
      };
    },

    setDailyMission(state, { payload: dailyMission }) {
      return {
        ...state,
        dailyMission,
      };
    },
  },
});

export const {
  changeLoginField,
  setMemberId,
  setAccessToken,
  setRefreshToken,
  setPoint,
  setEarthName,
  setWithDays,
  setUsingItems,
  setMissionId,
  setDailyMission,
} = actions;

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

export function loadHomeData() {
  return async (dispatch) => {
    const [point, { usingItems, earthName, withDays }, { missionId, dailyMission }] =
      await Promise.all([getMyPoint(), getEarthStatus(), getDailyMission()]);

    saveItem('missionId', missionId);

    dispatch(setPoint(point));
    dispatch(setWithDays(withDays));
    dispatch(setUsingItems(usingItems));
    dispatch(setEarthName(earthName));
    dispatch(setMissionId(missionId));
    dispatch(setDailyMission(dailyMission));
  };
}

export function loadChangeDailyMission() {
  return async (dispatch) => {
    const { missionId, dailyMission } = await changeDailyMission();

    saveItem('missionId', missionId);

    dispatch(setMissionId(missionId));
    dispatch(setDailyMission(dailyMission));
  };
}

export default reducer;
