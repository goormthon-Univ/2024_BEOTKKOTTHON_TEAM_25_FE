import { createSlice } from '@reduxjs/toolkit';

import { postLogin } from '../services/api/auth';
import { getEarthStatus, getMyPoint } from '../services/api/home';
import { changeDailyMission, getCompletedMissions, getDailyMission } from '../services/api/mission';
import { getMyMonthlyFriendsData, getFriendsMonthlyFriendsData } from '../services/api/friends';

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
    completedMissions: [],
    completedMissionMonth: 3,
    completedMissionCategory: '',
    accumulatedPoint: 0,
    completedMissionCount: 0,
    completionRate: 0,
    friends: [],
    friendId: 0,
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

    setCompletedMissions(state, { payload: completedMissions }) {
      return {
        ...state,
        completedMissions,
      };
    },

    setCompletedMissionMonth(state, { payload: completedMissionMonth }) {
      return {
        ...state,
        completedMissionMonth,
      };
    },

    setCompletedMissionCategory(state, { payload: completedMissionCategory }) {
      return {
        ...state,
        completedMissionCategory,
      };
    },

    setAccumulatedPoint(state, { payload: accumulatedPoint }) {
      return {
        ...state,
        accumulatedPoint,
      };
    },

    setCompletedMissionCount(state, { payload: completedMissionCount }) {
      return {
        ...state,
        completedMissionCount,
      };
    },

    setCompletionRate(state, { payload: completionRate }) {
      return {
        ...state,
        completionRate,
      };
    },

    setFriends(state, { payload: friends }) {
      return {
        ...state,
        friends,
      };
    },

    setFriendId(state, { payload: friendId }) {
      return {
        ...state,
        friendId,
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
  setCompletedMissions,
  setCompletedMissionMonth,
  setCompletedMissionCategory,
  setAccumulatedPoint,
  setCompletedMissionCount,
  setCompletionRate,
  setFriends,
  setFriendId,
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

export function loadCompletedMissions() {
  return async (dispatch, getState) => {
    const { completedMissionMonth, completedMissionCategory } = getState();

    const completedMissions = await getCompletedMissions(
      completedMissionMonth,
      completedMissionCategory,
    );

    dispatch(setCompletedMissions(completedMissions));
  };
}

export function loadFriendsData() {
  return async (dispatch) => {
    const [{ completedMissionCount, accumulatedPoint, completionRate }, response] =
      await Promise.all([getMyMonthlyFriendsData(), getFriendsMonthlyFriendsData()]);

    dispatch(setCompletedMissionCount(completedMissionCount));
    dispatch(setAccumulatedPoint(accumulatedPoint));
    dispatch(setCompletionRate(completionRate));
    dispatch(setFriends(response));
  };
}

export default reducer;
