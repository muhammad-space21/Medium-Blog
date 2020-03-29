export const getHeaders = (getState) => ({
  Authorization: `Bearer ${getState().authReducer.token}`,
  'Content-type': 'application/json'
});
