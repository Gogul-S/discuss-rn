export const SET_USER = 'SET USER';

export const setUser = (username, messages) => {
  return {
    type: SET_USER,
    username: username,
    messages,
  };
};
