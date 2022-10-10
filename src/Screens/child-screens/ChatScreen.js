import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {theStyle} from '../../stylesheets/Stylesheet';
// icons img
import send from '../../../assets/images/send.png';
import pic from '../../../assets/images/sample-dp.jpg';
import play from '../../../assets/images/play-fill.png';

const ChatScreen = () => {
  return (
    <View style={[theStyle.flex]}>
      <View info="1. chat display" style={[styles.chatArea]}>
        <View
          info="1.1 Bubble received"
          style={[styles.bubble, styles.received]}>
          <Text style={styles.senderName}>Sender Name</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque porro
            id obcaecati, dolorem laudantium cupiditate incidunt,
          </Text>
          <View info="reciver tip" style={[styles.receiveTip, {}]}></View>
        </View>
        <View info="1.2 Bubble sent" style={[styles.bubble, styles.sent]}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque porro
            id obcaecati, dolorem laudantium cupiditate incidunt,
          </Text>
          <View info="sent tip" style={[styles.sentTip, {}]}></View>
        </View>
        {/* voice message */}
        <View info="voice box" style={styles.voice}>
          <Image source={pic} style={styles.img} />
          <Image source={play} style={styles.voicePlayButton} />
          <View info="voice-timeline" style={styles.voiceTimeline}>
            <View info="playing-tip" style={styles.playingTip}></View>
          </View>
        </View>
        {/* end voice message */}
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
        </View>
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  // 1
  chatArea: {flex: 1},
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
  received: {
    backgroundColor: '#2a9d8f50',
    marginLeft: 5,
    borderBottomLeftRadius: 0,
    alignSelf: 'flex-start',
  },
  sent: {
    backgroundColor: '#bde0fe60',
    marginRight: 5,
    borderBottomRightRadius: 0,
    alignSelf: 'flex-end',
  },
  senderName: {fontWeight: 'bold', textDecorationLine: 'underline'},
  // 2
  opArea: {
    height: 45,
    flexDirection: 'row',
    marginHorizontal: 2,
    justifyContent: 'space-evenly',
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
  button: {width: '25%', justifyContent: 'center', alignItems: 'center'},
  send: {backgroundColor: '#bde0fe', borderRadius: 50, marginHorizontal: 5},
  sendIcon: {},
  //   voice
  voice: {
    flexDirection: 'row',
    width: '70%',
    marginTop: 5,
    marginLeft: 5,
    padding: 5,
    height: 55,
    backgroundColor: '#2a9d8f70',
    borderRadius: 13,
    alignItems: 'center',
  },
  img: {
    width: 45,
    height: 45,
    aspectRatio: 1 / 1,
    borderWidth: 1,
    borderRadius: 50,
  },
  voicePlayButton: {
    width: 30,
    height: 30,
    // backgroundColor: 'black',
    // marginLeft: 5,
    aspectRatio: 1 / 1,
  },
  voiceTimeline: {
    // width: '100%',
    flex: 1,
    borderRadius: 1,
    backgroundColor: '#219ebc',
    height: 3,
    marginHorizontal: 5,
    position: 'relative',
  },
  playingTip: {
    width: 7,
    height: 7,
    bottom: 2,
    borderRadius: 5,
    position: 'relative',
    backgroundColor: 'red',
  },
});
