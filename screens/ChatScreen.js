import React, {useEffect, useState, useRef, useContext} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

import MessageInput from '../components/MessageInput';
import Message from '../components/Message';
import SocketContext from './../utils/SocketUtlis';
import {useSelector} from 'react-redux';

const ChatScreen = props => {
  const [messageList, setMessageList] = useState([]);

  const socket = useSelector(state => state.socket.socket);

  useEffect(() => {
    socket.on('newMsg', data => {
      let user = data.user === user ? 'You' : data.user;
      setMessageList(messages => {
        const existingMessages = [...messages, {user, message: data.message}];
        return existingMessages;
      });
    });
  }, []);

  const sendTextMessage = message => {
    socket.emit('msg', {
      message: message,
      user: 'Gogul',
    });
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={messageList}
        style={styles.messageList}
        renderItem={itemData => (
          <Message
            user={itemData.item.user}
            message={itemData.item.message}
            selfMessage={itemData.item.user === 'Gogul'}
          />
        )}
      />
      <MessageInput sendMessage={sendTextMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 20,
  },
  messageList: {
    marginBottom: 10,
    flex: 1,
  },
});

export default ChatScreen;
