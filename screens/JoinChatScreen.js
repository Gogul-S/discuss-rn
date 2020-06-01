import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const JoinChatScreen = props => {
  const joinChat = () => {};

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>USERNAME</Text>
        <TextInput style={styles.userNameInput} />
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
