import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ParentScreen from './src/Screens/ParentScreen';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <ParentScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
