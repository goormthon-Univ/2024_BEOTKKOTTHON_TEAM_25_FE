import axios from './defaultClient';

export async function getDailyMission() {
  const response = await axios.get('/api/v1/missions/today', {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') },
  });

  const { missionId, content: dailyMission } = response.data.data;

  return { missionId, dailyMission };
}
