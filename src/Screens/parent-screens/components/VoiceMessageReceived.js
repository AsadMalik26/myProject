import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import pic from '../../../../assets/images/sample-dp.jpg';
import play from '../../../../assets/images/play-fill.png';
import pause from '../../../../assets/images/pause.webp';

const VoiceMessageReceived = ({
  isPlaying,
  setisPlaying,
  playable,
  stopPlayer,
}) => {
  // const [isPlaying, setisPlaying] = useState(false);
  return (
    <View info="voice box" style={[styles.voice, styles.receved]}>
      <Image source={pic} style={styles.img} />
      <TouchableOpacity
        onPress={() => {
          if (isPlaying) stopPlayer();
          setisPlaying(!isPlaying);
          playable();
        }}>
        <Image
          source={isPlaying ? pause : play}
          style={styles.voicePlayButton}
        />
      </TouchableOpacity>
      <View info="voice-timeline" style={styles.voiceTimeline}>
        <View info="playing-tip" style={styles.playingTip}></View>
      </View>
    </View>
  );
};

export default VoiceMessageReceived;

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
  receved: {
    backgroundColor: '#2a9d8f70',
    marginTop: 5,
    marginLeft: 5,
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
