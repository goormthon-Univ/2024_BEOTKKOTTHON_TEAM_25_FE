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

export const getFriendRequests = async () => {
  const response = await api.get(`/api/v1/members/me/friends/requests`, {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') },
  });

  return response.data.data;
};

export const accpetFriendRequest = async (requestId) => {
  const response = await api.post(
    `/api/v1/members/me/friends`,
    { requestId },
    {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') },
    },
  );
  return response;
};

export const serachMemberByEarthName = async (keyword) => {
  const response = await api.get(`/api/v1/members?keyword=${keyword}`, {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') },
  });

  return response.data.data;
};

export const getMyFriends = async () => {
  const response = await api.get(`/api/v1/members/me/friends`, {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') },
  });

  return response.data.data;
};

export const deleteFriend = async (friendId) => {
  const response = await api.delete(`/api/v1/members/me/friends/${friendId}`, {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') },
  });

  return response.data.data;
};

export const requestFriend = async (memberId) => {
  const response = await api.post(
    `/api/v1/members/${memberId}/friends/requests`,
    { memberId },
    {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') },
    },
  );

  return response;
};
