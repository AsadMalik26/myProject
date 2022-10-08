// import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {theStyle} from '../../../stylesheets/Stylesheet';

const ChatCard = ({name, message, count}) => {
  return (
    <View style={[theStyle.padding, theStyle.flexRow]}>
      {/* picture */}
      <Image
        source={require('../../../../assets/images/sample-dp.jpg')}
        resizeMode={'cover'}
        style={[theStyle.dp, styles.img]}
      />
      {/* contact info */}
      <View style={[theStyle.padding, styles.info]}>
        {/* sender name */}
        <Text style={[theStyle.h4]}>{name}</Text>
        {/* message initails*/}
        <Text numberOfLines={1} lineBreakMode="tail">
          {message}
        </Text>
        <View style={[styles.notify]}>
          <Text style={styles.notifyFont}>{count}</Text>
        </View>
      </View>
    </View>
  );
};

export default ChatCard;

const styles = StyleSheet.create({
  img: {flex: 0.18},
  info: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    position: 'relative',
    flex: 0.8,
  },
  notify: {
    position: 'absolute',
    right: 10,
    backgroundColor: '#2a9d8f',
    // '#006d77' | '#2a9d8f',
    width: 17,
    height: 17,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  notifyFont: {
    fontSize: 10,
    color: 'white',
  },
});
