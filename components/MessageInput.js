import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

const MessageInput = props => {
  const [text, setText] = useState();
  return (
    <View style={{...styles.messageInputConatiner, ...props.style}}>
      <View style={styles.messageInput}>
        <TextInput
          value={text}
          onChangeText={text => {
            setText(text);
          }}
          selectionColor="#3087ff"
          multiline
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          props.sendMessage(text);
          setText('');
        }}
        style={styles.sendButton}>
        <Text style={styles.senButtonText}>SEND</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  messageInputConatiner: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#3087ff',
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 8,
    width: '100%',
    height: 50,
  },
  messageInput: {
    flex: 1,
    fontSize: 18,
    paddingStart: 10,
    marginEnd: 15,
  },
  textInput: {
    flex: 1,
  },
  sendButton: {
    marginEnd: 20,
  },
  senButtonText: {
    color: '#3087ff',
    textAlign: 'center',
  },
});

export default MessageInput;
