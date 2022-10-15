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
// audio setup
import AudioRecorderPlayer, {
  AudioEncoderAndroidType,
  AudioSourceAndroidType,
  AVModeIOSOption,
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  OutputFormatAndroidType,
} from 'react-native-audio-recorder-player';
const audioRecorderPlayer = new AudioRecorderPlayer();
audioRecorderPlayer.setSubscriptionDuration(0.09);
// everytime error when path used for recording

const ChatScreen = ({navigation, route}) => {
  // console.log('Route--ChatScreen----------> ', route);
  const [messages, setMessages] = useState(dummyMessages);
  const [myMsg, setmyMsg] = useState('');
  const [isPlaying, setisPlaying] = useState(false);
  const chatEnd = React.useRef(null);
  // audio states
  const [isLoggingIn, setisLoggingIn] = useState(false);
  const [recordSecs, setrecordSecs] = useState(0);
  const [recordTime, setrecordTime] = useState('00:00:00');
  const [currentPositionSec, setcurrentPositionSec] = useState(0);
  const [currentDurationSec, setcurrentDurationSec] = useState(0);
  const [playTime, setplayTime] = useState('00:00:00');
  const [duration, setduration] = useState('00:00:00');
  // end audio states

  const sendMessage = msg => {
    if (msg) {
      setMessages([
        ...messages,
        {
          messageStatus: 'SENT',
          messageType: 'TEXT',
          message: msg,
        },
      ]);
      console.log('Send Message');
    }
  };
  const receiveMessage = () => {
    console.log('Recieve Message');
  };
  const sendVoice = () => {
    setMessages([
      ...messages,
      {
        messageStatus: 'SENT',
        messageType: 'VOICE',
      },
    ]);
    console.log('Send Voice Message');
  };

  const onStartRecord = async () => {
    // define audio name and extension
    // const path = 'hello.m4a';
    // const path = 'sound.mp4';
    // const dirs = RNFetchBlob.fs.dirs;
    // const path = Platform.select({
    //   ios: 'hello.m4a',
    //   android: `${caches}/sound.mp4`,
    // });
    // const path = 'sound.mp4';

    // everytime error when used path
    const audioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
    };
    console.log('audioSet', audioSet);
    // set path
    // const uri = await audioRecorderPlayer.startRecorder(path, audioSet);

    const result = await audioRecorderPlayer.startRecorder();
    // const result = await audioRecorderPlayer.startRecorder(null, audioSet);
    console.log(
      'Results========================> ',
      result,
      ' <====================',
    );
    audioRecorderPlayer.addRecordBackListener(e => {
      setrecordSecs(e.currentPosition);
      setrecordTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
      console.log(
        'recordTime====> ',
        audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
      );
      return;
    });
    console.log(result);
  };
  const onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    sendVoice();
    audioRecorderPlayer.removeRecordBackListener();
    setrecordSecs(0);
    console.log(result);
  };
  const onStartPlay = async e => {
    console.log('onStartPlay');
    // const path = 'hello.m4a';
    // const path = 'sound.mp4';
    // const msg = await audioRecorderPlayer.startPlayer(path);
    const msg = await audioRecorderPlayer.startPlayer();
    console.log('Start----MSG---->', msg);
    audioRecorderPlayer.setVolume(1.0);
    // console.log(msg);
    audioRecorderPlayer.addPlayBackListener(e => {
      if (e.currentPosition === e.duration) {
        console.log('finished');
        audioRecorderPlayer.stopPlayer();
      }

      setcurrentDurationSec(e.currentPosition);
      setcurrentDurationSec(e.duration);
      setplayTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
      setduration(audioRecorderPlayer.mmssss(Math.floor(e.duration)));
    });
    setisPlaying(!isPlaying);
  };
  const onStopPlay = async e => {
    console.log('onStopPlay');
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
    Alert.alert('Recording!', 'Recoring Stoped!');
  };

  // end audio setup
  const render = ({item, index}) => {
    if (item?.messageStatus === 'RECEIVED' && item?.messageType === 'TEXT') {
      // console.log('Text Recived');
      return <ChatBubbleReceived message={item.message} />;
    } else if (
      item?.messageStatus === 'RECEIVED' &&
      item?.messageType === 'VOICE'
    ) {
      // console.log('VOICE Recived');
      return (
        <VoiceMessageReceived
          isPlaying={isPlaying}
          setisPlaying={setisPlaying}
          playable={onStartPlay}
          stopPlayer={onStartPlay}
        />
      );
    } else if (item?.messageStatus === 'SENT' && item?.messageType === 'TEXT') {
      // console.log('Text SENT');
      return <ChatBubbleSent message={item.message} />;
    } else if (
      item?.messageStatus === 'SENT' &&
      item?.messageType === 'VOICE'
    ) {
      // console.log('VOICE SENT');
      return (
        <VoiceMessageSent
          isPlaying={isPlaying}
          setisPlaying={setisPlaying}
          playable={onStartPlay}
          stopPlayer={onStartPlay}
        />
      );
    } else
      console.log(
        'Case not handled mate',
        item?.messageStatus,
        item?.messageType,
      );
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
      {/* <TouchableOpacity
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
       </TouchableOpacity> */}

      <View info="2. operation section" style={[styles.opArea]}>
        {/* <View info="input"> */}

        <TextInput
          placeholder="Write Message"
          value={myMsg}
          multiline={true}
          numberOfLines={2}
          onChangeText={text => {
            setmyMsg(text);
          }}
          style={[styles.input]}
        />
        {/* </View> */}
        <View info="buttons" style={[styles.button, styles.send]}>
          <TouchableOpacity
            info="send button"
            onPress={() => {
              sendMessage(myMsg);
              setmyMsg('');
            }}
            style={styles.iconButton}>
            <Image source={send} style={styles.iconImg} />
          </TouchableOpacity>
          <TouchableOpacity
            info="microphone"
            onPressIn={onStartRecord}
            onPressOut={() => {
              onStopRecord();
            }}
            style={styles.iconButton}>
            <Image source={microphone} style={styles.iconImg} />
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
