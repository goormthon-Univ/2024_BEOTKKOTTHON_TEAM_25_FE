import api from './defaultClient';

export const getMyInventory = async (memberId, category) => {
  const response = await api.get(`/api/v1/members/${memberId}/inventory?category=${category}`, {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') },
  });

  return response.data.data;
};

export const toggleItemUsing = async (itemId) => {
  const response = await api.patch(
    `/api/v1/members/me/items/${itemId}/using`,
    {},
    {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') },
    },
  );

  return response;
};

export const buyItem = async (itemId) => {
  const response = await api.post(
    `/api/v1/members/me/items/${itemId}`,
    {},
    {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') },
    },
  );
  return response;
};
