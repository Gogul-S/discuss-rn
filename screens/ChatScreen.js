import React, {useEffect, useState, useRef} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

import io from 'socket.io-client';
import MessageInput from '../components/MessageInput';
import Message from '../components/Message';

const ChatScreen = props => {
  const [messageList, setMessageList] = useState([]);

  let socket = useRef();

  useEffect(() => {
    socket.current = io('http://192.168.43.188:3000/');

    socket.current.on('newMsg', data => {
      let user = data.user === user ? 'You' : data.user;
      setMessageList(messages => {
        const existingMessages = [...messages, {user, message: data.message}];
        return existingMessages;
      });
    });
  }, [io]);

  const sendTextMessage = message => {
    socket.current.emit('msg', {
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
