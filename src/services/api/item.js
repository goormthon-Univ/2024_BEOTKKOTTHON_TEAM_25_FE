import api from './defaultClient';

export const getStoreItmesByCategory = async (category) => {
  const response = await api.get(`/api/v1/items?category=${category}`, {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') },
  });

  return response.data.data;
};
