import React from 'react';
import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import ChatScreen from './screens/ChatScreen';
import JoinChatScreen from './screens/JoinChatScreen';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import UserReducer from './store/reducers/UserReducer';

const rootReducer = combineReducers({
  user: UserReducer,
});
const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <SafeAreaView style={styles.view}>
          <ChatScreen />
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
