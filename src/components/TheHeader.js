import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theStyle} from '../stylesheets/Stylesheet';

const TheHeader = () => {
  return (
    <View style={[styles.flex, styles.space]}>
      {/* heading */}
      <View style={[styles.padding]}>
        <Text style={theStyle.headingSize}>Heading</Text>
      </View>
      {/* icons */}
      <View style={[styles.padding, styles.flex, styles.center]}>
        <Text style={[styles.padding]}>ICON 1</Text>
        <Text style={[styles.padding]}>ICON 2</Text>
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
  padding: {
    padding: 5,
  },
  space: {
    justifyContent: 'space-between',
  },
});
