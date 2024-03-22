import axios from './defaultClient';

export async function getMyPoint() {
  const response = await axios.get('/api/v1/members/me/point', {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') },
  });

  const { point } = response.data.data;

  return point;
}

export async function getEarthStatus() {
  const memberId = localStorage.getItem('memberId');

  const response = await axios.get(
    `/api/v1/members/${memberId}/earth`,
    {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') },
    },
    { params: memberId },
  );

  const { usingItems, earthName, withDays } = response.data.data;

  return { usingItems, earthName, withDays };
}
