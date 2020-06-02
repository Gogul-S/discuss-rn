import React, {useContext, useState, useEffect, useCallback} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as UserActions from './../store/actions/UserActions';
import {useSelector, useDispatch} from 'react-redux';

const JoinChatScreen = props => {
  const socket = useSelector(state => state.socket.socket);
  const [userName, setUsername] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('userSet', data => {
      dispatch(UserActions.setUser(data.username, data.messages));
    });
  }, [socket]);

  const joinChat = () => {
    if (userName) {
      socket.emit('newUser', userName);
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>USERNAME</Text>
        <TextInput
          selectionColor="#888"
          style={styles.userNameInput}
          value={userName}
          onChangeText={text => {
            setUsername(text);
          }}
        />
      </View>
      <TouchableOpacity onPress={joinChat}>
        <Text style={styles.buttonText}>JOIN CHAT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
  },
  title: {
    color: '#3087ff',
    fontWeight: 'bold',
  },
  userNameInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    width: '100%',
    fontSize: 18,
    paddingStart: 10,
    height: 50,
    marginTop: 10,
  },
  buttonText: {
    borderColor: '#3087ff',
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
    color: '#3087ff',
    borderRadius: 10,
  },
});

export default JoinChatScreen;
