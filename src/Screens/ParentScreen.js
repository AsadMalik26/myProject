import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ChatScreen from './child-screens/ChatScreen';
import ChildScreen from './ChildScreen';
import SignInScreen from './switch-screens/SignInScreen';
import SignUpScreen from './switch-screens/SignUpScreen';
const Stack = createStackNavigator();

const ParentScreen = ({navigation, route}) => {
  // console.log('Route Child-Screen=============> ', route);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: true}}
        // initialRouteName="Chats"
      >
        <Stack.Group
          //  navigationKey={false}
          screenOptions={{
            headerTitleAlign: 'center',
            headerLeft: () => null,
            // headerRight: () => <Text>hello, you can modify header</Text>,
          }}>
          <Stack.Screen
            name="SignInScreen"
            component={SignInScreen}
            options={{title: 'Sign In'}}
          />
          <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{title: 'Sign Up'}}
          />
        </Stack.Group>
        <Stack.Group>
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
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ParentScreen;

const styles = StyleSheet.create({});
