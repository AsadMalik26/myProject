import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ChatBubbleSent = ({message = 'Lorem ipsum dolor'}) => {
  return (
    <View info="1.2 Bubble sent" style={[styles.bubble, styles.sent]}>
      <Text>{message}</Text>
      <View info="sent tip" style={[styles.sentTip, {}]}></View>
    </View>
  );
};

export default ChatBubbleSent;

const styles = StyleSheet.create({
  bubble: {
    maxWidth: '70%',
    minWidth: '20%',
    marginTop: 3,
    marginBottom: 3,
    padding: 5,
    borderRadius: 13,

    position: 'relative',
  },
  sentTip: {
    position: 'absolute',
    backgroundColor: '#bde0fe60',
    width: 5,
    height: 7,
    bottom: -4,
    right: -3,
    transform: [{rotate: '-45deg'}],
    // borderWidth: 1,
    borderBottomStartRadius: 20,
  },
  sent: {
    backgroundColor: '#bde0fe60',
    marginRight: 5,
    borderBottomRightRadius: 0,
    alignSelf: 'flex-end',
  },
});
