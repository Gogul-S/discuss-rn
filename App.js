import React, {createContext, useContext} from 'react';
import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import ChatScreen from './screens/ChatScreen';
import JoinChatScreen from './screens/JoinChatScreen';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import UserReducer from './store/reducers/UserReducer';
import io from 'socket.io-client';

import SocketReducer from './utils/SocketUtlis';
import AppNavigator from './navigation/AppNavigator';

const rootReducer = combineReducers({
  user: UserReducer,
  socket: SocketReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <SafeAreaView style={{height: '100%', width: '100%'}}>
          <AppNavigator />
        </SafeAreaView>
      </>
    </Provider>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default App;
