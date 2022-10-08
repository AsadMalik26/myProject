import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TheHeader from './src/components/TheHeader';
// import TheHeader from './src/components/TheHeader';
import ParentScreen from './src/Screens/ParentScreen';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <TheHeader />
      <ParentScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
