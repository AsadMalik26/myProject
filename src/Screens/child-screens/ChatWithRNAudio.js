import {
  Alert,
  FlatList,
  Image,
  Platform,
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
import VoiceMessageSent from '../parent-screens/components/VoiceMessageSent';
import {dummyMessages} from '../dataset';

const render = ({item, index}) => {
  if (item?.messageStatus === 'RECEIVED' && item?.messageType === 'TEXT') {
    // console.log('Text Recived');
    return <ChatBubbleReceived />;
  } else if (
    item?.messageStatus === 'RECEIVED' &&
    item?.messageType === 'VOICE'
  ) {
    // console.log('VOICE Recived');
    return <VoiceMessageReceived />;
  } else if (item?.messageStatus === 'SENT' && item?.messageType === 'TEXT') {
    // console.log('Text SENT');
    return <ChatBubbleSent />;
  } else if (item?.messageStatus === 'SENT' && item?.messageType === 'VOICE') {
    // console.log('VOICE SENT');
    return <VoiceMessageSent />;
  } else
    console.log(
      'Case not handled mate',
      item?.messageStatus,
      item?.messageType,
    );
};

const ChatWithRNAudio = ({navigation, route}) => {
  // console.log('Route--ChatWithRNAudio----------> ', route);
  const [messages, setMessages] = useState(dummyMessages);
  const chatEnd = React.useRef(null);
  // audio states

  // end audio states

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
          onScrollEndDrag={e => {
            e.currentTarget;
          }}
          ref={chatEnd}
          onContentSizeChange={(w, h) => {
            chatEnd.current.scrollToEnd({animating: true});
          }}
        />

        <View info="Gifted Chat">{/* <GiftedChatUI /> */}</View>
      </View>
      {/* end 1 */}
      <TouchableOpacity
        onPress={onStartPlay}
        style={{
          margin: 10,
          width: 100,
          padding: 10,
          alignSelf: 'center',
          backgroundColor: '#bde0fe50',
          alignItems: 'center',
          borderRadius: 50,
        }}>
        <Text>Play Recording</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onStopPlay}
        style={{
          margin: 10,
          width: 100,
          padding: 10,
          alignSelf: 'center',
          backgroundColor: '#bde0fe50',
          alignItems: 'center',
          borderRadius: 50,
        }}>
        <Text>Stop Recording</Text>
      </TouchableOpacity>
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
            style={styles.iconButton}>
            <Image source={send} style={styles.iconImg} />
          </TouchableOpacity>
          <TouchableOpacity
            info="microphone"
            onPressIn={onStartRecord}
            onPressOut={onStopRecord}
            style={styles.iconButton}>
            <Image source={microphone} style={styles.iconImg} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChatWithRNAudio;

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
  iconButton: {
    width: 40,
    height: 40,
    aspectRatio: 1 / 1,
    borderRadius: 50,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImg: {width: 30, height: 30, aspectRatio: 1 / 1},
  send: {backgroundColor: '#bde0fe', borderRadius: 50, marginHorizontal: 5},
  sendIcon: {},
});
