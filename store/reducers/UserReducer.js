import {SET_USER} from '../actions/UserActions';

const initialState = {
  userName: '',
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        userName: action.username,
      };
  }
  return state;
};

export default UserReducer;
