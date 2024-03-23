import axios from './defaultClient';

export async function getDailyMission() {
  const response = await axios.get('/api/v1/missions/today', {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') },
  });

  const { missionId, content: dailyMission, imageUrl, isCompleted } = response.data.data;

  return { missionId, dailyMission, imageUrl, isCompleted };
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

export async function getCompletedMissions(month, category) {
  if (category !== '') {
    const response = await axios.get(`/api/v1/members/me/missions/completed?category=${category}`, {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') },
    });
    const completedMissions = response.data.data;
    return completedMissions;
  }
  if (category === '') {
    if (month >= 1 && month <= 9) {
      const response = await axios.get(
        `/api/v1/members/me/missions/completed?yearMonth=2024-0${month}`,
        {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') },
        },
      );
      const completedMissions = response.data.data;
      return completedMissions;
    }
    const response = await axios.get(
      `/api/v1/members/me/missions/completed?yearMonth=2024-${month}`,
      {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') },
      },
    );
    const completedMissions = response.data.data;
    return completedMissions;
  }
}

export async function postMissionPhoto(file) {
  const missionId = localStorage.getItem('missionId');
  const formData = new FormData();
  formData.append('image', file);

  const response = await axios.post(`/api/v1/missions/${missionId}/completed`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    },
  });

  console.log(response.data.data);
  return response.data.data;
}
