import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import ChatScreen from './../screens/ChatScreen';
import JoinChatScreen from './../screens/JoinChatScreen';

const AppNavigator = props => {
  const user = useSelector(state => state.user.userName);
  const messages = useSelector(state => state.user.messages);
  console.log(messages);
  return (
    <NavigationContainer>
      {user && user.length > 0 ? (
        <ChatScreen messages={messages} />
      ) : (
        <JoinChatScreen />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
