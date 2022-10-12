import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import pic from '../../../../assets/images/sample-dp.jpg';
import play from '../../../../assets/images/play-fill.png';

const VoiceMessageSent = () => {
  return (
    <View info="voice box" style={[styles.voice, styles.sent]}>
      <Image source={pic} style={styles.img} />
      <Image source={play} style={styles.voicePlayButton} />
      <View info="voice-timeline" style={styles.voiceTimeline}>
        <View info="playing-tip" style={styles.playingTip}></View>
      </View>
    </View>
  );
};

export default VoiceMessageSent;

const styles = StyleSheet.create({
  //   voice message
  voice: {
    flexDirection: 'row',
    width: '70%',
    padding: 5,
    height: 55,
    borderRadius: 13,
    alignItems: 'center',
  },
  sent: {
    backgroundColor: '#bde0fe',
    marginTop: 5,
    marginRight: 5,
    alignSelf: 'flex-end',
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
