import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ChatBubbleReceived = ({senderName = 'Sender Name', message}) => {
  return (
    <View info="1.1 Bubble received" style={[styles.bubble, styles.received]}>
      <Text style={styles.senderName}>{senderName}</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque porro id
        obcaecati, dolorem laudantium cupiditate incidunt,
      </Text>
      <View info="reciver tip" style={[styles.receiveTip, {}]}></View>
    </View>
  );
};

export default ChatBubbleReceived;

const styles = StyleSheet.create({
  bubble: {
    width: '70%',
    marginTop: 5,
    padding: 5,
    borderRadius: 13,

    position: 'relative',
  },
  receiveTip: {
    position: 'absolute',
    backgroundColor: '#2a9d8f70',
    width: 5,
    height: 7,
    bottom: -4,
    left: -3,
    transform: [{rotate: '45deg'}],
    // borderWidth: 1,
    borderBottomEndRadius: 20,
  },
  received: {
    backgroundColor: '#2a9d8f50',
    marginLeft: 5,
    borderBottomLeftRadius: 0,
    alignSelf: 'flex-start',
  },
  senderName: {fontWeight: 'bold', textDecorationLine: 'underline'},
});
