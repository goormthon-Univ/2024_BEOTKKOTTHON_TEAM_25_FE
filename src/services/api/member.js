import api from './defaultClient';

export const getMyInventory = async (memberId, category) => {
  const response = await api.get(`/api/v1/members/${memberId}/inventory?category=${category}`, {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') },
  });

  return response.data.data;
};
