import React, {useEffect, useState} from 'react';
import {AsyncStorage, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ChatScreen from './child-screens/ChatScreen';
import ChildScreen from './ChildScreen';
import SignInScreen from './switch-screens/SignInScreen';
import SignUpScreen from './switch-screens/SignUpScreen';
import SplashScreen from './switch-screens/SplashScreen';
const Stack = createStackNavigator();

const ParentScreen = ({navigation, route}) => {
  // console.log('Route Child-Screen=============> ', route);
  const [isAuth, setIsAuth] = useState(false);
  global.setAuth = {
    setIsAuth: setIsAuth,
    isAuth: isAuth,
  };
  // const p = {setIsAuth};
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: true}}
        // initialRouteName="Chats"
        initialRouteName="SplashScreen">
        {!true ? (
          <>
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
              <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{header: () => null}}
                // initialParams={{p: p}}
              />
            </Stack.Group>
          </>
        ) : (
          <>
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ParentScreen;

const styles = StyleSheet.create({});
