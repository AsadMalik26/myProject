import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theStyle} from '../stylesheets/Stylesheet';

const TheHeader = ({title}) => {
  return (
    <View style={[styles.flex, styles.space, styles.header]}>
      {/* heading */}
      <View style={[theStyle.padding]}>
        <Text style={theStyle.h3}>{title}</Text>
      </View>
      {/* icons */}
      <View style={[theStyle.padding, styles.flex, styles.center]}>
        <Text style={[theStyle.padding]}>ICON 1</Text>
        <Text style={[theStyle.padding]}>ICON 2</Text>
      </View>
    </View>
  );
};

export default TheHeader;

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    flexDirection: 'row',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  space: {
    justifyContent: 'space-between',
  },
  header: {
    height: 50,
    alignItems: 'center',
    backgroundColor: '#a8dadc',
    // shadow
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 20,
  },
});
