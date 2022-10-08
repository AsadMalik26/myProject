import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from './parent-screens/Home';
import Status from './parent-screens/Status';
import Calls from './parent-screens/Calls';
import Camera from './parent-screens/Camera';
import Chats from './parent-screens/Chats';
import SettingsScreen from './parent-screens/SettingsScreen';
const Tab = createMaterialTopTabNavigator();

const ParentScreen = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Chats"
        tabBarPosition="bottom"
        screenOptions={{
          //   tabBarShowIcon: true,
          tabBarLabelStyle: {fontSize: 10},
        }}>
        <Tab.Screen name="Camera" component={Camera} />
        <Tab.Screen name="Chats" component={Chats} />
        <Tab.Screen name="Status" component={Status} />
        <Tab.Screen name="Calls" component={Calls} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default ParentScreen;

const styles = StyleSheet.create({});
