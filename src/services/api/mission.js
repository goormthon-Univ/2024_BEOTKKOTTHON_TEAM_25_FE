import axios from './defaultClient';

export async function getDailyMission() {
  const response = await axios.get('/api/v1/missions/today', {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') },
  });

  const { missionId, content: dailyMission } = response.data.data;

  return { missionId, dailyMission };
}

export async function changeDailyMission() {
  const response = await axios.patch(
    '/api/v1/missions/today',
    {},
    {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') },
    },
  );

  const { missionId, content: dailyMission } = response.data.data;

  return { missionId, dailyMission };
}

export async function getCompletedMissions() {
  const response = await axios.get('/api/v1/members/me/missions/completed?yearMonth=2024-03', {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') },
  });

  const completedMissions = response.data.data;

  return completedMissions;
}
