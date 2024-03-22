import axios from './defaultClient';

export async function getMyMonthlyFriendsData() {
  const response = await axios.get('/api/v1/members/me/missions/monthly', {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') },
  });

  const { completedMissionCount, accumulatedPoint, completionRate } = response.data.data;

  return { completedMissionCount, accumulatedPoint, completionRate };
}

export async function getFriendsMonthlyFriendsData() {
  const response = await axios.get('/api/v1/members/me/friends/missions/monthly', {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') },
  });

  return response.data.data;
}
