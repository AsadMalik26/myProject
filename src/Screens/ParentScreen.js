import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ChatScreen from './child-screens/ChatScreen';
import ChildScreen from './ChildScreen';
const Stack = createStackNavigator();

const ParentScreen = ({navigation, route}) => {
  // console.log('Route Child-Screen=============> ', route);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: true}}
        // initialRouteName="Chats"
      >
        <Stack.Screen
          name="TabScreens"
          component={ChildScreen}
          options={{title: 'Hello nesting', headerShown: false}}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={({route}) => ({title: route.params.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ParentScreen;

const styles = StyleSheet.create({});
