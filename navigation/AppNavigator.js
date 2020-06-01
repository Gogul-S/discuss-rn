import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import ChatScreen from './../screens/ChatScreen';
import JoinChatScreen from './../screens/JoinChatScreen';

const AppNavigator = props => {
  const user = useSelector(state => state.user.userName);
  return (
    <NavigationContainer>
      {user && user.length > 0 ? <ChatScreen /> : <JoinChatScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;
