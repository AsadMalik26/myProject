import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TheHeader from '../../components/TheHeader';

const SettingsScreen = () => {
  return (
    <View>
      <TheHeader title="Settings" />
      <Text>SettingsScreen</Text>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
