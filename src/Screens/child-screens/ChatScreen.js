import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {theStyle} from '../../stylesheets/Stylesheet';
// icons img
import send from '../../../assets/images/send.png';

import microphone from '../../../assets/images/microphone.png';
import {GiftedChat} from 'react-native-gifted-chat';
import {GiftedChatUI} from '../gifted-chat/GiftedChatUI';
import VoiceMessageReceived from '../parent-screens/components/VoiceMessageReceived';
import ChatBubbleReceived from '../parent-screens/components/ChatBubbleReceived';
import ChatBubbleSent from '../parent-screens/components/ChatBubbleSent';
import {dummyMessages} from '../dataset';
import VoiceMessageSent from '../parent-screens/components/VoiceMessageSent';

const render = ({item, index}) => {
  if (item?.messageStatus === 'RECEIVED' && item?.messageType === 'TEXT') {
    console.log('Text Recived');
    return <ChatBubbleReceived />;
  } else if (
    item?.messageStatus === 'RECEIVED' &&
    item?.messageType === 'VOICE'
  ) {
    console.log('VOICE Recived');
    return <VoiceMessageReceived />;
  } else if (item?.messageStatus === 'SENT' && item?.messageType === 'TEXT') {
    console.log('Text SENT');
    return <ChatBubbleSent />;
  } else if (item?.messageStatus === 'SENT' && item?.messageType === 'VOICE') {
    console.log('VOICE SENT');
    return <VoiceMessageSent />;
  } else
    console.log(
      'Case not handled mate',
      item?.messageStatus,
      item?.messageType,
    );
};

const ChatScreen = ({navigation, route}) => {
  // console.log('Route--ChatScreen----------> ', route);
  const [messages, setMessages] = useState(dummyMessages);
  const sendMessage = () => {
    setMessages([
      ...messages,
      {
        messageStatus: 'SENT',
        messageType: 'TEXT',
        messages:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque porro idobcaecati, dolorem laudantium cupiditate incidunt,',
      },
    ]);
    console.log('Send Message');
  };
  const receiveMessage = () => {
    console.log('Recieve Message');
  };
  return (
    <View style={[theStyle.flex]}>
      <View info="1. chat display" style={[styles.chatArea]}>
        <FlatList
          data={messages}
          // renderItem={({item, index}) => console.log('Hello messages')}
          renderItem={render}
        />

        <View info="Gifted Chat">{/* <GiftedChatUI /> */}</View>
      </View>
      {/* end 1 */}

      <View info="2. operation section" style={[styles.opArea]}>
        {/* <View info="input"> */}
        <TextInput
          placeholder="Write Message"
          multiline={true}
          numberOfLines={2}
          style={[styles.input]}
        />
        {/* </View> */}
        <View info="buttons" style={[styles.button, styles.send]}>
          <TouchableOpacity
            info="send button"
            onPress={sendMessage}
            style={{
              width: 40,
              height: 40,
              //   backgroundColor: 'red',
              aspectRatio: 1 / 1,
              borderRadius: 50,
              padding: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={send}
              style={{
                width: 30,
                height: 30,
                aspectRatio: 1 / 1,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            info="microphone"
            style={{
              width: 40,
              height: 40,
              //   backgroundColor: 'red',
              aspectRatio: 1 / 1,
              borderRadius: 50,
              padding: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={microphone}
              style={{
                width: 30,
                height: 30,
                aspectRatio: 1 / 1,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  // 1
  chatArea: {flex: 1},

  // 2
  opArea: {
    height: 45,
    flexDirection: 'row',
    marginHorizontal: 2,
    justifyContent: 'space-evenly',
    marginTop: 5,
    // minHeight: 45,
  },
  input: {
    width: '75%',
    backgroundColor: '#bde0fe',
    borderWidth: 1,
    borderRadius: 20,
    marginLeft: 5,
    paddingHorizontal: 10,
  },
  button: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  send: {backgroundColor: '#bde0fe', borderRadius: 50, marginHorizontal: 5},
  sendIcon: {},
});
