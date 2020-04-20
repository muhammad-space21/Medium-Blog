import { getHeaders } from '../utils/index';
import { API_URL } from '../config/index';

export const userService = {
  login,
  logout,
  register
};


function login({ email, password }) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  };

  return fetch(`${API_URL}/users/authenticate`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      // storing user details and token to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(user));

      return user;
    });
}


function logout() {
  // removes  user from localStorage once logs out
  localStorage.removeItem('user');
}
