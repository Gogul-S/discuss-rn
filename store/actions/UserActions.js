export const SET_USER = 'SET USER';

export const setUser = username => {
  return {
    type: SET_USER,
    username: username,
  };
};
