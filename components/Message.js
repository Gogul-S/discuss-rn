import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Message = props => {
  return (
    <View
      style={{
        ...styles.messageHolder,
        alignItems: props.selfMessage ? 'flex-end' : 'flex-start',
      }}>
      {!props.selfMessage && (
        <Text style={styles.messageTitle}>{props.user}</Text>
      )}
      <View style={styles.messageOutline}>
        <Text style={styles.messageText}>{props.message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageTitle: {
    marginStart: 10,
    fontWeight: 'bold',
    color: '#3087ff',
    fontSize: 12,
  },
  messageOutline: {
    marginTop: 4,
    padding: 15,
    backgroundColor: '#eee',
    borderRadius: 20,
  },
  messageText: {
    fontSize: 16,
  },
  messageHolder: {
    marginBottom: 10,
    alignItems: 'flex-start',
  },
});

export default Message;
