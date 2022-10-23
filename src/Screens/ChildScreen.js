import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Status from './parent-screens/Status';
import Calls from './parent-screens/Calls';
import Camera from './parent-screens/Camera';
import Chats from './parent-screens/Chats';
import SettingsScreen from './parent-screens/SettingsScreen';
import {GiftedChatUI} from './gifted-chat/GiftedChatUI';
import FirebaseTestScreen from './parent-screens/firebase-test/FirebaseTestScreen';
import Fetch from './parent-screens/firebase-test/Fetch';
const Tab = createMaterialTopTabNavigator();

const ChildScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      backBehavior="initialRoute"
      tabBarPosition="bottom"
      // orientation="vertical"
      screenOptions={{
        //   tabBarShowIcon: true,
        tabBarLabelStyle: {fontSize: 10},
      }}>
      <Tab.Screen name="Camera" component={Camera} />
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Calls" component={Calls} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Gift" component={GiftedChatUI} />
      {/* <Tab.Screen name="FirebaseTestScreen" component={FirebaseTestScreen} /> */}
      <Tab.Screen name="FirebaseFetch" component={Fetch} />
      {/* <Tab.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{title: 'Chat'}}
        /> */}
      {/* <Tab.Screen name="testing" component={ChildScreen} /> */}
    </Tab.Navigator>
  );
};

export default ChildScreen;

const styles = StyleSheet.create({});
