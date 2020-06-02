import {SET_USER} from '../actions/UserActions';

const initialState = {
  userName: '',
  messages: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        userName: action.username,
        messages: action.messages,
      };
  }
  return state;
};

export default UserReducer;
