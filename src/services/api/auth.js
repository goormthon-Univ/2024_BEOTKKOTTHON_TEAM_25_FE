import axios from './defaultClient';

export async function postLogin({ email, password }) {
  const response = await axios.post('/api/v1/members/login', { email, password });

  const { memberId, accessToken, refreshToken } = response.data.data;

  return { memberId, accessToken, refreshToken };
}
